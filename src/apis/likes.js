import { fetchClient } from '@/shared/lib/fetchClient';

export async function getLikeCount(workId) {
  return fetchClient(`/works/${workId}/likes/count`);
}

export async function getMyLikeStatus(workId) {
  return fetchClient(`/works/${workId}/likes/me`);
}

export async function likeWork(workId) {
  return fetchClient(`/works/${workId}/likes`, { method: 'POST' });
}

export async function unlikeWork(workId) {
  return fetchClient(`/works/${workId}/likes`, { method: 'DELETE' });
}
