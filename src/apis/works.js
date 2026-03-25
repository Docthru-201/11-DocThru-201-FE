import { BASE_URL, handleResponse } from '@/apis/common';

export async function getWorkById(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}`, {
    credentials: 'include',
  });
  return handleResponse(response, '작업물을 불러오는데 실패했습니다.');
}

export async function createWork(body) {
  const response = await fetch(`${BASE_URL}/works`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return handleResponse(response, '작업물 생성에 실패했습니다.');
}

export async function updateWork(workId, body) {
  const response = await fetch(`${BASE_URL}/works/${workId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  return handleResponse(response, '작업물 수정에 실패했습니다.');
}

export async function deleteWork(workId) {
  const response = await fetch(`${BASE_URL}/works/${workId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  return handleResponse(response, '작업물 삭제에 실패했습니다.');
}
