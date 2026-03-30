import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const container = style({
  flex: 1,
  paddingBottom: vars.space.xl,
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.gray[900],
  lineHeight: vars.lineHeight.normal,
  marginBottom: vars.space.sm,
});

export const tagRow = style({
  display: 'flex',
  gap: vars.space.sm,
  marginBottom: vars.space.lg,
});

export const tag = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `2px ${vars.space.sm}`,
  borderRadius: vars.radius.full,
  fontSize: vars.fontSize['2xs'],
  fontWeight: vars.fontWeight.medium,
  backgroundColor: vars.color.brand.point,
  color: vars.color.gray[900],
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.sm,
  marginBottom: vars.space.xl,
});

export const avatar = style({
  width: '32px',
  height: '32px',
  borderRadius: vars.radius.full,
  objectFit: 'cover',
  backgroundColor: vars.color.brand.point,
  flexShrink: 0,
});

export const nickname = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.gray[700],
});

export const likeCount = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
});

export const likeButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  padding: `${vars.space.xs} ${vars.space.sm}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.gray[200]}`,
  backgroundColor: vars.color.white,
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[600],
  cursor: 'pointer',
  transition: `all ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: vars.color.gray[400],
    },
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
  },
});

export const contentBox = style({
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.md,
  padding: vars.space.xl,
  minHeight: '200px',
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[800],
  fontSize: vars.fontSize.base,
});
export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: vars.space.lg,
});
