'use server';

import { cookies } from 'next/headers';

// import { BASE_URL } from "@/shared/constants/file.js"; //환경변수 못 읽어오는데 확인 필요
const BASE_URL = 'http://localhost:5001/api';

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
  } catch (err) {
    console.error('getChallengesAction 에러:', err);
    throw err;
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
  } catch (err) {
    console.error('getChallengeAction 에러:', err);
    throw err;
  }
}

// 관리자 - 신청 승인
export async function approveChallengeAction(challengeId) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  // 임시코드 - swlee 토큰 확인
  // if (!accessToken) {
  //   throw new Error("인증되지 않았습니다: 액세스 토큰이 없습니다.");
  // }

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
  } catch (err) {
    console.error('서버 액션 - 챌린지 승인 오류:', err);
    throw err;
  }
}

// 관리자 - 신청 거절
export async function declineChallengeAction(challengeId, declineReason) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  // 임시로 막음-토큰 연계시 해제
  // if (!accessToken) {
  //   throw new Error('인증되지 않았습니다: 액세스 토큰이 없습니다.');
  // }

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
  } catch (err) {
    console.error('서버 액션 - 챌린지 거절 오류:', err);
    throw err;
  }
}
