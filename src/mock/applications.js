export const applicationItemsMock = [
  {
    id: '01HVAPP000000000000001',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000020',
    message:
      '번역 스타일은 공식 문서의 톤을 유지하면서 한국어 표현만 자연스럽게 다듬겠습니다.',
    status: 'APPROVED',
    prevId: null,
    nextId: '01HVAPP000000000000002',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    user: {
      id: '01HVUSER000000000000020',
      nickname: 'reviewer_1',
      image: 'https://example.com/avatar/reviewer_1.png',
    },
  },
  {
    id: '01HVAPP000000000000002',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000021',
    message: '용어집을 먼저 정리한 뒤, 일관된 용어를 사용해 번역하겠습니다.',
    status: 'PENDING',
    prevId: '01HVAPP000000000000001',
    nextId: '01HVAPP000000000000003',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    user: {
      id: '01HVUSER000000000000021',
      nickname: 'reviewer_2',
      image: 'https://example.com/avatar/reviewer_2.png',
    },
  },
  {
    id: '01HVAPP000000000000003',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000022',
    message: '번역 후에도 오타/문맥 검수까지 함께 진행하겠습니다.',
    status: 'REJECTED',
    prevId: '01HVAPP000000000000002',
    nextId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    user: {
      id: '01HVUSER000000000000022',
      nickname: 'reviewer_3',
      image: 'https://example.com/avatar/reviewer_3.png',
    },
  },
];

// response
export const applicationListResponseMock = {
  message: '참가 신청 목록 조회 성공',
  data: {
    items: applicationItemsMock,
    pagination: {
      nextCursor: '01HVAPP000000000000010',
      hasNext: true,
    },
  },
};

export const applicationDetailResponseMock = {
  message: '참가 신청 상세 조회 성공',
  data: applicationItemsMock[0],
};
