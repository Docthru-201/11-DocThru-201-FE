import { Card } from '@/shared/components';

const CARD_WIDTH = 996;
const CardWrapper = ({ children }) => (
  <div style={{ width: CARD_WIDTH, minWidth: 320 }}>{children}</div>
);

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
  },
  argTypes: {
    title: { control: 'text', description: '카드 제목' },
    status: {
      control: 'select',
      options: ['dateEnd', 'recruitEnd', 'none'],
      description: '상태 칩',
    },
    chipType: {
      control: 'select',
      options: ['next', 'api', 'career', 'modernJs', 'web', 'none'],
      description: '분야 칩',
    },
    chipCategory: {
      control: 'select',
      options: ['docs', 'blog', 'none'],
      description: '문서 타입 칩',
    },
    deadline: {
      control: 'text',
      description: '마감일 (YYYY-MM-DD)',
    },
    currentParticipants: {
      control: { type: 'number', min: 0 },
      description: '현재 참여 인원',
    },
    maxParticipants: {
      control: { type: 'number', min: 1 },
      description: '최대 참여 인원',
    },
    showCta: { control: 'boolean', description: '도전 계속하기 버튼' },
    showEditMenu: { control: 'boolean', description: '더보기 메뉴 버튼' },
  },
  args: {
    title: 'Next.js - App Router: Routing Fundamentals',
    status: 'none',
    chipType: 'modernJs',
    chipCategory: 'blog',
    deadline: '2026-03-19',
    currentParticipants: 6,
    maxParticipants: 8,
    showCta: true,
    showEditMenu: false,
  },
  decorators: [
    (Story) => (
      <CardWrapper>
        <Story />
      </CardWrapper>
    ),
  ],
};

const CHIP_TYPE_TO_STUDY = {
  next: 'NEXT_JS',
  api: 'API',
  career: 'CAREER',
  modernJs: 'MODERN_JS',
  web: 'WEB',
};

const CHIP_CATEGORY_TO_STUDY = {
  docs: 'DOCUMENT',
  blog: 'BLOG',
};

export const Playground = (args) => {
  const study = {
    title: args.title || undefined,
    type:
      args.chipType && args.chipType !== 'none'
        ? CHIP_TYPE_TO_STUDY[args.chipType]
        : null,
    category:
      args.chipCategory && args.chipCategory !== 'none'
        ? CHIP_CATEGORY_TO_STUDY[args.chipCategory]
        : null,
    deadline: args.deadline || undefined,
    currentParticipants: args.currentParticipants,
    maxParticipants: args.maxParticipants,
    isDeadlinePassed: args.status === 'dateEnd',
    isParticipating: args.showCta,
    isRecruitmentFull: args.status === 'recruitEnd',
  };
  return (
    <Card
      showEditMenu={args.showEditMenu}
      onEditClick={() => {}}
      onCtaClick={() => {}}
      study={study}
    />
  );
};

export const Default = () => (
  <CardWrapper>
    <Card
      showEditMenu
      onEditClick={() => {}}
      onCtaClick={() => {}}
      study={{
        title: 'Next.js - App Router: Routing Fundamentals',
        type: 'MODERN_JS',
        category: 'BLOG',
        deadline: '2026-03-08',
        currentParticipants: 6,
        maxParticipants: 8,
        isDeadlinePassed: false,
        isParticipating: true,
        isRecruitmentFull: true,
      }}
    />
  </CardWrapper>
);
Default.parameters = {
  docs: {
    source: {
      code: `<Card
  onCtaClick={() => {}}
  onEditClick={() => {}}
  study={{
    title: 'Next.js - App Router: Routing Fundamentals',
    type: 'MODERN_JS',
    category: 'BLOG',
    deadline: '2026-03-08',
    currentParticipants: 6,
    maxParticipants: 8,
    isDeadlinePassed: false,
    isParticipating: true,
    isRecruitmentFull: true,
  }}
/>`,
    },
  },
};

export const StatusDateEnd = () => (
  <CardWrapper>
    <Card
      showEditMenu
      onEditClick={() => {}}
      onCtaClick={() => {}}
      study={{
        title: 'API 설계 베스트 프랙티스',
        type: 'API',
        category: 'BLOG',
        deadline: '2024-02-15',
        currentParticipants: 5,
        maxParticipants: 5,
        isDeadlinePassed: true,
        isParticipating: true,
        isRecruitmentFull: false,
      }}
    />
  </CardWrapper>
);

export const StatusRecruitEnd = () => (
  <CardWrapper>
    <Card
      showEditMenu
      onEditClick={() => {}}
      onCtaClick={() => {}}
      study={{
        title: '모던 자바스크립트 핵심 문법',
        type: 'MODERN_JS',
        category: 'DOCUMENT',
        deadline: '2026-03-08',
        currentParticipants: 8,
        maxParticipants: 8,
        isDeadlinePassed: false,
        isParticipating: false,
        isRecruitmentFull: true,
      }}
    />
  </CardWrapper>
);

export const Minimal = () => (
  <CardWrapper>
    <Card
      onEditClick={() => {}}
      onCtaClick={() => {}}
      study={{
        title: '모던 자바스크립트',
        type: 'MODERN_JS',
        category: null,
        deadline: '2026-03-26',
        currentParticipants: 2,
        maxParticipants: 5,
        isDeadlinePassed: false,
        isParticipating: false,
        isRecruitmentFull: false,
      }}
    />
  </CardWrapper>
);
