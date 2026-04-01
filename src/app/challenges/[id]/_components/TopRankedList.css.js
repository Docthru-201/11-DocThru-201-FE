import { style, styleVariants, globalStyle } from '@vanilla-extract/css';

export const sectionContainer = style({
  width: '100%',
  maxWidth: 'none',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

export const sliderTrack = style({
  display: 'flex',
  gap: '12px',
  transition: 'transform 0.5s ease-in-out',
});

const cardBase = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '240px',
  flexShrink: 0,
  width: '92%',
  borderRadius: '16px',
  border: '2px solid #e5e7eb',
  backgroundColor: '#f9fafb',
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
  // '@media': {
  //   'screen and (max-width: 767px)': {
  //     width: '88%',
  //   },
  // },
});

export const cardVariants = styleVariants({
  single: [cardBase, { width: '100%', opacity: 1 }],
  active: [cardBase, { opacity: 1 }],
  inactive: [cardBase, { opacity: 0.3 }],
});

export const badge = style({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  borderTopLeftRadius: '16px',
  borderBottomRightRadius: '16px',
  backgroundColor: '#000000',
  padding: '8px 20px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#ffffff',
});

export const header = style({
  margin: '12px',
  padding: '40px 16px 0 16px',
});

export const authorGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
});

export const userInfoLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  overflow: 'hidden',
  minWidth: 0,
});

export const userAvatar = style({
  borderRadius: '50%',
  flexShrink: 0,
});

export const authorName = style({
  fontSize: '14px',
  fontWeight: 500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const authorGrade = style({
  fontSize: '12px',
  color: '#6b7280',
  flexShrink: 0,
});

export const likeCountBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '14px',
  color: '#4b5563',
  flexShrink: 0,
});

export const createdAtText = style({
  fontSize: '12px',
  color: '#9ca3af',
  whiteSpace: 'nowrap',
});

export const contentArea = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: '0 24px',
  '@media': {
    'screen and (max-width: 767px)': {
      padding: '0 8px',
    },
  },
});

export const hr = style({
  marginBottom: '8px',
  border: 'none',
  borderTop: '1px solid #d1d5db',
});

const contentTextBase = style({
  fontSize: '14px',
  lineHeight: 1.6,
  color: '#374151',
  whiteSpace: 'pre-line',
});

export const contentTextVariants = styleVariants({
  clamped: [
    contentTextBase,
    {
      display: '-webkit-box',
      WebkitBoxOrientation: 'vertical',
      overflow: 'hidden',
      width: '100%',
      '@media': {
        'screen and (min-width: 1024px)': {
          height: '179px',
        },
        'screen and (min-width: 768px) and (max-width: 1023px)': {
          height: '188px',
        },
        'screen and (max-width: 767px)': {
          height: '220px',
        },
      },
    },
  ],
  expanded: [
    contentTextBase,
    {
      width: '100%',
      height: 'auto',
    },
  ],
});

globalStyle(`${contentTextVariants.clamped} *`, {
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
});

globalStyle(`${contentTextVariants.expanded} *`, {
  wordBreak: 'break-word',
  overflowWrap: 'break-word',
});

export const moreButtonWrapper = style({
  marginTop: 'auto',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
});

export const moreButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '14px',
  color: '#4b5563',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const nextButtonWrapper = style({
  position: 'absolute',
  top: '50%',
  right: '-13px',
  zIndex: 20,
  transform: 'translateY(-50%)',
});
