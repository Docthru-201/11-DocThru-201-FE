'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';

import FeedbackForm from './FeedbackForm';
import * as styles from './FeedbackList.css';
import { useComments } from '@/features/comments/hooks/useComments';

function FeedbackItem({ comment, workId }) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const user = useAuthStore((state) => state.user);
  const { updateComment, deleteComment, isUpdatePending, isDeletePending } =
    useComments(workId);

  const isOwner = user?.id === comment.authorId;
  const isAdmin = user?.role === 'ADMIN';
  const canEdit = isOwner;
  const canDelete = isOwner || isAdmin;

  const handleUpdate = () => {
    if (!editContent.trim()) return;
    updateComment(
      { commentId: comment.id, body: { content: editContent } },
      { onSuccess: () => setIsEditing(false) },
    );
  };

  // 날짜 포맷
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear().toString().slice(2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemHeader}>
        {comment.author?.image ? (
          <img
            className={styles.avatar}
            src={comment.author.image}
            alt={comment.author.nickname}
          />
        ) : (
          <div className={styles.avatar} />
        )}
        <div className={styles.authorInfo}>
          <span className={styles.nickname}>
            {comment.author?.nickname ?? '탈퇴한 유저'}
          </span>
          <span className={styles.date}>{formatDate(comment.createdAt)}</span>
        </div>
      </div>

      {isEditing ? (
        <div>
          <textarea
            className={styles.editTextarea}
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            disabled={isUpdatePending}
          />
          <div className={styles.editActions}>
            <button
              className={styles.actionButton}
              onClick={() => setIsEditing(false)}
            >
              취소
            </button>
            <button
              className={styles.actionButton}
              onClick={handleUpdate}
              disabled={isUpdatePending || !editContent.trim()}
            >
              {isUpdatePending ? '수정 중...' : '수정 완료'}
            </button>
          </div>
        </div>
      ) : (
        <p className={styles.content}>{comment.content}</p>
      )}

      <div className={styles.actions}>
        {user && !isEditing && (
          <button
            className={styles.actionButton}
            onClick={() => setIsReplying((prev) => !prev)}
          >
            답글
          </button>
        )}
        {canEdit && !isEditing && (
          <button
            className={styles.actionButton}
            onClick={() => setIsEditing(true)}
          >
            수정
          </button>
        )}
        {canDelete && (
          <button
            className={styles.actionButtonDanger}
            onClick={() => deleteComment(comment.id)}
            disabled={isDeletePending}
          >
            {isDeletePending ? '삭제 중...' : '삭제'}
          </button>
        )}
      </div>

      {isReplying && (
        <FeedbackForm
          workId={workId}
          parentId={comment.id}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {comment.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <FeedbackItem key={reply.id} comment={reply} workId={workId} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FeedbackList({ workId }) {
  const { comments, isPending, isError } = useComments(workId);
  const [visibleCount, setVisibleCount] = useState(3);

  if (isPending) return <div>댓글 불러오는 중...</div>;
  if (isError) return <div>댓글을 불러오는데 실패했습니다.</div>;

  const topLevelComments = comments.filter((c) => !c.parentId);
  const visibleComments = topLevelComments.slice(0, visibleCount);
  const hasMore = topLevelComments.length > visibleCount;

  return (
    <div className={styles.container}>
      {topLevelComments.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#A3A3A3' }}>
          아직 댓글이 없어요.
        </p>
      ) : (
        <>
          {visibleComments.map((comment) => (
            <FeedbackItem key={comment.id} comment={comment} workId={workId} />
          ))}
          {hasMore && (
            <button
              className={styles.moreButton}
              onClick={() => setVisibleCount((prev) => prev + 3)}
            >
              더 보기
            </button>
          )}
        </>
      )}
    </div>
  );
}
