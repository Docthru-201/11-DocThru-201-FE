'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
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

export default function WorkDetailViewer({
  work,
  likeCount,
  isLiked,
  toggleLike,
  isLikePending,
}) {
  // ✅ user Zustand에서 직접
  const user = useAuthStore((state) => state.user);

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

        <button
          onClick={toggleLike}
          disabled={isLikePending || !user} // 비로그인 비활성화
        >
          {isLiked ? '❤️' : '🤍'} {likeCount}
        </button>
      </div>

      <WorkContent content={work.content} />
    </div>
  );
}
