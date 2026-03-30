'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useEditorStore } from '@/features/editor/store/useEditorStore';
import TiptapEditor from '@/features/editor/TiptapEditor';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';
import * as styles from './page.css.js';

export default function WorkEditPage() {
  const { id: challengeId, workId } = useParams();
  const router = useRouter();
  const { work, isPending } = useWork(workId);
  const { updateWork, deleteWork, isUpdatePending, isDeletePending } =
    useWorkMutation(workId, challengeId);
  const { content, resetContent } = useEditorStore();
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  const handleCancel = () => {
    deleteWork(undefined, {
      onSuccess: () => {
        resetContent();
        router.push(`/challenges/${challengeId}`);
      },
    });
    setIsCancelModalOpen(false);
  };

  const handleSave = () => {
    if (!content) return;
    updateWork({ content: JSON.stringify(content) });
  };

  const handleSubmit = () => {
    if (!content) return;
    updateWork(
      { content: JSON.stringify(content), action: 'SUBMIT' },
      {
        onSuccess: () => {
          resetContent();
          router.push(`/challenges/${challengeId}/work/${workId}`);
        },
      },
    );
  };

  if (isPending) return <div>로딩 중...</div>;

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.challengeTitle}>
            {work?.challenge?.title}
          </span>
        </div>
        <div className={styles.headerRight}>
          <Button
            variant="filledTonal"
            onClick={() => setIsCancelModalOpen(true)}
            disabled={isDeletePending}
          >
            {isDeletePending ? '삭제 중...' : '포기'}
          </Button>
          <Button
            variant="outline"
            onClick={handleSave}
            disabled={isUpdatePending || !content}
          >
            임시저장
          </Button>
          <Button
            variant="solid"
            onClick={handleSubmit}
            disabled={isUpdatePending || !content}
          >
            {isUpdatePending ? '제출 중...' : '제출하기'}
          </Button>
        </div>
      </header>

      <div className={styles.contentArea}>
        <div className={showOriginal ? styles.editorHalf : styles.editorArea}>
          <TiptapEditor
            initialContent={work?.content ? JSON.parse(work.content) : null}
          />
        </div>

        {showOriginal && work?.challenge?.originalUrl && (
          <div className={styles.originalArea}>
            <iframe
              src={work.challenge.originalUrl}
              className={styles.originalIframe}
              title="원문"
            />
          </div>
        )}
      </div>

      {work?.challenge?.originalUrl && (
        <button
          className={styles.originalButton}
          onClick={() => setShowOriginal((prev) => !prev)}
        >
          {showOriginal ? '원문\n닫기' : '원문'}
        </button>
      )}

      <Modal
        open={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        message="작업을 포기하면 작업물이 삭제됩니다. 정말 포기하시겠습니까?"
        primaryLabel="포기하기"
        secondaryLabel="취소"
        onPrimary={handleCancel}
        onSecondary={() => setIsCancelModalOpen(false)}
      />
    </div>
  );
}
