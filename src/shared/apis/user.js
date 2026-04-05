'use server';
import { requestWithAuth } from './base';
import { cookies } from 'next/headers';
import { ITEM_COUNT } from '@/shared/constants/file.js';
import { getServerApiBaseUrl } from '@/shared/lib/serverApiUrl';

// 챌린지 상세 조회
export async function getChallengeDetail(challengeId) {
  return requestWithAuth(`/challenges/${challengeId}`, {
    method: 'GET',
    credentials: 'include',
  });
}

// 작업물 전체 조회 (페이지네이션 루프 포함)
export async function getRankingAction(challengeId) {
  if (!challengeId) {
    console.error('에러: challengeId가 없습니다!');
    return [];
  }

  const pageSize = ITEM_COUNT.CHALLENGE_LG || 5;
  let page = 1;
  let hasMore = true;
  let allWorks = [];

  while (hasMore) {
    const data = await requestWithAuth(
      `/challenges/${challengeId}/works?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );
    const works = Array.isArray(data?.data) ? data.data : [];

    allWorks = [...allWorks, ...works];

    if (works.length < pageSize) {
      hasMore = false;
    } else {
      page += 1;
    }
  }

  return allWorks;
}

export async function getMyWorkAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증 정보가 없습니다. 다시 로그인해 주세요.');
  }

  const baseUrl = getServerApiBaseUrl();
  const res = await fetch(`${baseUrl}/challenges/${challengeId}/works/my`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'no-store',
  });

  if (res.status === 404) return null; // 작업물 없음
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || '내 작업물 조회 실패');
  }

  const data = await res.json().catch(() => null);
  if (data == null) return null;
  return data;
}
