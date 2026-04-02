import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const title = style({
  marginBottom: '16px', // mb-4
  fontWeight: 600,
  color: '#1f2937', // text-gray-800
});

export const relativeWrapper = style({
  position: 'relative',
});

export const buttonPos = style({
  position: 'absolute',
  top: '12px', // top-3
  right: '16px', // right-4
  zIndex: 10, // 버튼이 iframe 위로 오도록 확실히 지정
});

export const linkBtn = style({
  height: '32px', // h-8
  background: 'none',
  border: 'none',
  color: '#0000FF', // blue
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '14px',
  selectors: {
    '&:hover': {
      color: '#0000CC',
    },
  },
});

export const previewIframe = style({
  width: '100%',
  height: '490px',
  border: 'none', // border-0
});
