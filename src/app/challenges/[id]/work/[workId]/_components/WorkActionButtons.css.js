import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

export const wrapper = style({
  position: 'relative',
  flexShrink: 0,
});

export const triggerButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: vars.radius.md,
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.color.gray[600],
  fontSize: vars.fontSize.lg,
  cursor: 'pointer',
  transition: `background-color ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[100],
    },
  },
});

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  right: 0,
  marginTop: vars.space.xs,
  minWidth: '120px',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.md,
  zIndex: vars.zIndex.dropdown,
  overflow: 'hidden',
});

export const dropdownItem = style({
  display: 'block',
  width: '100%',
  padding: `${vars.space.sm} ${vars.space.lg}`,
  textAlign: 'center',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[700],
  cursor: 'pointer',
  transition: `background-color ${vars.transition.duration.fast} ${vars.transition.timing.ease}`,
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.gray[50],
    },
    '&:disabled': {
      opacity: Number(vars.opacity.disabled),
      cursor: 'not-allowed',
    },
  },
});

export const dropdownItemDanger = style([
  dropdownItem,
  {
    color: vars.color.semantic.error,
  },
]);
