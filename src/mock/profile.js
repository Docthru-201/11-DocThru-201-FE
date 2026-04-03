export const profileMeResponseMock = {
  message: '내 프로필 조회 성공',
  data: {
    id: '01HVPROFILE0000000000001',
    userId: '01HVUSER000000000000001',
    introduction:
      '프론트엔드 개발자로, 영어로 된 최신 웹 기술 문서를 번역하며 공부하고 있습니다.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
};

export const profilePublicResponseMock = {
  message: '특정 유저 프로필 조회 성공',
  data: {
    id: '01HVPROFILE0000000000010',
    userId: '01HVUSER000000000000010',
    introduction:
      'Next.js와 React 관련 공식 문서를 번역하고 정리하는 것을 좋아합니다.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
};
