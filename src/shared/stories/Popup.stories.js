import { useState } from 'react';
import { Popup, Button } from '@/shared/components';

export default {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const AlertSmall = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>
        알림 열기
      </Button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        message="가입이 완료되었습니다!"
        confirmLabel="확인"
      />
    </>
  );
};

export const AlertLarge = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        큰 알림
      </Button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        message="작업이 완료되었습니다."
      />
    </>
  );
};
