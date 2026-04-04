import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const ACCESS_JWT_ALG = 'HS256';

/**
 * accessToken JWT에서 role 확인. BE `JWT_ACCESS_SECRET`과 FE `.env.local` 값 일치 필요.
 */
async function readAccessAuth(accessToken) {
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!accessToken || !secret) {
    return { verified: false, role: null };
  }
  try {
    const { payload } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(secret),
      { algorithms: [ACCESS_JWT_ALG] },
    );
    const role = payload.role;
    return {
      verified: true,
      role: typeof role === 'string' ? role : null,
    };
  } catch {
    return { verified: false, role: null };
  }
}

export function shouldBlockAdmin(pathname, userRole) {
  if (!pathname.startsWith('/admin')) return false;
  return userRole !== 'ADMIN';
}

export function getRedirectForUnauthorized(pathname) {
  if (pathname.startsWith('/admin')) return '/';
  return null;
}

export async function proxy(req) {
  const { pathname } = req.nextUrl;

  // Next 16 `proxy.js`에는 `config.matcher`를 둘 수 없음 → 처리할 경로만 수동 필터
  const isRoot = pathname === '/';
  const isAdmin = pathname.startsWith('/admin');
  if (!isRoot && !isAdmin) {
    return NextResponse.next();
  }

  const accessToken = req.cookies.get('accessToken')?.value;
  const hasJwtSecret = Boolean(process.env.JWT_ACCESS_SECRET);
  const auth = await readAccessAuth(accessToken);

  if (
    pathname === '/' &&
    accessToken &&
    hasJwtSecret &&
    auth.verified &&
    auth.role
  ) {
    if (auth.role === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/management', req.url));
    }
    return NextResponse.redirect(new URL('/challenges', req.url));
  }

  if (pathname.startsWith('/admin')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    if (!hasJwtSecret) {
      return NextResponse.next();
    }
    if (!auth.verified || auth.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
}
