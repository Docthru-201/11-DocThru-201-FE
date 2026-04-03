export const participantItemsMock = [
  {
    id: '01HVPARTICIPANT000000001',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000010',
    joinedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000010',
      nickname: 'next_js_lover',
      image: 'https://example.com/avatar/next_js_lover.png',
    },
  },
  {
    id: '01HVPARTICIPANT000000002',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000011',
    joinedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000011',
      nickname: 'query_master',
      image: 'https://example.com/avatar/query_master.png',
    },
  },
  {
    id: '01HVPARTICIPANT000000003',
    challengeId: '01HVCHALLENGE000000000001',
    userId: '01HVUSER000000000000012',
    joinedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000012',
      nickname: 'web_starter',
      image: 'https://example.com/avatar/web_starter.png',
    },
  },
];

// response
export const participantListResponseMock = {
  message: '참가자 목록 조회 성공',
  data: {
    items: participantItemsMock,
    pagination: {
      nextCursor: '01HVPARTICIPANT000000010',
      hasNext: true,
    },
  },
};

export const participantDetailResponseMock = {
  message: '참가자 상세 조회 성공',
  data: participantItemsMock[0],
};
