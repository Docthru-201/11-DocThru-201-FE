'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useAuthStore } from '@/shared/store/useAuthStore';
import * as styles from './WorkDetailViewer.css.js';

function WorkContent({ content }) {
  const parsedContent = (() => {
    if (!content) return null;
    try {
      return typeof content === 'string' ? JSON.parse(content) : content;
    } catch {
      return null;
    }
  })();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
    ],
    content: parsedContent,
    editable: false,
    immediatelyRender: false,
  });

  return (
    <div className={styles.contentBox}>
      <EditorContent editor={editor} />
    </div>
  );
}

export default function WorkDetailViewer({
  work,
  likeCount,
  isLiked,
  toggleLike,
  isLikePending,
}) {
  const user = useAuthStore((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{work.challenge.title}</h1>
          <div className={styles.tagRow}>
            {work.challenge.category && (
              <span className={styles.tag}>{work.challenge.category}</span>
            )}
            {work.challenge.type && (
              <span className={styles.tag}>{work.challenge.type}</span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.metaRow}>
        {work.user.image ? (
          <img
            className={styles.avatar}
            src={work.user.image}
            alt={work.user.nickname}
          />
        ) : (
          <div className={styles.avatar} />
        )}
        <span className={styles.nickname}>{work.user.nickname}</span>

        <button
          className={styles.likeButton}
          onClick={toggleLike}
          disabled={isLikePending || !user}
        >
          {isLiked ? '❤️' : '🤍'} {likeCount}
        </button>
      </div>

      <WorkContent content={work.content} />
    </div>
  );
}
