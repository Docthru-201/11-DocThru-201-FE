'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';
import FeedbackForm from './FeedbackForm';
import * as styles from './FeedbackList.css';

function FeedbackItem({
  comment,
  workId,
  depth = 0,
  onUpdate,
  onDelete,
  isUpdatePending,
  isDeletePending,
}) {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const user = useAuthStore((state) => state.user);

  const isOwner = user?.id === comment.authorId;
  const isAdmin = user?.role === 'ADMIN';
  const canEdit = isOwner;
  const canDelete = isOwner || isAdmin;

  // 삭제된 댓글 여부
  const isDeleted = !!comment.deletedAt;

  // 수정된 댓글 여부 (updatedAt이 createdAt과 다르면 수정됨)
  const isEdited =
    comment.updatedAt &&
    new Date(comment.updatedAt).getTime() !==
      new Date(comment.createdAt).getTime();

  const handleUpdate = () => {
    if (!editContent.trim()) return;
    onUpdate(
      { commentId: comment.id, body: { content: editContent } },
      { onSuccess: () => setIsEditing(false) },
    );
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getFullYear().toString().slice(2)}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className={styles.item}>
      {/* 작성자 정보 */}
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

      {/* 댓글 내용 */}
      {isDeleted ? (
        // ✅ 삭제된 댓글 - 답글은 그대로 유지하고 내용만 대체
        <p className={styles.deletedContent}>삭제된 댓글입니다.</p>
      ) : isEditing ? (
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
        <p className={styles.content}>
          {comment.content}
          {/* ✅ 수정됨 표시 */}
          {isEdited && <span className={styles.editedMark}> (수정됨)</span>}
        </p>
      )}

      {/* 액션 버튼 - 삭제된 댓글이거나 수정 중이면 숨김 */}
      {!isDeleted && !isEditing && (
        <div className={styles.actions}>
          {/* ✅ depth === 0 일 때만 답글 버튼 표시 */}
          {depth === 0 && user && (
            <button
              className={styles.actionButton}
              onClick={() => setIsReplying((prev) => !prev)}
            >
              {isReplying ? '취소' : '답글'}
            </button>
          )}
          {/* ✅ 본인 댓글만 수정 버튼 */}
          {canEdit && (
            <button
              className={styles.actionButton}
              onClick={() => setIsEditing(true)}
            >
              수정
            </button>
          )}
          {/* ✅ 본인 댓글 or 어드민만 삭제 버튼 */}
          {canDelete && (
            <button
              className={styles.actionButtonDanger}
              onClick={() => onDelete(comment.id)}
              disabled={isDeletePending}
            >
              {isDeletePending ? '삭제 중...' : '삭제'}
            </button>
          )}
        </div>
      )}

      {/* 답글 작성 폼 */}
      {isReplying && (
        <FeedbackForm
          workId={workId}
          parentId={comment.id}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {/* ✅ 답글 목록 - depth + 1로 재귀 호출 */}
      {comment.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => (
            <FeedbackItem
              key={reply.id}
              comment={reply}
              workId={workId}
              depth={depth + 1}
              onUpdate={onUpdate}
              onDelete={onDelete}
              isUpdatePending={isUpdatePending}
              isDeletePending={isDeletePending}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FeedbackList({ workId }) {
  // ✅ useComments는 여기서 딱 한 번만 호출
  const {
    comments,
    isPending,
    isError,
    updateComment,
    deleteComment,
    isUpdatePending,
    isDeletePending,
  } = useComments(workId);

  const [visibleCount, setVisibleCount] = useState(3);

  if (isPending) return <div>댓글 불러오는 중...</div>;
  if (isError) return <div>댓글을 불러오는데 실패했습니다.</div>;

  // ✅ 최상위 댓글만 필터링 (parentId 없는 것)
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
            <FeedbackItem
              key={comment.id}
              comment={comment}
              workId={workId}
              depth={0}
              onUpdate={updateComment}
              onDelete={deleteComment}
              isUpdatePending={isUpdatePending}
              isDeletePending={isDeletePending}
            />
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
