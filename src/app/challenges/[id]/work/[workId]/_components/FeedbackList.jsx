'use client';
import { useState, useRef, useEffect } from 'react';
import { MoreVertical, ChevronDown, ChevronUp } from 'lucide-react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';
import { CommentListSkeleton } from '@/shared/components/Skeleton';

import FeedbackForm from './FeedbackForm';
import * as styles from './FeedbackList.css.js';

function FeedbackItem({
  comment,
  workId,
  depth = 0,
  onUpdate,
  onDelete,
  isUpdatePending,
  isDeletePending,
  onProfileClick,
}) {
  const [showReplies, setShowReplies] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const user = useAuthStore((state) => state.user);

  const isOwner = user?.id === comment.authorId;
  const isAdmin = user?.role === 'ADMIN';
  const canEdit = isOwner;
  const canDelete = isOwner || isAdmin;

  const isDeleted = !!comment.deletedAt;

  if (isDeleted) return null;

  const isEdited =
    comment.updatedAt &&
    new Date(comment.updatedAt).getTime() !==
      new Date(comment.createdAt).getTime();

  const replyCount = comment.replies?.length ?? 0;

  useEffect(() => {
    if (!showDropdown) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

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
      {/* 작성자 정보 + 드롭다운 */}
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
          <span
            className={styles.nickname}
            onClick={() => comment.author && onProfileClick(comment.author.id)}
            style={{ cursor: comment.author ? 'pointer' : 'default' }}
          >
            {comment.author?.nickname ?? '탈퇴한 유저'}
          </span>
          <span className={styles.date}>{formatDate(comment.createdAt)}</span>
        </div>

        {/* 드롭다운 - 본인 댓글만 */}
        {!isDeleted && !isEditing && (canEdit || canDelete) && (
          <div className={styles.dropdownWrapper} ref={dropdownRef}>
            <button
              className={styles.dropdownTrigger}
              onClick={() => setShowDropdown((v) => !v)}
            >
              <MoreVertical size={16} strokeWidth={1.5} />
            </button>
            {showDropdown && (
              <div className={styles.dropdownMenu}>
                {canEdit && (
                  <button
                    className={styles.dropdownItem}
                    onClick={() => {
                      setIsEditing(true);
                      setShowDropdown(false);
                    }}
                  >
                    수정
                  </button>
                )}
                {canDelete && (
                  <button
                    className={styles.dropdownItemDanger}
                    onClick={() => {
                      onDelete(comment.id);
                      setShowDropdown(false);
                    }}
                    disabled={isDeletePending}
                  >
                    {isDeletePending ? '삭제 중...' : '삭제'}
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 댓글 내용 */}
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
        <p className={styles.content}>
          {comment.content}
          {isEdited && <span className={styles.editedMark}> (수정됨)</span>}
        </p>
      )}

      {/* 하단 - 답글 N개 토글 (depth === 0만) */}
      {!isEditing && depth === 0 && (
        <div className={styles.actions}>
          <button
            className={styles.replyToggleButton}
            onClick={() => setShowReplies((prev) => !prev)}
          >
            답글 {replyCount}개
            {showReplies ? (
              <ChevronUp size={14} strokeWidth={1.5} />
            ) : (
              <ChevronDown size={14} strokeWidth={1.5} />
            )}
          </button>
        </div>
      )}

      {/* 답글 목록 + 작성 폼 */}
      {showReplies && depth === 0 && (
        <div className={styles.replies}>
          {comment.replies?.map((reply) => (
            <FeedbackItem
              key={reply.id}
              comment={reply}
              workId={workId}
              depth={depth + 1}
              onUpdate={onUpdate}
              onDelete={onDelete}
              isUpdatePending={isUpdatePending}
              isDeletePending={isDeletePending}
              onProfileClick={onProfileClick}
            />
          ))}
          {user && <FeedbackForm workId={workId} parentId={comment.id} />}
          <button
            className={styles.replyCollapseButton}
            onClick={() => setShowReplies(false)}
          >
            답글 접기
            <ChevronUp size={14} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function FeedbackList({ workId, onProfileClick }) {
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

  if (isPending) return <CommentListSkeleton />;
  if (isError) return <div>댓글을 불러오는데 실패했습니다.</div>;

  const topLevelComments = comments
    .filter((c) => !c.parentId && !c.deletedAt)
    .map((c) => ({
      ...c,
      replies: (c.replies || []).filter((r) => !r.deletedAt),
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
              onProfileClick={onProfileClick}
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
