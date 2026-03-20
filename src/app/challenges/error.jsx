'use client';

export default function ChallengesError({ error, reset }) {
  return (
    <div>
      <h2>문제가 발생했습니다</h2>
      <button type="button" onClick={() => reset()}>
        다시 시도
      </button>
    </div>
  );
}
