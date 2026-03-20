import { Container } from '@/shared/components';

export default {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Figma 크기 옵션',
    },
    deadlineText: { control: 'text', description: '마감일 텍스트' },
    personText: { control: 'text', description: '참여 텍스트 (예: 15/15)' },
    originalLabel: { control: 'text', description: '원문 보기 버튼 라벨' },
    actionLabel: { control: 'text', description: '작업 도전하기 버튼 라벨' },
  },
  args: {
    size: 'large',
    deadlineText: '2024년 3월 3일 마감',
    personText: '15/15',
    originalLabel: '원문 보기',
    actionLabel: '작업 도전하기',
  },
};

export const Playground = (args) => (
  <div style={{ background: '#FFFFFF', padding: 24 }}>
    <Container
      {...args}
      onOriginalViewClick={() => {}}
      onActionClick={() => {}}
    />
  </div>
);

export const AllSizes = () => (
  <div style={{ background: '#FFFFFF', padding: 24, display: 'flex', gap: 24 }}>
    <Container
      size="small"
      onOriginalViewClick={() => {}}
      onActionClick={() => {}}
    />
    <Container
      size="medium"
      onOriginalViewClick={() => {}}
      onActionClick={() => {}}
    />
    <Container
      size="large"
      onOriginalViewClick={() => {}}
      onActionClick={() => {}}
    />
  </div>
);
