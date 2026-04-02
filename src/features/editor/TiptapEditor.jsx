'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useCallback } from 'react';
import { useEditorStore } from './store/useEditorStore';
import { useImageUpload } from './hooks/useImageUpload';
import Toolbar from './Toolbar';
import './TiptapEditor.css';

export function TiptapEditor({ initialContent = null, editable = true }) {
  const { setContent } = useEditorStore();
  const { uploadImage } = useImageUpload();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
    ],
    content: initialContent,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON()); // 변경될 때마다 store에 저장
    },
  });

  // 드래그앤드롭 처리
  const handleDrop = useCallback(
    async (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files).filter((f) =>
        f.type.startsWith('image/'),
      );
      for (const file of files) {
        try {
          const src = await uploadImage(file);
          editor?.chain().focus().setImage({ src }).run();
        } catch (err) {
          console.error(err.message);
        }
      }
    },
    [editor, uploadImage],
  );

  const handleDragOver = (e) => e.preventDefault();

  if (!editor) return null;

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      <Toolbar editor={editor} onImageUpload={uploadImage} />
      <div
        onClick={() => editor.chain().focus().run()}
        style={{ minHeight: '500px', cursor: 'text' }}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TiptapEditor;
