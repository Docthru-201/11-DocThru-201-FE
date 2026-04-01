'use server';

import { requestWithAuth } from './base';

// 관리자 - 신청 목록 전체 조회
export async function getChallengesAction({ params = {} }) {
  const query = new URLSearchParams(params).toString();
  return requestWithAuth(`/admin/challenges?${query}`, { method: 'GET' });
}

// 챌린지 신청 상세 조회
export async function getChallengeAction(challengeId) {
  return requestWithAuth(`/admin/challenges/${challengeId}`, { method: 'GET' });
}

// 관리자 - 신청 승인
export async function approveChallengeAction(challengeId) {
  return requestWithAuth(`/admin/challenges/${challengeId}`, {
    method: 'PATCH',
    body: JSON.stringify({ status: 'APPROVED' }),
  });
}

// 관리자 - 신청 거절
export async function declineChallengeAction(challengeId, declineReason) {
  return requestWithAuth(`/admin/challenges/${challengeId}`, {
    method: 'PATCH',
    body: JSON.stringify({ status: 'REJECTED', declineReason }),
  });
}

// 관리자 - Soft 삭제
export async function deleteChallengeAction(challengeId, declineReason) {
  const challenge = await requestWithAuth(`/challenges/${challengeId}`, {
    method: 'GET',
  });

  if (challenge.isClosed) {
    throw new Error('마감된 챌린지는 삭제할 수 없습니다.');
  }

  return requestWithAuth(`/admin/challenges/${challengeId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: 'DELETED',
      declineReason,
      deletedAt: new Date().toISOString(),
    }),
  });
}
