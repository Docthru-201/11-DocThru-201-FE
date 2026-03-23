import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#FFFFFF',
});

export const main = style({
  width: '100%',
  maxWidth: '996px', // 피그마 기준 중앙 정렬 폭
  margin: '0 auto',
  padding: `40px 20px 80px`, // 상단 40px, 좌우 20px, 하단 80px 여백
  display: 'flex',
  flexDirection: 'column',
  gap: '24px', // 요소들 사이의 세로 간격
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333333',
  marginBottom: '8px',
});

export const cardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px', // 카드들 사이의 간격
  marginTop: '12px',
});

// 검색창이나 탭 메뉴를 감싸는 영역이 필요할 때 사용하세요.
export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});
