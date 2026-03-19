import { useState } from 'react';
import { Tab } from '@/shared/components';

export default {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const middleTabs = [
  { value: 'ongoing', label: '진행중인 챌린지' },
  { value: 'done', label: '완료한 챌린지' },
];

export const Default = () => {
  const [value, setValue] = useState('ongoing');

  return <Tab tabs={middleTabs} value={value} onChange={setValue} />;
};

export const SecondActive = () => {
  const [value, setValue] = useState('done');

  return <Tab tabs={middleTabs} value={value} onChange={setValue} />;
};
