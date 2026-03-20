'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
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
