'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useEditorStore } from '@/features/editor/store/useEditorStore';
import TiptapEditor from '@/features/editor/TiptapEditor';
import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import { Modal } from '@/shared/components/Modal';
import Image from 'next/image';
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
  const [workTitle, setWorkTitle] = useState(work?.title || '');
  const isSubmitted = work?.status === 'SUBMITTED';

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
    updateWork({ content: JSON.stringify(content), title: workTitle });
  };

  const handleSubmit = () => {
    if (!content) return;
    updateWork(
      { content: JSON.stringify(content), action: 'SUBMIT', title: workTitle },
      {
        onSuccess: () => {
          resetContent();
          router.push(`/challenges/${challengeId}/work/${workId}`);
        },
      },
    );
  };
  useEffect(() => {
    if (work?.title) setWorkTitle(work.title);
  }, [work]);

  if (isPending) return <div>로딩 중...</div>;

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <Link href="/challenges" className={styles.logo}>
              <span className={styles.logoIcon}>
                <Icon name="docthruLogo" width={24} height={28} aria-hidden />
              </span>
              Docthru
            </Link>
          </div>
          <div className={styles.headerRight}>
            <button
              className={styles.giveUpButton}
              onClick={() => setIsCancelModalOpen(true)}
              disabled={isDeletePending}
            >
              <Image
                src="/icons/btn-filled-tonal.svg"
                alt="포기"
                width={80}
                height={36}
              />
            </button>
            <Button
              variant="outline"
              className={styles.headerButton}
              onClick={handleSave}
              disabled={isUpdatePending || !content}
            >
              임시저장
            </Button>
            <Button
              variant="solid"
              className={styles.headerButton}
              onClick={handleSubmit}
              disabled={isUpdatePending || !content}
            >
              {isUpdatePending
                ? '저장 중...'
                : isSubmitted
                  ? '수정하기'
                  : '제출하기'}
            </Button>
          </div>
        </div>
      </header>

      <div className={styles.titleBar}>
        <div className={styles.titleBarInner}>
          <span className={styles.challengeSubTitle}>
            {work?.challenge?.title}
          </span>
          <input
            className={styles.titleInput}
            value={workTitle}
            onChange={(e) => setWorkTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>
      </div>

      <div className={styles.contentArea}>
        <div className={showOriginal ? styles.editorHalf : styles.editorArea}>
          <TiptapEditor
            initialContent={
              work?.draftContent
                ? JSON.parse(work.draftContent)
                : work?.content
                  ? JSON.parse(work.content)
                  : null
            }
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
