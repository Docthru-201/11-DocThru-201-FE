import { useState } from 'react';
import { Input } from '@/shared/components';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const EmailDefault = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      label="이메일"
      placeholder="이메일을 입력해주세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const EmailFilled = () => (
  <Input label="이메일" value="codeit@codeit.com" />
);

export const EmailError = () => (
  <Input
    label="이메일"
    value="codeit@codeit.c"
    error
    helperText="잘못된 이메일입니다."
  />
);

export const PasswordTyping = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      label="비밀번호"
      type="password"
      placeholder="비밀번호를 입력해주세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      showPasswordToggle
      helperText="8자 이상 입력해 주세요."
    />
  );
};

export const PasswordVisible = () => (
  <Input label="비밀번호" type="password" value="abcd1234" showPasswordToggle />
);

export const DateInput = () => (
  <Input label="마감 기한" type="date" placeholder="YY/MM/DD" />
);
