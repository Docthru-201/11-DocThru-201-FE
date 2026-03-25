'use client';
import { useParams } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useAuthStore } from '@/shared/store/useAuthStore';

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
  const { workId } = useParams();
  const { work, isPending, isError } = useWork(workId);
  const { deleteWork, isDeletePending } = useWorkMutation(workId);
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
        <span>❤️ {work._count.likes}</span>
      </div>

      <WorkContent content={work.content} />

      {isOwner && (
        <div>
          <button>수정하기</button>
          <button onClick={() => deleteWork()} disabled={isDeletePending}>
            {isDeletePending ? '삭제 중...' : '삭제하기'}
          </button>
        </div>
      )}
    </div>
  );
}
