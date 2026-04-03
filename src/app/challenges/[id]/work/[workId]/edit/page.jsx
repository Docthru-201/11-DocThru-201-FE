'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useEditorStore } from '@/features/editor/store/useEditorStore';
import TiptapEditor from '@/features/editor/TiptapEditor';
import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import { Modal } from '@/shared/components/Modal';
import { WorkEditSkeleton } from '@/shared/components/Skeleton';
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
  const [workTitle, setWorkTitle] = useState('');
  const isSubmitted = work?.status === 'SUBMITTED';

  const originalUrl = work?.challenge?.originalUrl;
  const hasOriginal = Boolean(originalUrl);

  const isSubmitDisabled =
    isUpdatePending || !content || !(workTitle || work?.title);

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
    updateWork({
      content: JSON.stringify(content),
      title: workTitle || work?.title || '',
    });
  };

  const handleSubmit = () => {
    if (!content) return;
    updateWork(
      {
        content: JSON.stringify(content),
        action: 'SUBMIT',
        title: workTitle || work?.title || '',
      },
      {
        onSuccess: () => {
          resetContent();
          router.push(`/challenges/${challengeId}/work/${workId}`);
        },
      },
    );
  };

  const openOriginalInNewTab = () => {
    if (originalUrl) window.open(originalUrl, '_blank', 'noopener,noreferrer');
  };

  if (isPending) return <WorkEditSkeleton />;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainRow}>
        <div className={styles.leftPane}>
          <div className={styles.leftPaneInner}>
            <header className={styles.headerRow}>
              <Link href={`/challenges/${challengeId}`} className={styles.logo}>
                <span className={styles.logoIcon}>
                  <Icon
                    name="docthruLogo"
                    width={17.55}
                    height={28}
                    aria-hidden
                  />
                </span>
                Docthru
              </Link>
              <div className={styles.headerRight}>
                <Button
                  variant="filledTonal"
                  className={`${styles.headerButton} ${styles.headerButtonGiveUp}`}
                  onClick={() => setIsCancelModalOpen(true)}
                  disabled={isDeletePending || isUpdatePending}
                  icon={
                    <Icon
                      name="workGiveup"
                      width={24}
                      height={24}
                      aria-hidden
                    />
                  }
                  iconPosition="right"
                >
                  {isDeletePending ? '삭제 중...' : '포기'}
                </Button>
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
                  disabled={isSubmitDisabled}
                >
                  {isUpdatePending
                    ? '저장 중...'
                    : isSubmitted
                      ? '수정하기'
                      : '제출하기'}
                </Button>
              </div>
            </header>

            <div className={styles.titleBlock}>
              <span className={styles.challengeSubTitle}>
                {work?.challenge?.title}
              </span>
              <input
                className={styles.titleInput}
                defaultValue={work?.title || ''}
                onChange={(e) => setWorkTitle(e.target.value)}
                placeholder="제목을 입력하세요"
              />
            </div>

            <div className={styles.editorSection}>
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
          </div>
        </div>

        {hasOriginal && (
          <div
            className={
              showOriginal
                ? styles.originalPaneWrapperOpen
                : styles.originalPaneWrapperClosed
            }
            aria-hidden={!showOriginal}
          >
            <aside className={styles.originalPane} aria-label="원문 미리보기">
              <div className={styles.originalFrameWrap}>
                <iframe
                  src={originalUrl}
                  className={styles.originalIframe}
                  title="원문"
                />
              </div>
              <div
                className={styles.originalToolbar}
                role="toolbar"
                aria-label="원문 도구"
              >
                <button
                  type="button"
                  className={styles.originalCloseBtn}
                  onClick={() => setShowOriginal(false)}
                  aria-label="원문 패널 닫기"
                >
                  <Icon name="outCircle" width={32} height={32} aria-hidden />
                </button>
                <button
                  type="button"
                  className={styles.openLinkBtn}
                  onClick={openOriginalInNewTab}
                >
                  링크 열기
                  <Icon name="outCircle" width={24} height={24} aria-hidden />
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>

      {hasOriginal && !showOriginal && (
        <button
          type="button"
          className={styles.showOriginalTab}
          onClick={() => setShowOriginal(true)}
          aria-label="원문"
        >
          <span className={styles.showOriginalTabIcon}>
            <Image
              src="/icons/list-origin-url.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
            />
          </span>
          <span className={styles.showOriginalTabLabel}>원문</span>
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
