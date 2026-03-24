import { NextResponse } from 'next/server';

// 권한 가드 — 어드민 경로 접근 제한 등
export function shouldBlockAdmin(pathname, userRole) {
  if (!pathname.startsWith('/admin')) return false;
  return userRole !== 'ADMIN';
}

export function getRedirectForUnauthorized(pathname) {
  if (pathname.startsWith('/admin')) return '/'; // 또는 /login
  return null;
}

export function proxy(req) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get('token');
  const role = req.cookies.get('role'); // ADMIN / USER

  // 1. 로그인 상태에서 루트(/) 접근 시 역할별 대시보드로 이동

  if (pathname === '/' && token) {
    if (role === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/management', req.url));
    }
    return NextResponse.redirect(new URL('/challenges', req.url));
  }

  // 2. 어드민 페이지 접근 제한 (권한 체크)
  if (pathname.startsWith('/admin') && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// 미들웨어 매칭 설정
export const config = {
  matcher: ['/admin/:path*', '/'],
};
