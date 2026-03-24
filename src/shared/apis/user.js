'use server';
import { cookies } from 'next/headers';
import { ITEM_COUNT, BASE_URL } from '@/shared/constants/file.js';

// 챌린지 상세 조회
export async function getChallengeDetail(challengeId) {
  // import { BASE_URL } from "@/shared/constants/file";
  const BASE_URL = 'http://localhost:5001/api';
  console.log('1. 실제 사용될 BASE_URL(Challenge Detail):', BASE_URL);

  const res = await fetch(`${BASE_URL}/challenges/${challengeId}`, {
    credentials: 'include',
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(errorBody.message || '챌린지 정보를 불러올 수 없습니다.');
  }

  const result = await res.json();
  console.log('부모에서 확인한 challenge 원본 데이터:', result);
  return result;
}

export async function getRankingAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  // 확인목적 swlee import { BASE_URL } from '@/shared/constants/file.js';
  // const BASE_URL = 'http://localhost:5001/api';
  const BASE_URL = 'http://localhost:5001/api';
  console.log(
    '2. 작업물 조회(user.js): getRankingAction:',
    BASE_URL,
    challengeId,
  );

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

// 챌린지 상세에서 작업물 도전하기로 진입시 사용
export async function createWorkAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const BASE_URL = 'http://localhost:5001/api';
  // 확인목적 swlee import { BASE_URL } from '@/shared/constants/file.js';
  console.log('3. 작업물 생성: challengeId:', BASE_URL, challengeId);

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
