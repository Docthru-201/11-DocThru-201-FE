import { NextResponse } from 'next/server';
// import { decodeAccessToken } from "@/shared/lib/decodeAccessToken"; // 잠시 안 써도 되니 주석 가능

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // // test 목적 : 정적 파일 요청이 아니라면 무조건 이동
  // if (pathname !== "/admin/management") {
  //   return NextResponse.redirect(new URL("/admin/management", request.url));
  // }

  // 아래 로직들은 위 조건에 의해 실행되지 않지만, 나중에 복구할 때t를 위해 그대로 둡니다.
  return NextResponse.next();
}

export const config = {
  // matcher는 그대로 유지하여 필요한 파일들만 미들웨어를 타게 합니다.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

// import { NextResponse } from "next/server";
// import { decodeAccessToken } from "@/shared/lib/decodeAccessToken";

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;

//   const accessToken = request.cookies.get("accessToken")?.value;
//   const refreshToken = request.cookies.get("refreshToken")?.value;

//   // accessToken이 있다면 검증
//   let userRole;
//   if (accessToken) {
//     const decoded = await decodeAccessToken(accessToken);
//     userRole = decoded?.role;
//   }

//   //TEST를 위해 강제로 Admin 권한부여--개발 후 수정 필요
//   if (pathname.startsWith("/admin")) {
//     userRole = "ADMIN";
//   }
//   const isAuthenticated = !!refreshToken;
//   const isAuthRoute = pathname.startsWith("/signIn") || pathname.startsWith("/signUp");
//   const isProtectedRoute = pathname.startsWith("/challenges") || pathname.startsWith("/admin");
//   const isAutoLoginPage = pathname.startsWith("/refreshLogin");

//   // 로그인된 사용자가 루트("/") 경로 접근 시 → 챌린지 페이지로 리디렉션
//   if (pathname === "/" && isAuthenticated) {
//     return NextResponse.redirect(new URL("/challenges", request.url));
//   }

//   // 어드민 권한이 없는 사용자가 /admin 접근 시 리디렉션
//   if (pathname.startsWith("/admin") && userRole !== "ADMIN") {
//     return NextResponse.redirect(new URL("/challenges", request.url));
//   }

//   // accessToken 없고 refreshToken만 있는 경우 자동 로그인 처리
//   if (!accessToken && refreshToken && !isAutoLoginPage && !isAuthRoute) {
//     return NextResponse.redirect(new URL("/refreshLogin", request.url));
//   }

//   // 인증된 사용자가 로그인/회원가입 페이지 접근 시 리디렉션
//   if (isAuthRoute && isAuthenticated) {
//     return NextResponse.redirect(new URL("/challenges", request.url));
//   }

//   // 인증되지 않은 사용자가 보호 페이지 접근 시 로그인 페이지로
//   if (isProtectedRoute && !isAuthenticated) {
//     return NextResponse.redirect(new URL("/signIn", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
// };
