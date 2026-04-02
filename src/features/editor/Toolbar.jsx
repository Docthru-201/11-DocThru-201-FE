'use client';
import { useRef } from 'react';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  ImageIcon,
} from 'lucide-react';
import * as styles from './Toolbar.css.js';

export default function Toolbar({ editor, onImageUpload }) {
  const fileInputRef = useRef(null);

  if (!editor) return null;

  const handleImageFile = async (file) => {
    try {
      const src = await onImageUpload(file);
      editor.chain().focus().setImage({ src }).run();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.toolbar}>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold')}
      >
        <Bold size={16} />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive('italic')}
      >
        <Italic size={16} />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        data-active={editor.isActive('underline')}
      >
        <Underline size={16} />
      </button>

      <div className={styles.divider} />

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        data-active={editor.isActive({ textAlign: 'left' })}
      >
        <AlignLeft size={16} />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        data-active={editor.isActive({ textAlign: 'center' })}
      >
        <AlignCenter size={16} />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        data-active={editor.isActive({ textAlign: 'right' })}
      >
        <AlignRight size={16} />
      </button>

      <div className={styles.divider} />

      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive('bulletList')}
      >
        <List size={16} />
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        data-active={editor.isActive('orderedList')}
      >
        <ListOrdered size={16} />
      </button>

      <div className={styles.divider} />

      <button
        className={styles.button}
        onClick={() => fileInputRef.current?.click()}
      >
        <ImageIcon size={16} />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
