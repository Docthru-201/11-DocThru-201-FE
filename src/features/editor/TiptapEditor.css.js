// TiptapEditor.css.ts
import { globalStyle } from '@vanilla-extract/css';

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
