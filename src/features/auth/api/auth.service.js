// src/features/auth/api/auth.service.js
import { signup, login, logout, logoutAll, refreshToken } from '@/apis/auth';

/**
 * 회원가입 서비스 로직
 */
export const signUpUser = async (signUpData) => {
  try {
    // 1. 전역 API 함수 호출
    const response = await signup(signUpData);

    // 2. 성공 시 데이터 반환
    // (이때 response는 이미 apis/auth.js의 handleResponse에서 .json() 처리가 된 상태)
    return response;
  } catch (error) {
    // 3. 에러 발생 시 cause를 포함하여 다시 던짐
    // 상위 hooks(useSignup)에서 이 메시지를 그대로 UI에 보여줄 수 있습니다.
    throw new Error(error.message || '회원가입 처리 중 오류가 발생했습니다.', {
      cause: error,
    });
  }
};

/**
 * 로그인 서비스 로직
 */
export const loginUser = async (loginData) => {
  try {
    const response = await login(loginData);

    return response;
  } catch (error) {
    throw new Error(error.message || '로그인 처리 중 오류가 발생했습니다.', {
      cause: error,
    });
  }
};
/**
 * 3. 로그아웃
 */
export const logoutUser = async (token) => {
  try {
    const data = await logout(token);
    // 로컬의 사용자 정보/토큰 삭제 로직 추가 가능
    return data;
  } catch (error) {
    throw new Error(error.message || '로그아웃 실패', { cause: error });
  }
};

/**
 * 4. 모든 기기 로그아웃 (보안용)
 */
export const logoutAllDevices = async (token) => {
  try {
    return await logoutAll(token);
  } catch (error) {
    throw new Error(error.message || '전체 로그아웃 실패', { cause: error });
  }
};

/**
 * 5. 토큰 갱신 (Access Token 만료 시 자동 호출용)
 */
export const refreshUserToken = async (rt) => {
  try {
    return await refreshToken(rt);
  } catch (error) {
    throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.', {
      cause: error,
    });
  }
};
