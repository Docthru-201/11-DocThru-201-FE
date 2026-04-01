'use server';
import { requestWithAuth } from './base';
import { cookies } from 'next/headers';
import { ITEM_COUNT } from '@/shared/constants/file.js';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// 챌린지 상세 조회
export async function getChallengeDetail(challengeId) {
  return requestWithAuth(`/challenges/${challengeId}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.message || '챌린지 정보를 불러올 수 없습니다.');
  }

  const result = await res.json();
  return result;
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
    // 공통 함수를 사용하여 인증 체크 및 fetch 로직 대체
    const response = await requestWithAuth(
      `/challenges/${challengeId}/works?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
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
    const works = Array.isArray(result?.data) ? result.data : [];

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
  return requestWithAuth(`/challenges/${challengeId}/works`, {
    method: 'POST',
    cache: 'no-store',
    credentials: 'include',
  });
}

export async function getMyWorkAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증 정보가 없습니다. 다시 로그인해 주세요.');
  }

  const res = await fetch(`${BASE_URL}/challenges/${challengeId}/works/my`, {
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

  return await res.json();
}
