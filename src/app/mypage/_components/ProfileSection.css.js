import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '24px',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  position: 'sticky',
  top: '80px',
  alignSelf: 'flex-start',
  zIndex: 1,
  '@media': {
    'screen and (max-width: 743px)': {
      position: 'static',
    },
  },
});

export const imageWrapper = style({
  position: 'relative',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'visible',
  cursor: 'pointer',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
});

export const nickname = style({
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
});

export const grade = style({
  fontSize: '13px',
  fontWeight: 500,
  color: '#f59e0b',
});

export const introduction = style({
  fontSize: '14px',
  color: '#6b7280',
  textAlign: 'center',
  lineHeight: '1.5',
  marginTop: '4px',
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  width: '100%',
});
export const cameraOverlay = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  border: '1.5px solid #e5e7eb',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
  zIndex: 1,
});
