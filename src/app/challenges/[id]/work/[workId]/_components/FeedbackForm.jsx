'use client';
import { useState } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useComments } from '@/features/comments/hooks/useComments';

export default function FeedbackForm({ workId, parentId = null, onCancel }) {
  const [content, setContent] = useState('');
  const user = useAuthStore((state) => state.user);
  const { createComment, isCreatePending } = useComments(workId);

  const isReply = !!parentId; // 대댓글 여부

  const handleSubmit = () => {
    if (!content.trim()) return;

    createComment(
      { content, parentId },
      {
        onSuccess: () => {
          setContent('');
          if (onCancel) onCancel(); // 대댓글이면 폼 닫기
        },
      },
    );
  };

  // 비로그인이면 disabled + 안내 메시지
  if (!user) {
    return (
      <div>
        <textarea
          disabled
          placeholder="댓글을 작성하려면 로그인이 필요합니다."
        />
        <button disabled>작성</button>
      </div>
    );
  }

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={isReply ? '대댓글을 입력하세요.' : '댓글을 입력하세요.'}
        disabled={isCreatePending}
      />
      <div>
        {isReply && (
          <button onClick={onCancel} disabled={isCreatePending}>
            취소
          </button>
        )}
        <button
          onClick={handleSubmit}
          disabled={isCreatePending || !content.trim()}
        >
          {isCreatePending ? '작성 중...' : isReply ? '답글 작성' : '작성'}
        </button>
      </div>
    </div>
  );
}
