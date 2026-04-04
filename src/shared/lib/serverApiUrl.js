/**
 * 서버(Route Handler, Server Action)에서만 사용.
 * Vercel에는 API_BASE_URL을 권장(런타임 주입). 없으면 NEXT_PUBLIC_API_URL 사용.
 */
export function getServerApiBaseUrl() {
  const raw = (
    process.env.API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    ''
  ).trim();
  if (raw) {
    const u = raw.replace(/\/$/, '');
    return u.endsWith('/api') ? u : `${u}/api`;
  }
  return 'http://localhost:5001/api';
}
