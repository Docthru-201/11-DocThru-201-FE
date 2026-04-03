// TiptapEditor.css.ts
import { globalStyle } from '@vanilla-extract/css';

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
