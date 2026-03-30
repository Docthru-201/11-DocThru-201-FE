export const QUERY_KEYS = {
  work: {
    all: ['works'],
    detail: (workId) => ['works', workId],
  },
  likes: {
    count: (workId) => ['likes', 'count', workId],
    status: (workId) => ['likes', 'status', workId],
  },
  comments: {
    all: (workId) => ['comments', workId],
  },
};
