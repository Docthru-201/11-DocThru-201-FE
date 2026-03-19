'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: 48, textAlign: 'center' }}>
      <h2>문제가 발생했습니다</h2>
      <p>{error?.message ?? '알 수 없는 오류'}</p>
      <button type="button" onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}
