'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';
import * as styles from './FeedbackForm.css.js';

export default function FeedbackForm({ workId, parentId = null, onCancel }) {
  const [content, setContent] = useState('');
  const user = useAuthStore((state) => state.user);
  const { createComment, isCreatePending } = useComments(workId);
  const isReply = !!parentId;

  const handleSubmit = () => {
    if (!content.trim()) return;
    createComment(
      { content, parentId },
      {
        onSuccess: () => {
          setContent('');
          if (onCancel) onCancel();
        },
      },
    );
  };

  if (!user) {
    return (
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <textarea
            className={styles.disabledTextarea}
            disabled
            placeholder="댓글을 작성하려면 로그인이 필요합니다."
          />
          <button className={styles.submitButton} disabled>
            →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={isReply ? '대댓글을 입력하세요.' : '피드백을 남겨주세요'}
          disabled={isCreatePending}
        />
        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={isCreatePending || !content.trim()}
        >
          →
        </button>
      </div>

      {isReply && (
        <div className={styles.replyActions}>
          <button
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isCreatePending}
          >
            취소
          </button>
          <button
            className={styles.replyButton}
            onClick={handleSubmit}
            disabled={isCreatePending || !content.trim()}
          >
            {isCreatePending ? '작성 중...' : '답글 작성'}
          </button>
        </div>
      )}
    </div>
  );
}
