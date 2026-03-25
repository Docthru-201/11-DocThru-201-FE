import { style, styleVariants } from '@vanilla-extract/css';

export const itemContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #e5e7eb', // border-gray-200
  backgroundColor: 'transparent',
  padding: '16px 0', // py-4
});

// 왼쪽 영역 (순위 + 유저 정보)
export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px', // gap-3
});

const rankBadgeBase = style({
  display: 'flex',
  width: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '16px', // rounded-2xl
  padding: '4px 12px', // px-3 py-1
  fontSize: '14px',
  fontWeight: 500,
});

export const rankBadgeVariants = styleVariants({
  highlight: [rankBadgeBase, { backgroundColor: '#1f2937', color: '#facc15' }], // gray-800, yellow-400
  default: [rankBadgeBase, { backgroundColor: '#1f2937', color: '#ffffff' }], // gray-800, white
});

export const userProfile = style({
  borderRadius: '50%',
});

export const userNameText = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#1f2937', // gray-800
});

export const userRoleText = style({
  fontSize: '12px',
  color: '#6b7280', // gray-500
});

// 오른쪽 영역 (좋아요 + 링크)
export const rightSection = style({
  display: 'flex',
  width: '210px',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px', // gap-4
});

export const likeCountGroup = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px', // text-lg
  fontWeight: 500,
  color: '#6b7280', // gray-500
});

export const workLink = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px', // gap-1
  fontSize: '16px', // text-base
  fontWeight: 400,
  color: '#1f2937', // gray-800
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  ':hover': {
    color: '#000000',
  },
});
