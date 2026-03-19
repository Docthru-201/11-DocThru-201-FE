import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  // TODO: 추후 작성
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
