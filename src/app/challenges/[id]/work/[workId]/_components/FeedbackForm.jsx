'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';
import { Icon } from '@/shared/components/Icon';
import * as styles from './FeedbackForm.css.js';

const MAX_LENGTH = 1000;

export default function FeedbackForm({ workId, parentId = null, onCancel }) {
  const [content, setContent] = useState('');
  const user = useAuthStore((state) => state.user);
  const { createComment, isCreatePending } = useComments(workId);
  const isReply = !!parentId;

  const handleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH) {
      setContent(e.target.value);
    }
  };

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
      <div className={isReply ? styles.container : styles.containerMain}>
        <div className={isReply ? styles.inputWrapper : styles.inputRowMain}>
          <textarea
            className={isReply ? styles.disabledTextarea : styles.textareaMain}
            disabled
            placeholder="댓글을 작성하려면 로그인이 필요합니다."
          />
          {!isReply && (
            <button type="button" className={styles.submitButtonMain} disabled>
              <Icon name="arrowDownBold" width={20} height={20} aria-hidden />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (isReply) {
    return (
      <div className={styles.container}>
        <div className={styles.inputWrapper}>
          <textarea
            className={styles.textarea}
            value={content}
            onChange={handleChange}
            placeholder="대댓글을 입력하세요."
            disabled={isCreatePending}
          />
          <button
            type="button"
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={isCreatePending || !content.trim()}
            aria-label="답글 등록"
          >
            →
          </button>
        </div>
        <div className={styles.charCount}>
          {content.length} / {MAX_LENGTH}
        </div>
        <div className={styles.replyActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
            disabled={isCreatePending}
          >
            취소
          </button>
          <button
            type="button"
            className={styles.replyButton}
            onClick={handleSubmit}
            disabled={isCreatePending || !content.trim()}
          >
            {isCreatePending ? '작성 중...' : '답글 작성'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.inputRowMain}>
        <textarea
          className={styles.textareaMain}
          value={content}
          onChange={handleChange}
          placeholder="피드백을 남겨주세요"
          disabled={isCreatePending}
          rows={2}
        />
        <button
          type="button"
          className={styles.submitButtonMain}
          onClick={handleSubmit}
          disabled={isCreatePending || !content.trim()}
          aria-label="피드백 등록"
        >
          <Icon name="arrowDownBold" width={20} height={20} aria-hidden />
        </button>
      </div>
      <div className={styles.charCount}>
        {content.length} / {MAX_LENGTH}
      </div>
    </div>
  );
}
