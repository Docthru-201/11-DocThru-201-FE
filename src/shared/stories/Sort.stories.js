import { Sort } from '@/shared/components';

export default {
  title: 'Components/Sort',
  component: Sort,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Active = () => <Sort label="승인 대기" active />;

export const Inactive = () => <Sort label="필터" active={false} />;

export const FilterActive = () => <Sort label="필터" active />;
