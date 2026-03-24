import { participantItemsMock } from './participants';

const challengeItemsMockBase = [
  {
    id: '01HVCHALLENGE000000000001',
    authorId: '01HVUSER000000000000001',
    title: 'Next.js - App Router: Routing Fundamentals',
    originalUrl:
      'https://nextjs.org/docs/app/building-your-application/routing/fundamentals',
    type: 'NEXT_JS',
    category: 'DOCUMENT',
    description:
      'Next.js App Router 공식 문서 중 Routing Fundamentals 내용입니다! 라우팅 규칙과 폴더 구조를 함께 익혀보는 챌린지입니다.',
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    maxParticipants: 12,
    status: 'APPROVED',
    isClosed: false,
    declineReason: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000001',
      nickname: 'admin_1',
      image: 'https://example.com/avatar/admin_1.png',
    },
  },
  {
    id: '01HVCHALLENGE000000000002',
    authorId: '01HVUSER000000000000002',
    title: 'TanStack Query - Optimistic Updates',
    originalUrl:
      'https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates',
    type: 'API',
    category: 'DOCUMENT',
    description:
      'TanStack Query 공식 문서 중 Optimistic Updates 내용입니다! 낙관적 업데이트 패턴을 번역하며 데이터 동기화 전략을 익혀보세요.',
    deadline: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    maxParticipants: 15,
    status: 'APPROVED',
    isClosed: false,
    declineReason: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000002',
      nickname: 'translator_2',
      image: 'https://example.com/avatar/translator_2.png',
    },
  },
  {
    id: '01HVCHALLENGE000000000003',
    authorId: '01HVUSER000000000000003',
    title: 'Web 개발자의 필수 요건',
    originalUrl:
      'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like',
    type: 'CAREER',
    category: 'BLOG',
    description:
      'Web 개발자의 필수 요건 문서를 번역하며 웹 서비스 기획과 기본기 관점에서 정리해 보는 챌린지입니다.',
    deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    maxParticipants: 8,
    status: 'PENDING',
    isClosed: false,
    declineReason: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000003',
      nickname: 'web_writer_3',
      image: 'https://example.com/avatar/web_writer_3.png',
    },
  },
  {
    id: '01HVCHALLENGE000000000004',
    authorId: '01HVUSER000000000000004',
    title: 'Fetch API, 에러를 제대로 핸들링하기',
    originalUrl:
      'https://nextjs.org/docs/app/building-your-application/data-fetching/fetching',
    type: 'MODERN_JS',
    category: 'DOCUMENT',
    description:
      'Fetch API 공식 문서와 관련 가이드를 번역하면서 에러 핸들링 패턴을 정리해 보는 챌린지입니다.',
    deadline: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    maxParticipants: 10,
    status: 'APPROVED',
    isClosed: true,
    declineReason: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000004',
      nickname: 'backend_4',
      image: 'https://example.com/avatar/backend_4.png',
    },
  },
  {
    id: '01HVCHALLENGE000000000005',
    authorId: '01HVUSER000000000000005',
    title: '[Prisma] 공식 스키마 가이드 번역 챌린지',
    originalUrl: 'https://www.prisma.io/docs/orm/prisma-schema/data-model',
    type: 'WEB',
    category: 'DOCUMENT',
    description:
      'Prisma 공식 스키마 문서를 번역하며 데이터 모델링과 관계 설정을 정리해 보는 챌린지입니다.',
    deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(),
    maxParticipants: 15,
    status: 'REJECTED',
    isClosed: false,
    declineReason:
      '독스루는 개발 문서 번역 플랫폼으로, 다른 종류의 번역 챌린지를 개최할 수 없음을 알려드립니다.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    deletedAt: null,
    author: {
      id: '01HVUSER000000000000005',
      nickname: 'db_lover_5',
      image: 'https://example.com/avatar/db_lover_5.png',
    },
  },
];

export const challengeItemsMock = challengeItemsMockBase.map((challenge) => ({
  ...challenge,
  currentParticipants: participantItemsMock.filter(
    (participant) => participant.challengeId === challenge.id,
  ).length,
  // Card 컴포넌트에서 기대하는 형태로 변환
  deadline: challenge.deadline.slice(0, 10), // YYYY-MM-DD
  isDeadlinePassed: new Date(challenge.deadline) < new Date(),
  isRecruitmentFull:
    participantItemsMock.filter(
      (participant) => participant.challengeId === challenge.id,
    ).length >= challenge.maxParticipants,
  isParticipating: false,
}));

// response
export const challengeListResponseMock = {
  message: '챌린지 목록 조회 성공',
  data: {
    items: challengeItemsMock,
    pagination: {
      nextCursor: '01HVCHALLENGE000000000050',
      hasNext: true,
    },
  },
};

export const challengeDetailResponseMock = {
  message: '챌린지 상세 조회 성공',
  data: challengeItemsMock[0],
};
