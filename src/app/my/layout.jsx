import { Suspense } from 'react';
import { MyChallengesSkeleton } from '@/shared/components/Skeleton';

export default function MyLayout({ children }) {
  return (
    <Suspense fallback={<MyChallengesSkeleton variant="cards" />}>
      {children}
    </Suspense>
  );
}
