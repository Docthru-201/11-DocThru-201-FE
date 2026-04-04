import { fetchClient } from '@/shared/lib/fetchClient';
import { syncNextAuthCookies } from '@/shared/lib/syncNextAuthCookies';

const apiBase = () =>
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export async function login(body) {
  return fetchClient('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function signup(body) {
  return fetchClient('/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function logout() {
  return fetchClient('/auth/logout', { method: 'POST' });
}

export async function logoutAll() {
  return fetchClient('/auth/logout-all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function getMe() {
  const res = await fetch('/api/auth/me', { credentials: 'include' });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || '요청에 실패했습니다.');
  }
  return res.json();
}

export async function refreshToken() {
  const res = await fetch(`${apiBase()}/auth/refresh`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

  if (res.status === 204) return;

  if (res.ok) {
    const data = await res.json().catch(() => ({}));
    if (data.accessToken && data.refreshToken) {
      await syncNextAuthCookies({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
    }
    return data;
  }

  const errData = await res.json().catch(() => ({}));
  throw new Error(errData.message || '세션 갱신에 실패했습니다.');
}
