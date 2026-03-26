'use client';
import { useParams, useRouter } from 'next/navigation';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useEditorStore } from '@/features/editor/store/useEditorStore';
import TiptapEditor from '@/features/editor/TiptapEditor';

export default function CreateWorkPage() {
  const { id: challengeId } = useParams();
  const router = useRouter();
  const { createWork, isCreatePending } = useWorkMutation();
  const { content, resetContent } = useEditorStore();

  const handleCancel = () => {
    resetContent();
    router.back();
  };

  const handleSubmit = () => {
    if (!content) return;
    createWork(
      { challengeId, content: JSON.stringify(content) },
      {
        onSuccess: (data) => {
          resetContent();
          router.push(`/challenges/${challengeId}/work/${data.id}`);
        },
      },
    );
  };

  return (
    <div>
      <div>
        <span>챌린지 작업물 작성</span>
        <div>
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleSubmit} disabled={isCreatePending || !content}>
            {isCreatePending ? '제출 중...' : '제출하기'}
          </button>
        </div>
      </div>
      <TiptapEditor />
    </div>
  );
}
