/**
 * 인증 관련 fetch 함수
 * 현재는 `src/mock/*` 목 응답을 그대로 반환합니다.
 */

import { loginResponseMock, signupResponseMock } from '@/mock/auth';

const messageOnly = (message) => ({
  message,
  data: undefined,
});

export async function login(body) {
  // TODO: body 검증/라우팅 후 fetch로 전환
  return loginResponseMock;
}

export async function signup(body) {
  // TODO: body 검증/라우팅 후 fetch로 전환
  return signupResponseMock;
}

export async function logout() {
  return messageOnly('로그아웃 성공');
}

export async function logoutAll() {
  return messageOnly('모든 기기 로그아웃 성공');
}

export async function refreshToken() {
  return {
    message: '토큰 재발급 성공',
    data: { accessToken: 'mock-refreshed-access-token' },
  };
}
