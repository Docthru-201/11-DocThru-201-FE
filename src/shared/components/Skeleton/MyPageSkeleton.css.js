import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/tokens.css';

/** ProfileSection 80px 아바타 · Stats 18px 제목 · 28px 숫자 · 필터 pill */
export const profileCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.md,
  padding: '24px',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
});

export const avatar = style({
  width: '80px',
  height: '80px',
});

export const nicknameLine = style({
  height: '20px',
  width: '108px',
});

export const gradeLine = style({
  height: vars.fontSize.sm,
  width: '72px',
});

export const introLine = style({
  height: vars.fontSize.sm,
  width: '100%',
});

export const introLineShort = style({
  height: vars.fontSize.sm,
  width: '70%',
});

export const sectionCard = style({
  width: '100%',
  borderRadius: '12px',
  border: '2px solid #1f2937',
  backgroundColor: '#ffffff',
  padding: '24px',
  boxSizing: 'border-box',
});

export const sectionTitle = style({
  height: '18px',
  width: '92px',
  marginBottom: '20px',
});

export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
});

export const statCell = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#f9fafb',
});

export const statValue = style({
  height: '28px',
  width: '40px',
});

export const statLabel = style({
  height: vars.fontSize.sm,
  width: '80px',
});

export const workHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px',
  gap: vars.space.sm,
});

export const workTitleSk = style({
  height: '18px',
  width: '100px',
  flexShrink: 0,
});

export const filterRow = style({
  display: 'flex',
  gap: vars.space.sm,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
});

export const filterPill = style({
  height: '30px',
  width: '52px',
  borderRadius: '20px',
});

export const filterPillMid = style({
  height: '30px',
  width: '68px',
  borderRadius: '20px',
});

export const filterPillWide = style({
  height: '30px',
  width: '76px',
  borderRadius: '20px',
});

export const workCard = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '8px',
  border: `1px solid ${vars.color.gray[200]}`,
});

export const workTitleLine = style({
  height: vars.fontSize.sm,
  flex: 1,
  maxWidth: '72%',
});

export const workMeta = style({
  height: vars.fontSize['2xs'],
  width: '48px',
  flexShrink: 0,
});

export const workList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const accountHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
});

export const editBtnSk = style({
  height: '36px',
  width: '80px',
  borderRadius: '8px',
});

export const fieldList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const fieldLabel = style({
  height: vars.fontSize['2xs'],
  width: '40px',
});

export const fieldValue = style({
  height: '40px',
  width: '100%',
  borderRadius: '8px',
});
