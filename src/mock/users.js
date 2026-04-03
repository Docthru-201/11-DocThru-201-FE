export const meResponseMock = {
  message: '내 정보 조회 성공',
  data: {
    id: '01HVUSER000000000000001',
    role: 'USER',
    grade: 'EXPERT',
    email: 'seed_user1@example.com',
    nickname: 'admin_1',
    image: 'https://example.com/avatar/admin_1.png',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
};

export const publicUserResponseMock = {
  message: '특정 유저 조회 성공',
  data: {
    id: '01HVUSER000000000000010',
    role: 'USER',
    grade: 'NORMAL',
    nickname: 'next_js_lover',
    image: 'https://example.com/avatar/next_js_lover.png',
    createdAt: new Date().toISOString(),
  },
};
