import { ChallengeListSkeleton } from '@/shared/components/Skeleton';

/** 나의 챌린지 — 목록 레이아웃이 `/challenges`와 유사 */
export default function MyChallengesLoading() {
  return (
    <div style={{ maxWidth: 996, margin: '0 auto', padding: '0 16px 32px' }}>
      <ChallengeListSkeleton />
    </div>
  );
}
