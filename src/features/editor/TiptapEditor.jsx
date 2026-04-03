'use client';
import { useEditor, EditorContent, useEditorState } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import Color from '@tiptap/extension-color';
import { useCallback, useEffect, useRef } from 'react';
import { useEditorStore } from './store/useEditorStore';
import { useFormatStore } from './store/useFormatStore';
import { useImageUpload } from './hooks/useImageUpload';
import Toolbar from './Toolbar';
import * as editorStyles from './TiptapEditor.css.js';

function buildMarks(format, schema) {
  const marks = [];
  if (format.bold && schema.marks.bold) marks.push(schema.marks.bold.create());
  if (format.italic && schema.marks.italic)
    marks.push(schema.marks.italic.create());
  if (format.underline && schema.marks.underline)
    marks.push(schema.marks.underline.create());
  if (format.color !== '#000000' && schema.marks.textStyle) {
    marks.push(schema.marks.textStyle.create({ color: format.color }));
  }
  return marks;
}

export function TiptapEditor({ initialContent = null, editable = true }) {
  const { setContent } = useEditorStore();
  const { uploadImage } = useImageUpload();
  const resetFormat = useFormatStore((state) => state.resetFormat);

  // store 최신값을 항상 참조하는 ref (클로저 stale 방지)
  const formatRef = useRef(useFormatStore.getState());
  useEffect(() => {
    return useFormatStore.subscribe((state) => {
      formatRef.current = state;
    });
  }, []);

  // 한글 등 IME 조합 중 여부 추적
  const isComposingRef = useRef(false);

  // 컴포넌트 언마운트 시 포맷 초기화
  useEffect(() => {
    return () => resetFormat();
  }, [resetFormat]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false, allowBase64: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
    ],
    content: initialContent,
    editable,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getJSON());
    },
    onSelectionUpdate({ editor }) {
      // IME 조합 중(한글 등)에는 stored marks 적용 금지
      queueMicrotask(() => {
        if (editor.isDestroyed || isComposingRef.current) return;
        const format = formatRef.current;
        const marks = buildMarks(format, editor.state.schema);
        editor.view.dispatch(
          editor.state.tr.setStoredMarks(marks.length > 0 ? marks : null),
        );
      });
    },
  });

  // 에디터 DOM에 IME 조합 이벤트 등록
  useEffect(() => {
    if (!editor) return;
    const dom = editor.view.dom;
    const onStart = () => {
      isComposingRef.current = true;
    };
    const onEnd = () => {
      isComposingRef.current = false;
    };
    dom.addEventListener('compositionstart', onStart);
    dom.addEventListener('compositionend', onEnd);
    return () => {
      dom.removeEventListener('compositionstart', onStart);
      dom.removeEventListener('compositionend', onEnd);
    };
  }, [editor]);

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

  const isEmpty = useEditorState({
    editor,
    selector: (ctx) => ctx.editor?.isEmpty ?? true,
  });

  if (!editor) return null;

  return (
    <div
      className="tiptap-editor-root"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <Toolbar editor={editor} onImageUpload={uploadImage} />
      <div
        className={editorStyles.editorBody}
        onClick={() => editor.chain().focus().run()}
      >
        {isEmpty && (
          <p className={editorStyles.editorPlaceholder} aria-hidden>
            번역 내용을 적어주세요
          </p>
        )}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

export default TiptapEditor;
