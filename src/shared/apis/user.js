'use server';
import { cookies } from 'next/headers';
import { ITEM_COUNT } from '@/shared/constants/file.js';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// 챌린지 상세 조회
export async function getChallengeDetail(challengeId) {
  const res = await fetch(`${BASE_URL}/challenges/${challengeId}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || '챌린지 정보를 불러올 수 없습니다.');
  }

  const result = await res.json();
  return result;
}

// 작업물 전체 조회
export async function getRankingAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!challengeId) {
    console.error('에러: challengeId가 없습니다!');
    return [];
  }

  const pageSize = ITEM_COUNT.CHALLENGE_LG || 5; // 5
  let page = 1;
  let hasMore = true;
  let allWorks = [];

  while (hasMore) {
    const res = await fetch(
      `${BASE_URL}/challenges/${challengeId}/works?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `accessToken=${accessToken}`,
        },
        cache: 'no-store',
      },
    );
    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      throw new Error(
        errorBody.message || `오류가 발생했습니다. (상태 코드: ${res.status})`,
      );
    }

    const result = await res.json();
    const works = result.data;

    allWorks = [...allWorks, ...works];

    if (works.length < pageSize) {
      hasMore = false;
    } else {
      page += 1;
    }
  }

  return allWorks;
}

// 챌린지 상세에서 작업물 도전하기로 진입
export async function createWorkAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const res = await fetch(`${BASE_URL}/challenges/${challengeId}/works`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `accessToken=${accessToken}`,
    },
    cache: 'no-store',
    credentials: 'include',
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || '작업물 생성에 실패했습니다.');
  }

  return await res.json();
}
