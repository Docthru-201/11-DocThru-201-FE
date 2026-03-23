//챌린지 AI 자동번역 기능

'use client';

import { GNB, Button } from '@/shared/components';

export default function ChallengeDetailPage({ params }) {
  // params.id를 통해 어떤 챌린지인지 알 수 있습니다.
  const unwrappedParams = use(params);
  const challengeId = unwrappedParams.id;

  return (
    <div>
      <h1>챌린지 상세 페이지: {challengeId}</h1>
    </div>
  );
}
