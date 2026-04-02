'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { Chip } from '@/shared/components';
import { Icon } from '@/shared/components/Icon';
import * as styles from './WorkDetailViewer.css.js';
import TextAlign from '@tiptap/extension-text-align';
import '@/features/editor/TiptapEditor.css.js';

const TYPE_MAP = {
  NEXT_JS: 'next_js',
  API: 'api',
  CAREER: 'career',
  MODERN_JS: 'modern_js',
  WEB: 'web',
};

const CATEGORY_MAP = {
  DOCUMENT: 'document',
  BLOG: 'blog',
};

function formatMetaDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const y = String(d.getFullYear()).slice(-2);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}/${m}/${day}`;
}

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
    ],
    content: parsedContent,
    editable: false,
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className={`${styles.workProse}`}>
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
  headerActions = null,
}) {
  const user = useAuthStore((state) => state.user);

  const typeKey = work?.challenge?.type ? TYPE_MAP[work.challenge.type] : null;
  const categoryKey = work?.challenge?.category
    ? CATEGORY_MAP[work.challenge.category]
    : null;

  const metaDate = formatMetaDate(
    work.submittedAt ?? work.updatedAt ?? work.createdAt,
  );

  const likeDisplay =
    typeof likeCount === 'number' ? likeCount.toLocaleString('ko-KR') : '0';

  return (
    <div className={styles.container}>
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{work.challenge.title}</h1>
        {headerActions}
      </div>

      {(typeKey || categoryKey) && (
        <div className={styles.tagRow}>
          {typeKey && <Chip type={typeKey} />}
          {categoryKey && <Chip category={categoryKey} />}
        </div>
      )}

      <hr className={styles.divider} />

      <div className={styles.metaRow}>
        <div className={styles.metaLeft}>
          <div className={styles.authorBlock}>
            {work.user.image ? (
              <img className={styles.avatar} src={work.user.image} alt="" />
            ) : (
              <div className={styles.avatar} aria-hidden />
            )}
            <span
              className={styles.nickname}
              onClick={() => onProfileClick(work.user.id)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ')
                  onProfileClick(work.user.id);
              }}
            >
              {work.user.nickname}
            </span>
          </div>
          <div className={styles.likeBlock}>
            <button
              type="button"
              className={styles.likeButton}
              onClick={toggleLike}
              disabled={isLikePending || !user}
              aria-label={isLiked ? '좋아요 취소' : '좋아요'}
            >
              <Icon
                name={isLiked ? 'heartActive' : 'heartInactive'}
                width={16}
                height={16}
                aria-hidden
              />
            </button>
            <span className={styles.likeCount}>{likeDisplay}</span>
          </div>
        </div>
        {metaDate ? <span className={styles.metaDate}>{metaDate}</span> : null}
      </div>

      <hr className={styles.dividerSpaced} />

      {work.content ? (
        <WorkContent content={work.content} />
      ) : (
        <div className={styles.emptyBody}>
          아직 아무런 번역을 진행하지 않았어요!
        </div>
      )}
    </div>
  );
}
