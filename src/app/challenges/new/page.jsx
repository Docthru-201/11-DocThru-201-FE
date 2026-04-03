'use client';

import ChallengeForm from '@/app/admin/_components/ChallengeForm';
import { useCreateChallenge } from '@/features/challenges/hooks/useCreateChallenge';

export default function NewChallengePage() {
  const { createChallenge, isPending } = useCreateChallenge();

  const handleCreate = (formData) => {
    const payload = {
      ...formData,
      deadline: formData.deadline
        ? new Date(formData.deadline).toISOString()
        : null,
      maxParticipants: Number(formData.maxParticipants),
    };
    createChallenge(payload);
  };

  return (
    <ChallengeForm
      title="신규 챌린지 신청"
      initialData={null}
      onSubmit={handleCreate}
      isPending={isPending}
    />
  );
}
