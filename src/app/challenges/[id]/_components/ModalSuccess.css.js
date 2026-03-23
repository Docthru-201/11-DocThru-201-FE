import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 50,
  display: 'flex',
  alignItems: 'end', // items-end
  justifyContent: 'center',
  paddingBottom: '40px', // pb-10
  pointerEvents: 'none', // 클릭 방해 방지 (선택 사항)
  transition: 'opacity 0.3s ease-in-out',
});

// visible 상태에 따른 투명도 제어용 클래스
export const visibleOn = style({
  opacity: 1,
});

export const visibleOff = style({
  opacity: 0,
});

export const messageContainer = style({
  display: 'flex',
  height: 'fit-content',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000', // bg-black
  border: '1px solid #1f2937', // border-gray-800
  borderRadius: '32px', // rounded-4xl (대략 32px~40px)
  padding: '8px 16px', // py-2 px-4
});

export const textStyle = style({
  fontSize: '14px', // text-sm
  fontWeight: 500,
  color: '#ffffff',
});
