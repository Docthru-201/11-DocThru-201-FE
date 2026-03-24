import { style, styleVariants } from '@vanilla-extract/css';

export const cardWrapper = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '16px',
  border: '1px solid #f3f4f6',
  backgroundColor: '#ffffff',
  fontFamily: 'var(--font-pretendard)',
  width: '100%',
  height: 'auto',
});

export const innerContainer = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '12px 16px',

  '@media': {
    'screen and (min-width: 744px)': {
      padding: '24px 16px',
    },
  },
});

export const infoRow = style({
  display: 'flex',
  height: '24px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '13px',
  color: '#374151',
});

export const infoItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const buttonGroup = style({
  display: 'flex',
  width: '100%',
  gap: '8px',
  flexDirection: 'row',

  '@media': {
    'screen and (min-width: 744px)': {
      flexDirection: 'column',
    },
  },
});

const baseButton = style({
  display: 'flex',
  height: '40px',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
  border: '2px solid transparent',
  transition: 'all 0.2s ease-in-out',
});

export const linkButton = style([
  baseButton,
  {
    backgroundColor: 'var(--color-brand-yellow)',
    color: '#000',
    border: '2px solid #000',
    ':hover': {
      filter: 'brightness(0.95)',
    },
  },
]);

export const actionButtonVariants = styleVariants({
  active: [
    baseButton,
    {
      backgroundColor: 'var(--color-gray-800)',
      borderColor: '#000',
      color: '#fff',
      ':hover': {
        backgroundColor: '#000',
      },
    },
  ],
  disabled: [
    baseButton,
    {
      backgroundColor: '#e5e7eb',
      borderColor: '#e5e7eb',
      color: '#6b7280',
      cursor: 'not-allowed',
    },
  ],
});
