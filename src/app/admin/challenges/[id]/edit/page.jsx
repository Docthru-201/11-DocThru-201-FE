// src/app/admin/challenges/[id]/edit/page.jsx
'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import ChallengeForm from '@/app/admin/_components/ChallengeForm';
import { useUpdateChallenge } from '@/features/challenges/hooks/useUpdateChallenge';
import { getChallengeAction } from '@/shared/apis/admin.js';

export default function AdminChallengeEditPage() {
  const { id } = useParams();
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

    updateChallenge(payload);
  };

  if (isLoading) return <div>데이터를 불러오는 중...</div>;

  const challengeData = data?.challenge;

  const formattedData = challengeData
    ? {
        ...challengeData,
        // '2024-05-20T00:00:00Z' -> '2024-05-20' (input type="date" 대응)
        deadline: challengeData.deadline
          ? challengeData.deadline.split('T')[0]
          : '',
        // 인원수가 숫자 타입이라면 string으로 변환 (input type="number" 대응)
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
