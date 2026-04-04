'use client';

import { Suspense } from 'react';

import ChallengesPage from '@/app/challenges/page.jsx';

// 어드민에서 “챌린지 목록” 탭 클릭 시,
// 어드민 GNB/레이아웃은 유지하고, 내용은 사용자용 `/challenges` 화면과 동일하게 보여줍니다.
export default function AdminChallengesPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ChallengesPage hideNewChallengeButton />
    </Suspense>
  );
}
