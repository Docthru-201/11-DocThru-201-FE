'use server';

import { requestWithAuth } from './base';
import { ITEM_COUNT } from '@/shared/constants/file.js';

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
    // 공통 함수를 사용하여 인증 체크 및 fetch 로직 대체
    const response = await requestWithAuth(
      `/challenges/${challengeId}/works?page=${page}&pageSize=${pageSize}`,
      {
        method: 'GET',
        cache: 'no-store',
      },
    );

    const works = response.data || [];
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
