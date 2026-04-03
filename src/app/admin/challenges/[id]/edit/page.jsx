'use client';

import { useParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import ChallengeForm from '@/app/admin/_components/ChallengeForm';
import { useUpdateChallenge } from '@/features/challenges/hooks/useUpdateChallenge';
import { getChallengeAction } from '@/shared/apis/admin.js';

export default function AdminChallengeEditPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { updateChallenge, isPending: isUpdating } = useUpdateChallenge();

  const { data, isLoading } = useQuery({
    queryKey: ['challenge', id],
    queryFn: () => getChallengeAction(id),
  });

  const handleUpdate = (formData) => {
    const payload = {
      id,
      ...formData,
      deadline: formData.deadline
        ? new Date(formData.deadline).toISOString()
        : null,
      maxParticipants: Number(formData.maxParticipants),
      status: formData.status || 'APPROVED',
      declineReason: formData.declineReason || '',
    };

    updateChallenge(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['challenge', id] });
      },
      onError: (error) => {
        alert(`수정 실패: ${error.message}`);
      },
    });
  };

  if (isLoading) return <div>데이터를 불러오는 중...</div>;

  const challengeData = data?.challenge;

  const formattedData = challengeData
    ? {
        ...challengeData,
        deadline: challengeData.deadline
          ? challengeData.deadline.split('T')[0]
          : '',
        maxParticipants: String(challengeData.maxParticipants || ''),
      }
    : null;

  return (
    <ChallengeForm
      title="챌린지 수정하기"
      initialData={formattedData}
      onSubmit={handleUpdate}
      isPending={isUpdating}
    />
  );
}
