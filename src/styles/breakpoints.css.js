// 미디어 쿼리에서는 CSS 변수(var(--xxx)) 사용 불가
export const breakpoint = {
  sm: '(min-width: 480px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  // 작은 화면만 타깃 (sm 미만 = 모바일)
  maxSm: '(max-width: 479px)',
};
