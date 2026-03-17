import { useState } from 'react';
import { TabTop } from '@/shared/components';

export default {
  title: 'Components/TabTop',
  component: TabTop,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const tabs = [
  { value: 'tab1', label: '탭 01' },
  { value: 'tab2', label: '탭 02' },
  { value: 'tab3', label: '탭 03' },
];

export const Default = () => {
  const [value, setValue] = useState('tab1');
  return <TabTop tabs={tabs} value={value} onChange={setValue} />;
};
