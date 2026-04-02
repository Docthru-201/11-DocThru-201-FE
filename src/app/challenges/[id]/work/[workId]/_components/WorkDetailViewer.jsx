'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import { useAuthStore } from '@/shared/store/useAuthStore';
import * as styles from './WorkDetailViewer.css.js';
import '@/features/editor/TiptapEditor.css.js';

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
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
      Color,
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
  onProfileClick,
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
        <span
          className={styles.nickname}
          onClick={() => onProfileClick(work.user.id)}
          style={{ cursor: 'pointer' }}
        >
          {work.user.nickname}
        </span>
        <button
          className={styles.likeButton}
          onClick={toggleLike}
          disabled={isLikePending || !user}
        >
          {isLiked ? '❤️' : '🤍'} {likeCount}
        </button>
      </div>

      {work.content ? (
        <WorkContent content={work.content} />
      ) : (
        <div
          style={{ textAlign: 'center', padding: '60px 0', color: '#A3A3A3' }}
        >
          아직 아무런 번역을 진행하지 않았어요!
        </div>
      )}
    </div>
  );
}
