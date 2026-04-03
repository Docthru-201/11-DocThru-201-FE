import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  transition: 'opacity 0.3s ease-in-out',
});

export const visibleOn = style({ opacity: 1 });
export const visibleOff = style({ opacity: 0 });

export const messageContainer = style({
  display: 'flex',
  height: 'fit-content',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000',
  border: '1px solid #1f2937',
  borderRadius: '32px',
  padding: '12px 24px',
});

export const textStyle = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff',
});
