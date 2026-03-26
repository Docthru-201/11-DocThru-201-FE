'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';
import FeedbackForm from './FeedbackForm';

// 댓글 하나 (대댓글 포함)
function FeedbackItem({ comment, workId }) {
  const [isReplying, setIsReplying] = useState(false); // 대댓글 폼 열림 여부
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
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

  return (
    <div>
      {/* 댓글 헤더 - 작성자 정보 */}
      <div>
        {comment.author?.image && (
          <img
            src={comment.author.image}
            alt={comment.author.nickname}
            width={28}
            height={28}
          />
        )}
        <span>{comment.author?.nickname ?? '탈퇴한 유저'}</span>
        <span>{comment.createdAt}</span>
      </div>

      {/* 댓글 본문 - 수정 모드 분기 */}
      {isEditing ? (
        <div>
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            disabled={isUpdatePending}
          />
          <button onClick={() => setIsEditing(false)}>취소</button>
          <button
            onClick={handleUpdate}
            disabled={isUpdatePending || !editContent.trim()}
          >
            {isUpdatePending ? '수정 중...' : '수정 완료'}
          </button>
        </div>
      ) : (
        <p>{comment.content}</p>
      )}

      {/* 액션 버튼 */}
      <div>
        {/* 대댓글 버튼 - 로그인 유저만 */}
        {user && !isEditing && (
          <button onClick={() => setIsReplying((prev) => !prev)}>
            {isReplying ? '취소' : '답글'}
          </button>
        )}
        {canEdit && !isEditing && (
          <button onClick={() => setIsEditing(true)}>수정</button>
        )}
        {canDelete && (
          <button
            onClick={() => deleteComment(comment.id)}
            disabled={isDeletePending}
          >
            {isDeletePending ? '삭제 중...' : '삭제'}
          </button>
        )}
      </div>

      {/* 대댓글 작성 폼 */}
      {isReplying && (
        <FeedbackForm
          workId={workId}
          parentId={comment.id}
          onCancel={() => setIsReplying(false)}
        />
      )}

      {/* 대댓글 목록 */}
      {comment.replies?.length > 0 && (
        <div style={{ marginLeft: 24 }}>
          {comment.replies.map((reply) => (
            <FeedbackItem key={reply.id} comment={reply} workId={workId} />
          ))}
        </div>
      )}
    </div>
  );
}

// 댓글 전체 목록
export default function FeedbackList({ workId }) {
  const { comments, isPending, isError } = useComments(workId);

  if (isPending) return <div>댓글 불러오는 중...</div>;
  if (isError) return <div>댓글을 불러오는데 실패했습니다.</div>;
  if (comments.length === 0) return <div>아직 댓글이 없어요.</div>;

  // 최상위 댓글만 필터링 (parentId가 없는 것)
  const topLevelComments = comments.filter((c) => !c.parentId);

  return (
    <div>
      {topLevelComments.map((comment) => (
        <FeedbackItem key={comment.id} comment={comment} workId={workId} />
      ))}
    </div>
  );
}
