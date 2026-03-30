import { ChallengesAuthGate } from './_components/ChallengesAuthGate';
import { GNBContainer } from '@/shared/components/GNB/GNBContainer';

export default function ChallengesLayout({ children }) {
  return (
    <ChallengesAuthGate>
      <GNBContainer />
      {children}
    </ChallengesAuthGate>
  );
}
