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

/** 프로덕션에서 서버 액션 throw/비직렬화 응답이 RSC digest로만 보이는 문제 방지 */
function actionErrorMessage(e) {
  const msg = e?.message;
  return typeof msg === 'string' && msg ? msg : '요청 처리에 실패했습니다.';
}

// 관리자 - 신청 승인
export async function approveChallengeAction(challengeId) {
  try {
    await requestWithAuth(`/admin/challenges/${challengeId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'APPROVED' }),
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, message: actionErrorMessage(e) };
  }
}

// 관리자 - 신청 거절
export async function declineChallengeAction(challengeId, declineReason) {
  try {
    await requestWithAuth(`/admin/challenges/${challengeId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'REJECTED', declineReason }),
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, message: actionErrorMessage(e) };
  }
}

// 관리자 - Soft 삭제
export async function deleteChallengeAction(challengeId, declineReason) {
  try {
    const challenge = await requestWithAuth(`/challenges/${challengeId}`, {
      method: 'GET',
    });

    if (challenge?.isClosed) {
      return { ok: false, message: '마감된 챌린지는 삭제할 수 없습니다.' };
    }

    await requestWithAuth(`/admin/challenges/${challengeId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        status: 'DELETED',
        declineReason,
        deletedAt: new Date().toISOString(),
      }),
    });
    return { ok: true };
  } catch (e) {
    return { ok: false, message: actionErrorMessage(e) };
  }
}
