'use client';
import { useRef } from 'react';

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
    <div>
      {/* 텍스트 서식 */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold')}
      >
        B
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        data-active={editor.isActive('italic')}
      >
        I
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline?.().run()}
        data-active={editor.isActive('underline')}
      >
        U
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        data-active={editor.isActive('strike')}
      >
        S
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        data-active={editor.isActive('code')}
      >
        {'</>'}
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        data-active={editor.isActive('bulletList')}
      >
        ≡
      </button>

      {/* 이미지 업로드 버튼 */}
      <button onClick={() => fileInputRef.current?.click()}>🖼 이미지</button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageFile(file);
          e.target.value = ''; // 같은 파일 재업로드 허용
        }}
      />
    </div>
  );
}
