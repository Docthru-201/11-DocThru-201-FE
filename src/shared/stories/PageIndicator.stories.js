import { useState } from 'react';
import { PageIndicator } from '@/shared/components';

export default {
  title: 'Components/PageIndicator',
  component: PageIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    total: {
      control: { type: 'number', min: 1, max: 100 },
      description: '전체 페이지 수',
    },
    current: {
      control: { type: 'number', min: 1 },
      description: '현재 페이지 (스토리북에서 변경 시 초기값만 적용)',
    },
  },
  args: {
    total: 23,
    current: 4,
  },
};

function PageIndicatorDemo({ total, initialCurrent }) {
  const [page, setPage] = useState(initialCurrent);

  const handleChange = (newPage) => {
    setPage(newPage);
    console.log(`페이지가 ${newPage}로 변경되었습니다.`);
  };

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <PageIndicator current={page} total={total} onChange={handleChange} />
    </div>
  );
}

export const Default = (args) => (
  <PageIndicatorDemo
    key={`${args.total}-${args.current}`}
    total={args.total}
    initialCurrent={args.current}
  />
);

Default.args = {
  total: 23,
  current: 4,
};
