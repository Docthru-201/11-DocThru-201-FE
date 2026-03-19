import { useState } from 'react';
import { TextBox } from '@/shared/components';

export default {
  title: 'Components/TextBox',
  component: TextBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '400px' }}>
      <TextBox
        placeholder="피드백을 남겨주세요"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const MaxHeight = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '400px' }}>
      <TextBox
        placeholder="피드백을 남겨주세요"
        value={value}
        onChange={setValue}
        maxHeight
      />
    </div>
  );
};
