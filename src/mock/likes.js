// response
export const likeCountResponseMock = {
  message: '좋아요 개수 조회 성공',
  data: {
    count: 3,
  },
};

export const likeStatusResponseMock = {
  message: '좋아요 여부 조회 성공',
  data: {
    isLiked: true,
  },
};

export const likeActionResponseMock = {
  message: '좋아요 처리 성공',
  data: {
    isLiked: true,
    count: 4,
  },
};
