import { ChallengesAuthGate } from './_components/ChallengesAuthGate';

export default function ChallengesLayout({ children }) {
  return <ChallengesAuthGate>{children}</ChallengesAuthGate>;
}
