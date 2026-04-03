import { style } from '@vanilla-extract/css';

export const sectionContainer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const title = style({
  marginBottom: '16px',
  fontWeight: 600,
  color: '#1f2937',
});

export const relativeWrapper = style({
  position: 'relative',
});

export const buttonPos = style({
  position: 'absolute',
  top: '12px',
  right: '16px',
  zIndex: 10,
});

export const linkBtn = style({
  height: '32px',
  background: 'none',
  border: 'none',
  color: '#0000FF',
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
  border: 'none',
});
