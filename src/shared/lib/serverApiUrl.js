/**
 * 서버(Route Handler, Server Action)에서만 사용.
 * Vercel: API_BASE_URL 또는 BACKEND_URL 등(아래 목록)에 Render API 오리진 설정.
 */
export function getServerApiBaseUrl() {
  const candidates = [
    process.env.API_BASE_URL,
    process.env.BACKEND_URL,
    process.env.RENDER_API_URL,
    process.env.NEXT_PUBLIC_API_URL,
  ];

  for (const c of candidates) {
    const raw = (c || '').trim();
    if (!raw) continue;
    const u = raw.replace(/\/$/, '');
    const withApi = u.endsWith('/api') ? u : `${u}/api`;
    return withApi;
  }

  if (process.env.VERCEL === '1') {
    console.error(
      '[Docthru] Vercel에 API_BASE_URL(또는 BACKEND_URL)을 설정하세요. 예: https://xxx.onrender.com',
    );
  }

  return 'http://localhost:5001/api';
}
