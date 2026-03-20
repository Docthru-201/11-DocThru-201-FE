/**
 * 인증 관련 fetch 함수
 */

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// 공통 에러 처리 함수
async function handleResponse(response, defaultMessage) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || defaultMessage);
  }

  return response.json();
}

// 로그인
export async function login(body) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });

  return handleResponse(response, '로그인에 실패했습니다.');
}

// 회원가입
export async function signup(body) {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });

  return handleResponse(response, '회원가입에 실패했습니다.');
}

// 로그아웃
export async function logout(accessToken) {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response, '로그아웃에 실패했습니다.');
}

// 모든 기기 로그아웃
export async function logoutAll(accessToken) {
  const response = await fetch(`${BASE_URL}/auth/logout-all`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response, '전체 로그아웃에 실패했습니다.');
}

// 토큰 재발급
export async function refreshToken(refreshToken) {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  return handleResponse(response, '토큰 재발급에 실패했습니다.');
}

// 구글 로그인
export async function googleLogin(code) {
  const response = await fetch(`${BASE_URL}/auth/login/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ code }),
  });

  return handleResponse(response, '구글 로그인에 실패했습니다.');
}
