'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { useFormatStore } from './store/useFormatStore';
import * as styles from './Toolbar.css.js';
import { ImageIcon } from 'lucide-react';

const PRESET_COLORS = [
  '#000000',
  '#434343',
  '#666666',
  '#999999',
  '#cccccc',
  '#ffffff',
  '#ff0000',
  '#ff9900',
  '#ffff00',
  '#00ff00',
  '#00ffff',
  '#0000ff',
  '#9900ff',
  '#ff00ff',
  '#f4cccc',
  '#fce5cd',
  '#fff2cc',
  '#d9ead3',
  '#d0e4f4',
  '#cfe2f3',
  '#d9d2e9',
  '#ead1dc',
];

export default function Toolbar({ editor, onImageUpload }) {
  const fileInputRef = useRef(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);

  const {
    bold,
    italic,
    underline,
    strikethrough,
    textAlign,
    bulletList,
    orderedList,
    color,
    highlight,
    setFormat,
  } = useFormatStore();

  if (!editor) return null;

  const handleImageFile = async (file) => {
    try {
      const src = await onImageUpload(file);
      editor.chain().focus().setImage({ src }).run();
    } catch (err) {
      console.error(err.message);
    }
  };

  const toggleBold = () => {
    setFormat({ bold: !bold });
    editor.chain().focus().toggleBold().run();
  };

  const toggleItalic = () => {
    setFormat({ italic: !italic });
    editor.chain().focus().toggleItalic().run();
  };

  const toggleUnderline = () => {
    setFormat({ underline: !underline });
    editor.chain().focus().toggleUnderline().run();
  };

  const toggleStrike = () => {
    setFormat({ strikethrough: !strikethrough });
    editor.chain().focus().toggleStrike().run();
  };

  const toggleHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  const setAlign = (align) => {
    const next = textAlign === align ? null : align;
    setFormat({ textAlign: next });
    if (next) {
      editor.chain().focus().setTextAlign(next).run();
    } else {
      editor.chain().focus().unsetTextAlign().run();
    }
  };

  const toggleBulletList = () => {
    setFormat({ bulletList: !bulletList, orderedList: false });
    editor.chain().focus().toggleBulletList().run();
  };

  const toggleOrderedList = () => {
    setFormat({ orderedList: !orderedList, bulletList: false });
    editor.chain().focus().toggleOrderedList().run();
  };

  const toggleCode = () => editor.chain().focus().toggleCode().run();
  const toggleCodeBlock = () => editor.chain().focus().toggleCodeBlock().run();
  const toggleBlockquote = () =>
    editor.chain().focus().toggleBlockquote().run();

  const handleColorSelect = (selectedColor) => {
    setFormat({ color: selectedColor });
    editor.chain().focus().setColor(selectedColor).run();
    setShowColorPicker(false);
  };

  const handleHighlightSelect = (selectedColor) => {
    setFormat({ highlight: selectedColor });
    editor.chain().focus().toggleHighlight({ color: selectedColor }).run();
    setShowHighlightPicker(false);
  };

  return (
    <div className={styles.toolbar}>
      {/* undo / redo */}
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().undo().run()}
        title="실행취소"
      >
        ↩
      </button>
      <button
        className={styles.button}
        onClick={() => editor.chain().focus().redo().run()}
        title="다시실행"
      >
        ↪
      </button>

      <div className={styles.divider} />

      {/* bold / italic / strike / underline */}
      <button className={styles.button} onClick={toggleBold} data-active={bold}>
        <Image src="/icons/editor-bold.svg" alt="굵게" width={24} height={24} />
      </button>
      <button
        className={styles.button}
        onClick={toggleItalic}
        data-active={italic}
      >
        <Image
          src="/icons/editor-italic.svg"
          alt="기울임"
          width={24}
          height={24}
        />
      </button>
      <button
        className={styles.button}
        onClick={toggleStrike}
        data-active={editor.isActive('strike')}
        title="취소선"
      >
        <s>S</s>
      </button>
      <button
        className={styles.button}
        onClick={toggleUnderline}
        data-active={underline}
      >
        <Image
          src="/icons/editor-underline.svg"
          alt="밑줄"
          width={24}
          height={24}
        />
      </button>

      {/* heading */}
      <button
        className={styles.button}
        onClick={() => toggleHeading(1)}
        data-active={editor.isActive('heading', { level: 1 })}
        title="제목1"
      >
        H1
      </button>
      <button
        className={styles.button}
        onClick={() => toggleHeading(2)}
        data-active={editor.isActive('heading', { level: 2 })}
        title="제목2"
      >
        H2
      </button>
      <button
        className={styles.button}
        onClick={() => toggleHeading(3)}
        data-active={editor.isActive('heading', { level: 3 })}
        title="제목3"
      >
        H3
      </button>

      <div className={styles.divider} />

      {/* image */}
      <button
        className={styles.button}
        onClick={() => fileInputRef.current?.click()}
        title="이미지 삽입"
      >
        <ImageIcon size={20} strokeWidth={1.5} />
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

      <div className={styles.divider} />

      {/* 정렬 */}
      <button
        className={styles.button}
        onClick={() => setAlign('left')}
        data-active={textAlign === 'left'}
      >
        <Image
          src="/icons/editor-alignment_left.svg"
          alt="왼쪽 정렬"
          width={24}
          height={24}
        />
      </button>
      <button
        className={styles.button}
        onClick={() => setAlign('center')}
        data-active={textAlign === 'center'}
      >
        <Image
          src="/icons/editor-alignment_center.svg"
          alt="가운데 정렬"
          width={24}
          height={24}
        />
      </button>
      <button
        className={styles.button}
        onClick={() => setAlign('right')}
        data-active={textAlign === 'right'}
      >
        <Image
          src="/icons/editor-alignment_right.svg"
          alt="오른쪽 정렬"
          width={24}
          height={24}
        />
      </button>

      <div className={styles.divider} />

      {/* 목록 */}
      <button
        className={styles.button}
        onClick={toggleBulletList}
        data-active={bulletList}
      >
        <Image
          src="/icons/editor-bullet.svg"
          alt="글머리 기호"
          width={24}
          height={24}
        />
      </button>
      <button
        className={styles.button}
        onClick={toggleOrderedList}
        data-active={orderedList}
      >
        <Image
          src="/icons/editor-numbering.svg"
          alt="번호 목록"
          width={24}
          height={24}
        />
      </button>

      <div className={styles.divider} />

      {/* 코드 / 코드블록 / 인용구 */}
      <button
        className={styles.button}
        onClick={toggleCode}
        data-active={editor.isActive('code')}
        title="인라인 코드"
      >
        {'<>'}
      </button>
      <button
        className={styles.button}
        onClick={toggleCodeBlock}
        data-active={editor.isActive('codeBlock')}
        title="코드 블록"
      >
        {'</>'}
      </button>
      <button
        className={styles.button}
        onClick={toggleBlockquote}
        data-active={editor.isActive('blockquote')}
        title="인용구"
      >
        ❝
      </button>

      <div className={styles.divider} />

      {/* 글자 색상 - A */}
      <div className={styles.colorWrapper}>
        <button
          className={styles.button}
          onClick={() => {
            setShowColorPicker((v) => !v);
            setShowHighlightPicker(false);
          }}
          title="글자 색상"
        >
          <span style={{ fontWeight: 'bold', fontSize: '16px' }}>A</span>
        </button>
        {showColorPicker && (
          <div className={styles.colorDropdown}>
            <div className={styles.colorGrid}>
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  className={styles.colorSwatch}
                  style={{
                    backgroundColor: c,
                    outline: color === c ? '2px solid #6366f1' : undefined,
                  }}
                  onClick={() => handleColorSelect(c)}
                  title={c}
                />
              ))}
            </div>
            <div className={styles.colorCustomRow}>
              <span className={styles.colorCustomLabel}>직접 입력</span>
              <input
                type="color"
                className={styles.colorCustomInput}
                value={color}
                onChange={(e) => handleColorSelect(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* 하이라이트 - ◆ */}
      <div className={styles.colorWrapper}>
        <button
          className={styles.button}
          onClick={() => {
            setShowHighlightPicker((v) => !v);
            setShowColorPicker(false);
          }}
          title="형광펜"
        >
          <Image
            src="/icons/editor-coloring.svg"
            alt="형광펜"
            width={24}
            height={24}
          />
        </button>
        {showHighlightPicker && (
          <div className={styles.colorDropdown}>
            <div className={styles.colorGrid}>
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  className={styles.colorSwatch}
                  style={{
                    backgroundColor: c,
                    outline: highlight === c ? '2px solid #6366f1' : undefined,
                  }}
                  onClick={() => handleHighlightSelect(c)}
                  title={c}
                />
              ))}
            </div>
            <div className={styles.colorCustomRow}>
              <span className={styles.colorCustomLabel}>직접 입력</span>
              <input
                type="color"
                className={styles.colorCustomInput}
                value={highlight}
                onChange={(e) => handleHighlightSelect(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
