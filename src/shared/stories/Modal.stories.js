import { useState } from 'react';
import { Modal, Button } from '@/shared/components';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ConfirmDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>
        삭제
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        variant="dialog"
        message="정말 삭제하시겠어요?"
        primaryLabel="네"
        secondaryLabel="아니오"
        onPrimary={() => setOpen(false)}
        onSecondary={() => setOpen(false)}
      />
    </>
  );
};

export const FormModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        거절 사유 입력
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        variant="form"
        title="거절 사유"
        submitLabel="전송"
        onSubmit={() => setOpen(false)}
      />
    </>
  );
};
