import { fetchClient } from '@/shared/lib/fetchClient';

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
  return fetchClient('/auth/me');
}

export async function refreshToken() {
  return fetchClient('/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
}
