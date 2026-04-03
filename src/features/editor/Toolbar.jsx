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

  const {
    bold,
    italic,
    underline,
    textAlign,
    bulletList,
    orderedList,
    color,
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

  const handleColorSelect = (selectedColor) => {
    setFormat({ color: selectedColor });
    editor.chain().focus().setColor(selectedColor).run();
    setShowColorPicker(false);
  };

  return (
    <div className={styles.toolbar}>
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

      <div className={styles.divider} />

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

      <div className={styles.colorWrapper}>
        <button
          className={styles.button}
          onClick={() => setShowColorPicker((v) => !v)}
          title="글자 색상"
        >
          <div className={styles.colorIconWrapper}>
            <Image
              src="/icons/editor-coloring.svg"
              alt="글자 색상"
              width={24}
              height={24}
            />
          </div>
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
    </div>
  );
}
