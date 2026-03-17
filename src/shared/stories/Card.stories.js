import { Card } from '@/shared/components';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    viewport: { defaultViewport: 'desktop' },
  },
};

const CardWrapper = ({ children }) => (
  <div style={{ width: 996, minHeight: 227 }}>{children}</div>
);

export const Default = () => (
  <CardWrapper>
    <Card
      onCtaClick={() => {}}
      showEditMenu
      study={{
        isRecruitmentFull: true,
        isDeadlinePassed: false,
        title: 'Next.js - App Router: Routing Fundamentals',
        type: 'MODERN_JS',
        category: 'BLOG',
        deadline: '2026-03-08',
        maxParticipants: 8,
        currentParticipants: 6,
        isParticipating: true,
      }}
    />
  </CardWrapper>
);

// export const WithDateEnd = () => (
//   <Card
//     status="dateEnd"
//     title="API 설계 베스트 프랙티스"
//     chipType="api"
//     chipCategory="blog"
//     deadlineText="2024년 2월 15일 마감"
//     personText="3/5 참여 완료"
//   />
// );

// export const Minimal = () => (
//   <Card title="모던 자바스크립트" chipType="modernJs" deadlineText="마감 D-7" />
// );
