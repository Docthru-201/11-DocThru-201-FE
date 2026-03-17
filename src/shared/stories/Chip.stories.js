import { Chip } from '@/shared/components';

export default {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

// Object 형태로도 가져와보기

export const Type = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Chip type="next" />
    <Chip type="api" />
    <Chip type="career" />
    <Chip type="modernJs" />
    <Chip type="web" />
  </div>
);

export const Category = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Chip category="docs" />
    <Chip category="blog" />
  </div>
);

export const Status = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Chip status="wait" />
    <Chip status="rejected" />
    <Chip status="approved" />
    <Chip status="deleted" />
  </div>
);
