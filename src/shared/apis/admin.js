'use server';

import { cookies } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// 관리자 - 신청 목록 전체 조회
export async function getChallengesAction({ params = {} }) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const query = new URLSearchParams(params).toString();

  try {
    const res = await fetch(`${BASE_URL}/admin/challenges?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `accessToken=${accessToken}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || '신청 목록을 불러오는데 실패했습니다.',
      );
    }

    return await res.json();
  } catch (error) {
    console.error('getChallengesAction 에러:', error);
    throw error;
  }
}

// 챌린지 신청 상세 조회
export async function getChallengeAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  try {
    const res = await fetch(`${BASE_URL}/admin/challenges/${challengeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `accessToken=${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('챌린지를 불러오는데 실패했습니다.');
    }

    return await res.json();
  } catch (error) {
    console.error('getChallengeAction 에러:', error);
    throw error;
  }
}

// 관리자 - 신청 승인
export async function approveChallengeAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증되지 않았습니다: 액세스 토큰이 없습니다.');
  }

  try {
    const response = await fetch(
      `${BASE_URL}/admin/challenges/${challengeId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({
          status: 'APPROVED',
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '챌린지 승인에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('서버 액션 - 챌린지 승인 오류:', error);
    throw error;
  }
}

// 관리자 - 신청 거절
export async function declineChallengeAction(challengeId, declineReason) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증되지 않았습니다: 액세스 토큰이 없습니다.');
  }

  try {
    const response = await fetch(
      `${BASE_URL}/admin/challenges/${challengeId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({
          status: 'REJECTED',
          declineReason: declineReason,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || '챌린지 거절에 실패했습니다.');
    }

    return await response.json();
  } catch (error) {
    console.error('서버 액션 - 챌린지 거절 오류:', error);
    throw error;
  }
}

// 관리자 Soft 삭제
export async function deleteChallengeAction(challengeId, declineReason) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  if (!accessToken) {
    throw new Error('인증되지 않았습니다: 액세스 토큰이 없습니다.');
  }

  try {
    const challengeRes = await fetch(`${BASE_URL}/challenges/${challengeId}`);
    if (!challengeRes.ok) throw new Error('챌린지 조회 실패');
    const challenge = await challengeRes.json();

    // 2. isClosed 체크
    if (challenge.isClosed) {
      throw new Error('마감된 챌린지는 삭제할 수 없습니다.');
    }

    const response = await fetch(
      `${BASE_URL}/admin/challenges/${challengeId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Cookie: `accessToken=${accessToken}`,
        },
        body: JSON.stringify({
          status: 'DELETED',
          declineReason: declineReason,
        }),
      },
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || '서버 오류가 발생했습니다.');
    }
    if (data.result?.status !== 'DELETED') {
      throw new Error(data.message || '챌린지 상태 변경에 실패했습니다.');
    }
    return data;
  } catch (err) {
    console.error('서버 액션 - 챌린지 삭제 오류:', err);
    throw err;
  }
}
