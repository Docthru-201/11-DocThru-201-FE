import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // 중앙 정렬
  backgroundColor: '#ffffff',
  minHeight: '100vh',
  boxSizing: 'border-box',
  paddingBottom: '10rem',
  marginTop: '24px',

  '@media': {
    'screen and (max-width: 743px)': {
      marginTop: '16px',
    },
  },
});

export const innerWrapper = style({
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '32px',

  '@media': {
    'screen and (max-width: 1199px)': {
      maxWidth: '744px',
      padding: '32px 24px', // 테블릿 여백 조정
    },
    'screen and (max-width: 743px)': {
      maxWidth: '375px',
      padding: '24px 16px', // 모바일 여백 조정
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const idText = style({
  fontWeight: 500,
  color: '#374151',
});

export const navGroup = style({
  display: 'flex',
  gap: '10px',
});

export const navBtn = style({
  cursor: 'pointer',
  selectors: {
    '&:disabled': {
      opacity: 0.3,
      cursor: 'not-allowed',
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '12px',
  marginTop: '40px',
  paddingBottom: '60px',

  '@media': {
    'screen and (max-width: 743px)': {
      justifyContent: 'center', // 모바일에서는 버튼 중앙 정렬 제안
      width: '100%',
    },
  },
});

export const declineBtn = style({
  color: '#f87171',
  borderColor: '#fca5a5',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '600',
});

export const approveBtn = style({
  backgroundColor: '#1a1a1a',
  color: '#ffffff',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '600',
});

export const previewIframe = style({
  marginTop: '32px',
  width: '100%',
  border: '0',
  height: 'calc(100vh - 200px)',
  borderRadius: '4px',
});

export const modalFormContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '20px',
});

export const modalFormLabel = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#4b5563',
  textAlign: 'left',
});

export const modalTextarea = style({
  width: '100%',
  height: '140px',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '14px',
  resize: 'none',
  backgroundColor: '#f9fafb',
  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#111827',
    },
  },
});

export const modalSubmitWrapper = style({
  marginTop: '24px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const actionBtn = style({
  width: '100%',
  '@media': {
    'screen and (max-width: 743px)': {
      width: '100%', // 모바일에서는 꽉 차게
    },
    'screen and (min-width: 744px)': {
      width: '158px', // 테블릿/데스크탑 고정폭
    },
  },
});
// import { style } from '@vanilla-extract/css';

// export const pageContainer = style({
//   marginTop: '16px',
//   paddingBottom: '10rem',
//   '@media': {
//     'screen and (min-width: 768px)': {
//       marginTop: '24px',
//     },
//   },
// });

// export const innerWrapper = style({
//   width: '100%',
//   maxWidth: '1200px',
//   backgroundColor: '#ffffff',
//   borderRadius: '8px',
//   display: 'flex',
//   flexDirection: 'column',
//   boxSizing: 'border-box',
//   padding: '32px', // 흰색 박스 내부 여백

//   '@media': {
//     'screen and (max-width: 375px)': {
//       padding: '24px 16px',
//     },
//   },
// });

// export const header = style({
//   display: 'flex',
//   justifyContent: 'space-between',
// });

// export const idText = style({
//   fontWeight: 500,
//   color: '#374151',
// });

// export const navGroup = style({
//   display: 'flex',
//   gap: '10px',
// });

// export const navBtn = style({
//   cursor: 'pointer',
//   selectors: {
//     '&:disabled': {
//       opacity: 0.3,
//       cursor: 'not-allowed',
//     },
//   },
// });

// export const buttonWrapper = style({
//   display: 'flex',
//   justifyContent: 'flex-end',
//   gap: '12px',
//   marginTop: '40px',
//   paddingBottom: '60px',
// });

// export const declineBtn = style({
//   color: '#f87171',
//   borderColor: '#fca5a5',
//   padding: '12px 24px',
//   fontSize: '16px',
//   fontWeight: '600',
// });

// export const approveBtn = style({
//   backgroundColor: '#1a1a1a',
//   color: '#ffffff',
//   padding: '12px 24px',
//   fontSize: '16px',
//   fontWeight: '600',
// });

// export const previewIframe = style({
//   marginTop: '32px',
//   width: '100%',
//   border: '0',
//   height: 'calc(100vh - 200px)',
// });

// export const modalFormContent = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '12px',
//   marginTop: '20px',
// });

// export const modalFormLabel = style({
//   fontSize: '14px',
//   fontWeight: '600',
//   color: '#4b5563',
//   textAlign: 'left',
// });

// export const modalTextarea = style({
//   width: '100%',
//   height: '140px',
//   padding: '12px',
//   borderRadius: '8px',
//   border: '1px solid #e5e7eb',
//   fontSize: '14px',
//   resize: 'none',
//   backgroundColor: '#f9fafb',
//   selectors: {
//     '&:focus': {
//       outline: 'none',
//       borderColor: '#111827',
//     },
//   },
// });

// export const modalSubmitWrapper = style({
//   marginTop: '24px',
//   display: 'flex',
//   justifyContent: 'center',
//   width: '100%',
// });

// export const actionBtn = style({
//   width: '100%',
//   '@media': {
//     'screen and (min-width: 768px)': {
//       width: '158px',
//     },
//   },
// });
