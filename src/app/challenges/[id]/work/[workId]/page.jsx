'use client';
import { useParams, useRouter } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { useLikes } from '@/features/likes/hooks/useLikes';

function WorkContent({ content }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: typeof content === 'string' ? JSON.parse(content) : content,
    editable: false,
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}

export default function WorkPage() {
  const { id, workId } = useParams(); // ✅ id(challengeId)도 같이 받기
  const router = useRouter(); // ✅ 수정하기 라우팅용
  const { work, isPending, isError } = useWork(workId);
  const { deleteWork, isDeletePending } = useWorkMutation(workId);
  const { likeCount, isLiked, toggleLike, isLikePending } = useLikes(workId); // ✅ 추가
  const user = useAuthStore((state) => state.user);

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>작업물을 불러오는데 실패했습니다.</div>;

  const isOwner = user?.id === work?.userId;

  return (
    <div>
      <h1>{work.challenge.title}</h1>

      <div>
        {work.user.image && (
          <img
            src={work.user.image}
            alt={work.user.nickname}
            width={32}
            height={32}
          />
        )}
        <span>{work.user.nickname}</span>

        {/* ✅ 좋아요 버튼 */}
        <button
          onClick={toggleLike}
          disabled={isLikePending || !user} // 비로그인이면 비활성화
        >
          {isLiked ? '❤️' : '🤍'} {likeCount}
        </button>
      </div>

      <WorkContent content={work.content} />

      {isOwner && (
        <div>
          {/* ✅ 수정하기 라우팅 */}
          <button
            onClick={() => router.push(`/challenges/${id}/work/${workId}/edit`)}
          >
            수정하기
          </button>
          <button onClick={() => deleteWork()} disabled={isDeletePending}>
            {isDeletePending ? '삭제 중...' : '삭제하기'}
          </button>
        </div>
      )}

      {/* ✅ 댓글 영역 - 나중에 여기에 붙임 */}
      {/* <CommentList workId={workId} /> */}
      {/* <CommentForm workId={workId} /> */}
    </div>
  );
}
