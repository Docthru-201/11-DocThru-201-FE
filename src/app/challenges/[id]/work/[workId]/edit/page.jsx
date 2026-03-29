'use client';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useEditorStore } from '@/features/editor/store/useEditorStore';
import TiptapEditor from '@/features/editor/TiptapEditor';
import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './page.css.js';

export default function WorkEditPage() {
  const { id: challengeId, workId } = useParams();
  const router = useRouter();
  const { work, isPending } = useWork(workId);
  const { updateWork, isUpdatePending } = useWorkMutation(workId, challengeId);
  const { content, resetContent } = useEditorStore();

  const handleCancel = () => {
    resetContent();
    router.push(`/challenges/${challengeId}`);
  };

  const handleSubmit = () => {
    if (!content) return;
    updateWork(
      { content: JSON.stringify(content) },
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
          <Icon name="docthruLogo" width={80} height={24} />
          <span className={styles.challengeTitle}>{work?.challengeTitle}</span>
        </div>
        <div className={styles.headerRight}>
          <Button variant="filledTonal" onClick={handleCancel}>
            포기
          </Button>
          <Button variant="outline">임시저장</Button>
          <Button
            variant="solid"
            onClick={handleSubmit}
            disabled={isUpdatePending || !content}
          >
            {isUpdatePending ? '제출 중...' : '제출하기'}
          </Button>
        </div>
      </header>

      <div className={styles.editorArea}>
        <TiptapEditor
          initialContent={work?.content ? JSON.parse(work.content) : null}
        />
      </div>

      {work?.originalUrl && (
        <button
          className={styles.originalButton}
          onClick={() => window.open(work.originalUrl, '_blank')}
        >
          원문
        </button>
      )}
    </div>
  );
}
