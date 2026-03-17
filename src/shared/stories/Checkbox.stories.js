import { useState } from 'react';
import { Checkbox } from '@/shared/components';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Unchecked = () => (
  <Checkbox checked={false} onChange={() => {}} aria-label="선택" />
);

export const Checked = () => (
  <Checkbox checked onChange={() => {}} aria-label="선택됨" />
);

export const Interactive = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={setChecked} aria-label="동의합니다" />
  );
};
