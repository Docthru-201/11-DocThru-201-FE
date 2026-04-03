import { ChallengeListSkeleton } from '@/shared/components/Skeleton';

export default function ChallengesLoading() {
  return (
    <div style={{ maxWidth: 996, margin: '0 auto', padding: '0 16px 32px' }}>
      <ChallengeListSkeleton />
    </div>
  );
}
