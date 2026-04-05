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
  width: '100%',
  margin: '0 auto',
  overflow: 'hidden',
  height: 'auto',
  objectFit: 'cover',
  '@media': {
    'screen and (max-width: 743px)': {
      width: '375px',
      height: '206px',
      maxWidth: '100%',
      margin: '0 auto',
    },
  },
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
