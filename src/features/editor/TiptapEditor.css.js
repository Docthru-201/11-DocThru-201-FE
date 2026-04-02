// TiptapEditor.css.ts
import { globalStyle, style } from '@vanilla-extract/css';

export const editorBody = style({
  position: 'relative',
  minHeight: 'min(60vh, 862px)',
  cursor: 'text',
});

export const editorPlaceholder = style({
  position: 'absolute',
  left: 0,
  top: 0,
  margin: 0,
  pointerEvents: 'none',
  color: '#a3a3a3',
  fontSize: '16px',
  lineHeight: 1.6,
  zIndex: 0,
});

globalStyle(`${editorBody} .ProseMirror`, {
  position: 'relative',
  zIndex: 1,
  minHeight: 'min(60vh, 862px)',
  cursor: 'text',
  fontSize: '16px',
  lineHeight: 1.6,
  color: '#262626',
  outline: 'none',
});

globalStyle('.ProseMirror ul', {
  listStyleType: 'disc',
  paddingLeft: '1.5rem',
});

globalStyle('.ProseMirror ol', {
  listStyleType: 'decimal',
  paddingLeft: '1.5rem',
});

globalStyle('.ProseMirror li', {
  margin: '0.25rem 0',
});
