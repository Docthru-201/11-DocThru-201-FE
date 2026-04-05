import { fetchClient } from '@/shared/lib/fetchClient';

export async function createWorkForChallenge(challengeId) {
  const payload = await fetchClient(`/challenges/${challengeId}/works`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  });
  const work = payload?.data ?? payload;
  if (!work?.id) {
    throw new Error('작업물 정보를 받지 못했습니다.');
  }
  return work;
}

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
