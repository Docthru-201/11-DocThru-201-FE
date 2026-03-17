// export default function file() {
//   return <div> 공통 </div>;
// }
export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_URL = process.env.API_URL;

export const ITEM_COUNT = {
  CHALLENGE_CNT: 10,
  CHALLENGE_LG: 5,
  CHALLENGE_SM: 4,
};

export const SORT_OPTIONS = [
  { label: '승인 대기', value: 'pending' },
  { label: '신청 승인', value: 'approved' },
  { label: '신청 거절', value: 'rejected' },
  { label: '신청 시간 빠른순', value: 'createdAt_asc' },
  { label: '신청 시간 느린순', value: 'createdAt_desc' },
  { label: '마감 기한 빠른순', value: 'deadline_asc' },
  { label: '마감 기한 느린순', value: 'deadline_desc' },
];
