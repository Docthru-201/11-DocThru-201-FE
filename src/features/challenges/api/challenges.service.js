import { createChallenge as createChallengeApi } from '@/apis/challenges';
import { updateChallenge as updateChallengeApi } from '@/apis/challenges';
import { fetchClient } from '@/shared/lib/fetchClient';
import { ITEM_COUNT } from '@/shared/constants/file.js';

export const createChallengeRequest = async (payload) => {
  try {
    return await createChallengeApi(payload);
  } catch (error) {
    throw new Error(
      error.message || '챌린지 신청 처리 중 오류가 발생했습니다.',
      { cause: error },
    );
  }
};

export const updateChallengeRequest = async (payload) => {
  try {
    return await updateChallengeApi(payload);
  } catch (error) {
    throw new Error(
      error.message || '챌린지 신청 수정 중 오류가 발생했습니다.',
      { cause: error },
    );
  }
};

export const getChallengeRanking = async (challengeId) => {
  const pageSize = ITEM_COUNT.CHALLENGE_LG || 5;
  let page = 1;
  let hasMore = true;
  let allWorks = [];

  while (hasMore) {
    const response = await fetchClient(
      `/challenges/${challengeId}/works?page=${page}&pageSize=${pageSize}`,
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
};
