import { useState } from 'react';
import { Dropdown } from '@/shared/components';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

const categoryOptions = [
  { value: 'nextjs', label: 'Next.js' },
  { value: 'api', label: 'API' },
  { value: 'career', label: 'Career' },
  { value: 'modernJs', label: 'Modern JS' },
  { value: 'web', label: 'Web' },
];

export const Default = () => {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        label="카테고리"
        placeholder="카테고리"
        options={categoryOptions}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const WithPreselected = () => {
  const [value, setValue] = useState('nextjs');

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        label="카테고리"
        placeholder="카테고리"
        options={categoryOptions}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};
