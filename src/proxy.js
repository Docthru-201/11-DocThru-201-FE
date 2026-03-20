// // 권한 가드 — 어드민 경로 접근 제한 등

// export function shouldBlockAdmin(pathname, userRole) {
//   if (!pathname.startsWith('/admin')) return false;
//   return userRole !== 'ADMIN';
// }

// export function getRedirectForUnauthorized(pathname) {
//   if (pathname.startsWith('/admin')) return '/'; // 또는 /login
//   return null;
// }

import { NextResponse } from 'next/server';

export function proxy(req) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get('token');
  // const role = req.cookies.get('role'); // ADMIN / USER

  const role = 'ADMIN';
  // 로그인 상태에서 루트 접근
  if (pathname === '/' && token) {
    if (role === 'ADMIN') {
      return NextResponse.redirect(new URL('/admin/management', req.url));
    }
    return NextResponse.redirect(new URL('/challenges', req.url));
  }

  // 어드민 페이지 접근 제한
  if (pathname.startsWith('/admin') && role !== 'ADMIN') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}
