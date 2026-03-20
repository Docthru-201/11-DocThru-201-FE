// 권한 가드 — 어드민 경로 접근 제한 등

export function shouldBlockAdmin(pathname, userRole) {
  if (!pathname.startsWith('/admin')) return false;
  return userRole !== 'ADMIN';
}

export function getRedirectForUnauthorized(pathname) {
  if (pathname.startsWith('/admin')) return '/'; // 또는 /login
  return null;
}
