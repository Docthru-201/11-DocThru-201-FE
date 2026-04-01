import { fetchClient } from '@/shared/lib/fetchClient';

export async function getMe() {
  return fetchClient('/users/me');
}

export async function getMyStats() {
  return fetchClient('/users/me/stats');
}

export async function updateMe(data) {
  return fetchClient('/users/me', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}

export async function getMyWorks() {
  return fetchClient('/users/me/works');
}

export async function updateMyProfile(data) {
  return fetchClient('/users/me/profile', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}
