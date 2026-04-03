const buildWorkContent = (topic) =>
  JSON.stringify({
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: `이번 번역에서는 "${topic}" 관련 공식 문서를 자연스러운 한국어로 옮겨보았습니다. 용어 통일과 문맥을 특히 신경 썼어요.`,
          },
        ],
      },
    ],
  });

export const workItemsMock = [
  {
    id: '01HVWORK000000000000001',
    challengeId: '01HVCHALLENGE000000000001',
    participantId: '01HVPARTICIPANT000000001',
    userId: '01HVUSER000000000000010',
    content: buildWorkContent('Next.js App Router'),
    likeCount: 8,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000010',
      nickname: 'next_js_lover',
      image: 'https://example.com/avatar/next_js_lover.png',
    },
  },
  {
    id: '01HVWORK000000000000002',
    challengeId: '01HVCHALLENGE000000000002',
    participantId: '01HVPARTICIPANT000000002',
    userId: '01HVUSER000000000000011',
    content: buildWorkContent('TanStack Query'),
    likeCount: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000011',
      nickname: 'query_master',
      image: 'https://example.com/avatar/query_master.png',
    },
  },
  {
    id: '01HVWORK000000000000003',
    challengeId: '01HVCHALLENGE000000000003',
    participantId: '01HVPARTICIPANT000000003',
    userId: '01HVUSER000000000000012',
    content: buildWorkContent('웹 개발 입문자 가이드'),
    likeCount: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    user: {
      id: '01HVUSER000000000000012',
      nickname: 'web_starter',
      image: 'https://example.com/avatar/web_starter.png',
    },
  },
];

// response
export const workListResponseMock = {
  message: '작업물 목록 조회 성공',
  data: {
    items: workItemsMock,
    pagination: {
      nextCursor: '01HVWORK000000000000050',
      hasNext: true,
    },
  },
};

export const workDetailResponseMock = {
  message: '작업물 상세 조회 성공',
  data: workItemsMock[0],
};
