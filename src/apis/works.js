import { fetchClient } from '@/shared/lib/fetchClient';

export async function getWorkById(workId) {
  return fetchClient(`/works/${workId}`);
}

export async function updateWork(workId, body) {
  return fetchClient(`/works/${workId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function deleteWork(workId) {
  return fetchClient(`/works/${workId}`, {
    method: 'DELETE',
  });
}
