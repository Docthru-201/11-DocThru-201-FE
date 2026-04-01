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
});

export const imageWrapper = style({
  position: 'relative',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
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
});
