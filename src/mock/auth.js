export const loginResponseMock = {
  message: '로그인 성공',
  data: {
    accessToken: 'mock-access-token',
    user: {
      id: '01HV123ABC456DEF789GHIJKL',
      role: 'USER',
      grade: 'NORMAL',
      email: 'user@example.com',
      nickname: '모크유저',
      image: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      deletedAt: null,
    },
  },
};

// response
export const signupResponseMock = {
  message: '회원가입 성공',
  data: loginResponseMock.data.user,
};
