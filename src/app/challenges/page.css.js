import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const page = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.color.gray[50],
  paddingTop: '24px',
});

export const main = style({
  flex: 1,
  width: '100%',
  maxWidth: '996px',
  margin: '0 auto',
  padding: `0 16px ${vars.space['2xl']}`,
  boxSizing: 'border-box',
  '@media': {
    [breakpoint.md]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
    [breakpoint.lg]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.md,
  padding: '8px 0',
  marginBottom: '16px',
});

export const headerMy = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.md,
  paddingTop: 24,
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize['lg'],
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 1,
  color: vars.color.gray[800],
});

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  marginBottom: 20,
});

export const filterSlot = style({
  position: 'relative',
  flexShrink: 0,
});

export const searchField = style({
  flex: 1,
  minWidth: 0,
  maxWidth: 'none',
});

export const feedback = style({
  margin: 0,
  padding: `${vars.space.lg} 0`,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  textAlign: 'center',
});

export const emptyState = style({
  margin: 0,
  padding: `${vars.space['2xl']} 0`,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[600],
  textAlign: 'center',
});

export const listSkeletonWrap = style({
  marginBottom: 40,
});

export const cardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  marginBottom: 40,
});

export const paginationWrap = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const tabBar = style({
  marginBottom: '24px',
  borderBottom: `1px solid ${vars.color.gray[300]}`,
});
