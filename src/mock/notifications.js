export const notificationItemsMock = [
  {
    id: '01HVNOTI000000000000001',
    userId: '01HVUSER000000000000001',
    type: 'NEW_WORK',
    targetId: '01HVWORK000000000000001',
    targetUrl:
      '/challenges/01HVCHALLENGE000000000001/works/01HVWORK000000000000001',
    isRead: false,
    readAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    id: '01HVNOTI000000000000002',
    userId: '01HVUSER000000000000001',
    type: 'NEW_COMMENT',
    targetId: '01HVCOMMENT0000000000001',
    targetUrl:
      '/challenges/01HVCHALLENGE000000000001/works/01HVWORK000000000000001#comment-01HVCOMMENT0000000000001',
    isRead: true,
    readAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
  {
    id: '01HVNOTI000000000000003',
    userId: '01HVUSER000000000000001',
    type: 'CHALLENGE_APPROVAL_RESULT',
    targetId: '01HVCHALLENGE000000000003',
    targetUrl: '/challenges/01HVCHALLENGE000000000003',
    isRead: false,
    readAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
  },
];

// response
export const notificationListResponseMock = {
  message: '알림 목록 조회 성공',
  data: {
    items: notificationItemsMock,
    pagination: {
      nextCursor: '01HVNOTI000000000000010',
      hasNext: true,
    },
  },
};

export const notificationDetailResponseMock = {
  message: '알림 상세 조회 성공',
  data: notificationItemsMock[0],
};
