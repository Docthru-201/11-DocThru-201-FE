import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const chip = style({
  width: '68px',
  height: '24px',
});

export const titleLine = style({
  height: '24px',
  width: '100%',
});

export const titleLineMid = style({
  height: vars.fontSize.base,
  width: '88%',
});

export const titleLineShort = style({
  height: vars.fontSize.sm,
  width: '34%',
});

export const authorRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginTop: '14px',
});

export const authorAvatar = style({
  width: '32px',
  height: '32px',
});

export const authorName = style({
  height: vars.fontSize.sm,
  width: '96px',
});

export const rightCard = style({
  width: '285px',
  flexShrink: 0,
  marginTop: '24px',
  padding: '24px 16px',
  backgroundColor: '#ffffff',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minHeight: '176px',
  borderRadius: '16px',
  border: '2px solid #f5f5f5',
  '@media': {
    'screen and (max-width: 743px)': {
      width: '100%',
      marginTop: '8px',
    },
  },
});

export const rightLine = style({
  height: vars.fontSize.sm,
  width: '100%',
});

export const rightLineShort = style({
  height: '36px',
  width: '100%',
});

export const leftStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
  minWidth: 0,
  paddingTop: '24px',
});

/** ListRow: minHeight 47px, 배지 51×21 */
export const rankingRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  minHeight: '47px',
  padding: `${vars.space.sm} 0`,
  boxSizing: 'border-box',
  borderBottom: `1px solid ${vars.color.gray[200]}`,
});

export const rankBadge = style({
  width: '51px',
  height: '21px',
  flexShrink: 0,
  borderRadius: vars.radius.xl,
});

export const rowAvatar = style({
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

export const rowInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  flex: 1,
  minWidth: 0,
});

export const rowName = style({
  height: vars.fontSize.sm,
  width: '72%',
});

export const rowRole = style({
  height: vars.fontSize['2xs'],
  width: '44px',
});

export const rowRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  flexShrink: 0,
});

export const rowLike = style({
  width: '36px',
  height: vars.fontSize.sm,
});

export const rowCta = style({
  width: '76px',
  height: '22px',
});

export const headerBarShort = style({
  height: vars.fontSize.md,
  width: '88px',
});

export const headerBarNav = style({
  height: vars.fontSize.md,
  width: '104px',
});
