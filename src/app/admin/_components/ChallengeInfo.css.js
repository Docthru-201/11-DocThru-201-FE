import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '16px', // gap-4
});

export const titleWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
});

export const titleText = style({
  fontSize: '20px', // text-xl
  fontWeight: 600,
  color: '#1f2937', // text-gray-800
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '24px', // md:text-2xl
    },
  },
});

export const chipWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px', // gap-2
});

export const descriptionText = style({
  fontSize: '14px', // text-sm
  fontWeight: 500,
  color: '#374151', // text-gray-700
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '16px', // md:text-base
    },
  },
});

export const infoRow = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  gap: '4px', // gap-1
  fontSize: '13px',
  fontWeight: 400,
  color: '#4b5563', // text-gray-600
});
