import { BASE_URL, handleResponse } from '@/apis/common';

export async function getLikeCount(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}/likes/count`, {
    credentials: 'include',
  });
  return handleResponse(response, '좋아요 수 조회에 실패했습니다.');
}

export async function getMyLikeStatus(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}/likes/me`, {
    credentials: 'include',
  });
  return handleResponse(response, '좋아요 여부 조회에 실패했습니다.');
}

export async function likeWork(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}/likes`, {
    method: 'POST',
    credentials: 'include',
  });
  return handleResponse(response, '좋아요에 실패했습니다.');
}

export async function unlikeWork(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}/likes`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return handleResponse(response, '좋아요 취소에 실패했습니다.');
}
