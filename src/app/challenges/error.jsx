'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Challenges 에러 발생:', error);
  }, [error]);

  return (
    <div>
      <h2>문제가 발생했습니다</h2>
      <button type="button" onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}
