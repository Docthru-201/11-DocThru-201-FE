import { style } from '@vanilla-extract/css';

/* 1. 전체 화면 레이아웃 (120rem x 67.5rem 기준) */
export const container = style({
  width: '100%',
  // maxWidth: '120rem',
  minHeight: '100vh',
  margin: '0 auto',
  paddingTop: 'clamp(2rem, 8vw, 7.5rem)',
  paddingBottom: 'clamp(2rem, 8vw, 7.5rem)',
  paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
  paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
  backgroundColor: '#f4f4f4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
});

/* 2. 로고 영역 */
export const logoBlock = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2.5rem', // 40px (팀원 가이드 반영)
  textDecoration: 'none',
  gap: '0.8rem', // 아이콘과 텍스트 사이 적절한 간격
});

export const logo = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.9rem',

  // 주신 텍스트 스타일 그대로 반영
  color: '#525252', // var(--gray-gray600)
  textAlign: 'justify',
  fontFamily: 'Quantico, sans-serif',
  fontSize: '3.6rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '0.065rem',

  // 상세 폰트 설정
  fontFeatureSettings: "'liga' off, 'clig' off",
  textDecoration: 'none',
});
/* 3. 폼 전체 */
export const form = style({
  width: '100%',
  maxWidth: '32.38rem',
  display: 'flex',
  flexDirection: 'column',
  // 인풋 그룹 간의 간격 (인풋과 다음 제목 사이의 gap: 1.5rem)
  gap: '1.5rem',
});

/* 4. 인풋 그룹 (제목 + 인풋창) */
export const inputGroup = style({
  display: 'flex',
  flexDirection: 'column',
  // 제목과 인풋창 사이의 gap: 0.5rem
  gap: '0.5rem',
  alignSelf: 'stretch',
});

/* 5. 라벨 (제목) */
export const label = style({
  color: '#171717', // gray900
  fontFamily:
    'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
  fontSize: '0.875rem', // 14px
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

/* 6. 인풋창 스타일 (전달해주신 상세 수치 반영) */
export const input = style({
  display: 'flex',
  width: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  height: '3rem', // 48px
  padding: '0.6875rem 1.25rem',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.75rem', // 12px
  border: '1px solid #E5E5E5', // gray200
  backgroundColor: '#FFFFFF',
  fontSize: '1rem',
  outline: 'none',
  selectors: {
    '&:focus': {
      borderColor: '#262626',
    },
  },
});

export const passwordField = style({
  position: 'relative',
  width: '100%',
  minWidth: 0,
  alignSelf: 'stretch',
  boxSizing: 'border-box',
});

export const inputWithToggle = style({
  paddingRight: 'calc(20px + 22px + 8px)',
});

export const passwordToggle = style({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  borderRadius: '0.25rem',
  color: '#A3A3A3',
  selectors: {
    '&:focus-visible': {
      outline: '2px solid #262626',
      outlineOffset: 2,
    },
  },
});

/* 8. 가입하기 버튼 (전달해주신 상세 수치 반영) */
export const submitButton = style({
  display: 'flex',
  height: '3rem',
  padding: '0.875rem 7.875rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.5rem',
  backgroundColor: '#262626', // brand-black
  color: '#FFFFFF',
  border: 'none',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      backgroundColor: '#E5E5E5',
      cursor: 'not-allowed',
    },
  },
});

/* 구글로 시작하기 (로그인 페이지와 동일) */
export const googleButton = style({
  display: 'flex',
  height: '3rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  alignSelf: 'stretch',
  borderRadius: '12px',
  border: '1px solid #E5E5E5',
  backgroundColor: '#FFFFFF',
  color: '#171717',
  fontSize: '1rem',
  fontWeight: '400',
  cursor: 'pointer',
  marginTop: '-6px',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#F9F9F9',
  },
});

/* 9. 하단 로그인 영역 */
export const footer = style({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'center',
  gap: '0.5rem',
  fontSize: '0.9rem',
  color: '#666',
});

export const loginLink = style({
  background: 'none',
  border: 'none',
  color: '#262626',
  fontWeight: '700',
  cursor: 'pointer',
  textDecoration: 'underline',
});

/* 10. 에러 메시지 */
export const errorMessage = style({
  color: '#ff4d4f',
  fontSize: '0.85rem',
  marginTop: '-0.2rem', // 인풋창과 너무 멀지 않게 조절
});
