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
  challenge: {
    detail: (challengeId) => ['challenges', challengeId],
    ranking: (challengeId) => ['challenges', challengeId, 'ranking'],
    myWork: (challengeId) => ['challenges', challengeId, 'myWork'],
  },
};
