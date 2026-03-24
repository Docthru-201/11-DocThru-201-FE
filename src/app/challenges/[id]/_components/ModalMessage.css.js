import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const modalContainer = style({
  backgroundColor: 'white',
  borderRadius: '12px',
  border: '2px solid #1f2937', // gray-800
  padding: '40px 24px',
  width: '327px',
  minHeight: '180px', // 최소 높이만 지정하여 여백 불균형 해소
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // 텍스트를 상하 중앙으로
  gap: '32px', // 메시지와 버튼 사이의 일정한 간격
  position: 'relative',
  margin: '0 16px',

  '@media': {
    'screen and (min-width: 768px)': {
      width: '540px',
      padding: '60px 40px',
      minHeight: '220px',
    },
  },
});

export const messageText = style({
  fontSize: '16px',
  fontWeight: 500,
  color: '#1f2937',
  textAlign: 'center',
  lineHeight: '1.6',
  whiteSpace: 'pre-wrap',

  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: '18px',
    },
  },
});

export const confirmButton = style({
  width: '120px',
  height: '48px',
  backgroundColor: '#262626', // neutral-800
  color: 'white',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#404040',
  },
});
// import { style } from "@vanilla-extract/css";

// export const overlay = style({
//   position: "fixed",
//   inset: 0,
//   zIndex: 50,
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
// });

// export const modalContainer = style({
//   position: "relative",
//   margin: "0 16px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   backgroundColor: "#ffffff",
//   border: "2px solid #1f2937",
//   borderRadius: "12px",
//   width: "327px",
//   height: "220px",

//   "@media": {
//     "screen and (min-width: 744px)": {
//       width: "540px",
//       height: "250px",
//     },
//   },
// });

// export const messageText = style({
//   textAlign: "center",
//   whiteSpace: "pre-wrap",
//   fontSize: "16px",
//   fontWeight: 500,
//   color: "#1f2937",

//   "@media": {
//     "screen and (min-width: 744px)": {
//       fontSize: "18px",
//       marginBottom: "8px",
//     },
//   },
// });

// export const confirmButton = style({
//   position: "absolute",
//   bottom: "28px",
//   left: "50%",
//   transform: "translateX(-50%)",
//   width: "120px",
//   height: "48px",
//   borderRadius: "8px",
//   backgroundColor: "#262626",
//   color: "#ffffff",
//   fontSize: "16px",
//   fontWeight: 500,
//   cursor: "pointer",
//   border: "none",
//   transition: "background-color 0.2s ease-in-out",

//   ":hover": {
//     backgroundColor: "#404040",
//   },

//   "@media": {
//     "screen and (min-width: 744px)": {
//       right: "32px",
//       left: "auto",
//       transform: "none",
//     },
//   },
// });
