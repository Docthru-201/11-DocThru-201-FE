import { BASE_URL, handleResponse } from '@/apis/common';

export async function getComments(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}/comments`, {
    credentials: 'include',
  });
  return handleResponse(response, '댓글 목록 조회에 실패했습니다.');
}

export async function createComment(workId, body) {
  const response = await fetch(`${BASE_URL}/works/${workId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return handleResponse(response, '댓글 작성에 실패했습니다.');
}

export async function updateComment(commentId, body) {
  const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return handleResponse(response, '댓글 수정에 실패했습니다.');
}

export async function deleteComment(commentId) {
  const response = await fetch(`${BASE_URL}/comments/${commentId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return handleResponse(response, '댓글 삭제에 실패했습니다.');
}
