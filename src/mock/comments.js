export const commentItemsMock = [
  {
    id: '01HVCOMMENT0000000000001',
    workId: '01HVWORK000000000000001',
    authorId: '01HVUSER000000000000020',
    content:
      '용어 선택이 자연스럽고 읽기 편했습니다. 특히 예제 설명이 이해에 큰 도움이 됐어요.',
    parentId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000020',
      nickname: 'reviewer_1',
      image: 'https://example.com/avatar/reviewer_1.png',
    },
    replies: [],
  },
  {
    id: '01HVCOMMENT0000000000002',
    workId: '01HVWORK000000000000001',
    authorId: '01HVUSER000000000000021',
    content:
      '번역이 자연스럽고 흐름이 잘 이어지네요. 마지막 부분에 예제 하나만 더 있으면 좋을 것 같습니다.',
    parentId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000021',
      nickname: 'reviewer_2',
      image: 'https://example.com/avatar/reviewer_2.png',
    },
    replies: [],
  },
  {
    id: '01HVCOMMENT0000000000003',
    workId: '01HVWORK000000000000001',
    authorId: '01HVUSER000000000000022',
    content:
      '오탈자가 거의 없고, 용어 통일도 잘 되어 있어서 실무에서 참고하기 좋을 것 같아요.',
    parentId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000022',
      nickname: 'reviewer_3',
      image: 'https://example.com/avatar/reviewer_3.png',
    },
    replies: [
      {
        id: '01HVCOMMENT0000000000004',
        workId: '01HVWORK000000000000001',
        authorId: '01HVUSER000000000000010',
        content:
          '좋은 피드백 감사합니다! 말씀해주신 부분 다시 한 번 점검해 볼게요.',
        parentId: '01HVCOMMENT0000000000003',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
        author: {
          id: '01HVUSER000000000000010',
          nickname: 'next_js_lover',
          image: 'https://example.com/avatar/next_js_lover.png',
        },
        replies: [],
      },
    ],
  },
];

// response
export const commentListResponseMock = {
  message: '댓글 목록 조회 성공',
  data: {
    items: commentItemsMock,
    pagination: {
      nextCursor: '01HVCOMMENT0000000000010',
      hasNext: true,
    },
  },
};

export const commentDetailResponseMock = {
  message: '댓글 상세 조회 성공',
  data: commentItemsMock[0],
};
