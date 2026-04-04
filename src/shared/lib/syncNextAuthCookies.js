/**
 * Vercel 등 웹 출처와 API 출처가 다를 때, Render에만 심긴 httpOnly 쿠키는
 * Next Server Action의 cookies()에 보이지 않음. 로그인/refresh 응답의 토큰으로
 * 동일 값을 Next(현재 Origin) 쿠키에도 심어 requestWithAuth가 동작하게 함.
 */
export async function syncNextAuthCookies({ accessToken, refreshToken }) {
  if (!accessToken || !refreshToken) return;

  const res = await fetch('/api/auth/sync-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ accessToken, refreshToken }),
    credentials: 'include',
  });

  if (!res.ok) {
    console.warn('sync-session failed', res.status);
  }
}

export async function clearNextAuthCookies() {
  await fetch('/api/auth/sync-session', {
    method: 'DELETE',
    credentials: 'include',
  }).catch(() => {});
}
