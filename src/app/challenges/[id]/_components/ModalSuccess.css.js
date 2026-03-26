import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 9999, // 최상단 레이어 보장
  display: 'flex',
  alignItems: 'center', // 화면 중앙 배치 (확인이 가장 확실함)
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.3)', // 배경을 살짝 어둡게 처리
  transition: 'opacity 0.3s ease-in-out',
  // pointerEvents: 'none'은 삭제했습니다.
});

export const visibleOn = style({ opacity: 1 });
export const visibleOff = style({ opacity: 0 });

export const messageContainer = style({
  display: 'flex',
  height: 'fit-content',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#000000', // 기존 블랙 배경
  border: '1px solid #1f2937', // 기존 그레이 테두리
  borderRadius: '32px',
  padding: '12px 24px', // 가독성을 위해 패딩 약간 조절
});

export const textStyle = style({
  fontSize: '14px',
  fontWeight: 500,
  color: '#ffffff', // 흰색 텍스트
});
// import { style } from '@vanilla-extract/css';

// export const overlay = style({
//   position: 'fixed',
//   inset: 0,
//   zIndex: 9999, // 다른 요소보다 무조건 위에 있도록 설정
//   display: 'flex',
//   alignItems: 'center', // 중앙 배치로 변경하여 시각적 확인 용이하게 함
//   justifyContent: 'center',
//   backgroundColor: 'rgba(0, 0, 0, 0.4)', // 배경을 어둡게 하여 모달 강조
//   transition: 'opacity 0.3s ease-in-out',
//   // pointerEvents: 'none' 은 삭제했습니다.
// });

// export const visibleOn = style({ opacity: 1 });
// export const visibleOff = style({ opacity: 0 });

// export const messageContainer = style({
//   display: 'flex',
//   padding: '16px 32px',
//   backgroundColor: '#000000',
//   borderRadius: '32px',
//   border: '1px solid #333',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
// });

// export const textStyle = style({
//   fontSize: '16px',
//   fontWeight: 600,
//   color: '#ffffff',
// });
// // import { style } from '@vanilla-extract/css';

// export const overlay = style({
//   position: 'fixed',
//   inset: 0,
//   zIndex: 9999, // 최상단으로 올림
//   display: 'flex',
//   alignItems: 'center', // 아래(end) 말고 중앙(center)으로 변경해서 확인
//   justifyContent: 'center',
//   backgroundColor: 'rgba(255, 0, 0, 0.5)', // 확인용: 빨간색 반투명 배경
//   transition: 'opacity 0.3s ease-in-out',
//   // pointerEvents: 'none', <-- 반드시 삭제!
// });
// // export const overlay = style({
// //   position: 'fixed',
// //   inset: 0,
// //   zIndex: 50,
// //   display: 'flex',
// //   alignItems: 'end', // items-end
// //   justifyContent: 'center',
// //   paddingBottom: '40px', // pb-10
// //   // pointerEvents: 'none', // 클릭 방해 방지 (선택 사항)
// //   transition: 'opacity 0.3s ease-in-out',
// // });

// // visible 상태에 따른 투명도 제어용 클래스
// export const visibleOn = style({
//   opacity: 1,
// });

// export const visibleOff = style({
//   opacity: 0,
// });

// export const messageContainer = style({
//   display: 'flex',
//   height: 'fit-content',
//   width: 'fit-content',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: '#000000', // bg-black
//   border: '1px solid #1f2937', // border-gray-800
//   borderRadius: '32px', // rounded-4xl (대략 32px~40px)
//   padding: '8px 16px', // py-2 px-4
// });

// export const textStyle = style({
//   fontSize: '14px', // text-sm
//   fontWeight: 500,
//   color: '#ffffff',
// });
