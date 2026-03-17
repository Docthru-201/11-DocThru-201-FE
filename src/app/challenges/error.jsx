'use client'; // 이 줄이 반드시 맨 위에 있어야 합니다.

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // 브라우저 콘솔에서 실제 에러 내용을 확인하기 위함
    console.error('Challenges 에러 발생:', error);
  }, [error]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>신청 목록을 불러오는 중 오류가 발생했습니다.</h2>
      <button
        onClick={() => reset()}
        style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
      >
        다시 시도
      </button>
    </div>
  );
}
