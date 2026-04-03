import { fetchClient } from '@/shared/lib/fetchClient';

export async function getComments(workId) {
  return fetchClient(`/works/${workId}/comments`);
}

export async function createComment(workId, body) {
  return fetchClient(`/works/${workId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function updateComment(commentId, body) {
  return fetchClient(`/comments/${commentId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function deleteComment(commentId) {
  return fetchClient(`/comments/${commentId}`, { method: 'DELETE' });
}
