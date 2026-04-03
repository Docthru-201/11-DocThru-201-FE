import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';
import { breakpoint } from '@/styles/breakpoints.css';

export const cardClickable = style({
  cursor: 'pointer',
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: vars.space.xl,
  backgroundColor: vars.color.white,
  border: `2px solid ${vars.color.gray[800]}`,
  borderRadius: vars.radius.lg,
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '343px',
  '@media': {
    [breakpoint.md]: {
      maxWidth: '696px',
    },
    [breakpoint.lg]: {
      maxWidth: '996px',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  width: '100%',
});

export const titleBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  width: '100%',
  position: 'relative',
});

// ✅ 메뉴 컨테이너 (relative 기준점)
export const menuContainer = style({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 10,
});

export const editButton = style({
  width: 24,
  height: 24,
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radius.md,
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: vars.color.gray[100],
  },
});

/** 마이페이지 등에서 더보기 버튼만 살짝 작게 */
export const editButtonCompact = style({
  width: 20,
  height: 20,
});

// ✅ 관리자 드롭다운 메뉴 스타일
export const adminDropdownMenuCompact = style({
  top: '24px',
});

export const adminDropdownMenu = style({
  position: 'absolute',
  top: '28px',
  right: 0,
  width: '120px',
  backgroundColor: vars.color.white,
  border: `1px solid ${vars.color.gray[200]}`,
  borderRadius: vars.radius.md,
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 20,
});

export const adminDropdownButton = style({
  padding: '10px 16px',
  fontSize: vars.fontSize.sm,
  textAlign: 'center',
  color: vars.color.gray[700],
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: vars.color.gray[50],
  },
  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${vars.color.gray[100]}`,
    },
  },
});

export const chipsRow = style({
  display: 'flex',
  gap: vars.space.sm,
  flexWrap: 'wrap',
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.gray[700],
  margin: 0,
});

export const divider = style({
  height: '1px',
  width: '100%',
  backgroundColor: vars.color.gray[200],
  border: 'none',
  margin: 0,
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.lg,
  width: '100%',
});

export const metaRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: vars.space.md,
});

export const metaLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.md,
  flexWrap: 'wrap',
});

export const metaItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.xs,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.regular,
  color: vars.color.gray[600],
});
// import { style } from '@vanilla-extract/css';
// import { vars } from '@/styles/tokens.css';
// import { breakpoint } from '@/styles/breakpoints.css';

// export const card = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
//   padding: vars.space.xl,
//   backgroundColor: vars.color.white,
//   border: `2px solid ${vars.color.gray[800]}`,
//   borderRadius: vars.radius.lg,
//   boxSizing: 'border-box',
//   width: '100%',
//   maxWidth: '343px',
//   '@media': {
//     [breakpoint.md]: {
//       maxWidth: '696px',
//     },
//     [breakpoint.lg]: {
//       maxWidth: '996px',
//     },
//   },
// });

// export const header = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '14px',
//   width: '100%',
// });

// export const titleBlock = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: vars.space.lg,
//   width: '100%',
//   position: 'relative',
// });

// export const titleRow = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '14px',
//   width: '100%',
// });

// export const editButton = style({
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   width: 24,
//   height: 24,
//   padding: 0,
//   border: 'none',
//   background: 'transparent',
//   cursor: 'pointer',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: vars.radius.md,
// });

// export const chipsRow = style({
//   display: 'flex',
//   gap: vars.space.sm,
//   flexWrap: 'wrap',
// });

// export const title = style({
//   fontSize: vars.fontSize.xl,
//   fontWeight: vars.fontWeight.semibold,
//   lineHeight: vars.lineHeight.normal,
//   color: vars.color.gray[700],
//   margin: 0,
// });

// export const divider = style({
//   height: '1px',
//   width: '100%',
//   backgroundColor: vars.color.gray[200],
//   border: 'none',
//   margin: 0,
// });

// export const footer = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: vars.space.lg,
//   width: '100%',
// });

// export const metaRow = style({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   flexWrap: 'wrap',
//   gap: vars.space.md,
// });

// export const metaLeft = style({
//   display: 'flex',
//   alignItems: 'center',
//   gap: vars.space.md,
//   flexWrap: 'wrap',
// });

// export const metaItem = style({
//   display: 'flex',
//   alignItems: 'center',
//   gap: vars.space.xs,
//   fontSize: vars.fontSize.xs,
//   fontWeight: vars.fontWeight.regular,
//   color: vars.color.gray[600],
// });
