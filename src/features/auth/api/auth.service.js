import {
  signup,
  login,
  logout,
  logoutAll,
  refreshToken,
  getMe,
} from '@/apis/auth';

export const signUpUser = async (signUpData) => {
  try {
    const response = await signup(signUpData);
    return response;
  } catch (error) {
    throw new Error(error.message || '회원가입 처리 중 오류가 발생했습니다.', {
      cause: error,
    });
  }
};

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

export const logoutUser = async () => {
  try {
    const data = await logout();
    return data;
  } catch (error) {
    throw new Error(error.message || '로그아웃 실패', { cause: error });
  }
};

export const logoutAllDevices = async () => {
  try {
    return await logoutAll();
  } catch (error) {
    throw new Error(error.message || '전체 로그아웃 실패', { cause: error });
  }
};

export const getMeUser = async () => {
  try {
    return await getMe();
  } catch (error) {
    throw new Error(error.message || '유저 정보 조회 실패', { cause: error });
  }
};

export const refreshUserToken = async () => {
  try {
    return await refreshToken();
  } catch (error) {
    throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.', {
      cause: error,
    });
  }
};
