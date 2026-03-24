import { BASE_URL, handleResponse } from '@/apis/common';

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
export async function logout() {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  return handleResponse(response, '로그아웃에 실패했습니다.');
}
// 모든 기기 로그아웃
export async function logoutAll() {
  const response = await fetch(`${BASE_URL}/auth/logout-all`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return handleResponse(response, '전체 로그아웃에 실패했습니다.');
}

export async function getMe() {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: 'GET',
    credentials: 'include', // ✅ 쿠키 자동 전송
  });

  return handleResponse(response, '유저 정보를 가져오는데 실패했습니다.');
}

// 토큰 재발급
export async function refreshToken() {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return handleResponse(response, '토큰 재발급에 실패했습니다.');
}
