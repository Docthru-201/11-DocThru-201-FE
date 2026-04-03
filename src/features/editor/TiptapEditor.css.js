// TiptapEditor.css.ts
import { globalStyle, style } from '@vanilla-extract/css';

export const editorBody = style({
  position: 'relative',
  minHeight: 'min(60vh, 862px)',
  cursor: 'text',
  marginTop: '16px',
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

globalStyle('.ProseMirror h1', {
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: '1rem 0',
});

globalStyle('.ProseMirror h2', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  margin: '0.75rem 0',
});

globalStyle('.ProseMirror h3', {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  margin: '0.5rem 0',
});

globalStyle('.ProseMirror blockquote', {
  borderLeft: '3px solid #ccc',
  paddingLeft: '16px',
  color: '#666',
  margin: '8px 0',
});

globalStyle('.ProseMirror code', {
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  padding: '2px 6px',
  fontFamily: 'monospace',
  fontSize: '0.9em',
});

globalStyle('.ProseMirror pre', {
  backgroundColor: '#1e1e1e',
  color: '#fff',
  borderRadius: '8px',
  padding: '16px',
  overflowX: 'auto',
  margin: '8px 0',
});

globalStyle('.ProseMirror pre code', {
  backgroundColor: 'transparent',
  padding: 0,
  color: 'inherit',
});
