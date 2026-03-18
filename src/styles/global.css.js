import { globalStyle } from '@vanilla-extract/css';

import { vars } from './tokens.css';

// Global styling
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.gray[400]}`,
  outlineOffset: '2px',
});

globalStyle('input::placeholder, textarea::placeholder', {
  color: vars.color.gray[400],
});

globalStyle('hr', {
  border: 0,
  borderTop: `1px solid ${vars.color.gray[200]}`,
});

globalStyle('::selection', {
  backgroundColor: vars.color.gray[200],
  color: vars.color.gray[800],
});

globalStyle('::-webkit-scrollbar', {
  width: vars.space.sm,
  height: vars.space.sm,
});

globalStyle('::-webkit-scrollbar-track', {
  backgroundColor: vars.color.gray[100],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb', {
  backgroundColor: vars.color.gray[300],
  borderRadius: vars.radius.sm,
});

globalStyle('::-webkit-scrollbar-thumb:hover', {
  backgroundColor: vars.color.gray[400],
});
