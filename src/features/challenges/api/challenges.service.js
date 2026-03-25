import { createChallenge as createChallengeApi } from '@/apis/challenges';

export const createChallengeRequest = async (payload) => {
  try {
    return await createChallengeApi(payload);
  } catch (error) {
    throw new Error(
      error.message || '챌린지 신청 처리 중 오류가 발생했습니다.',
      {
        cause: error,
      },
    );
  }
};
