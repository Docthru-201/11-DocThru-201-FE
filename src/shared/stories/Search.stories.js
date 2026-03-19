import { useState } from 'react';
import { Search } from '@/shared/components';

export default {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <Search
      placeholder="챌린지 이름을 검색해보세요"
      value={value}
      onChange={setValue}
    />
  );
};
