'use client';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useLikes } from '@/features/likes/hooks/useLikes';
import WorkDetailViewer from './_components/WorkDetailViewer';
import WorkActionButtons from './_components/WorkActionButtons';
import FeedbackList from './_components/FeedbackList';
import FeedbackForm from './_components/FeedbackForm';

export default function WorkPage() {
  const { id, workId } = useParams();
  const router = useRouter();
  const { work, isPending, isError } = useWork(workId);
  const { deleteWork, isDeletePending } = useWorkMutation(workId);
  const { likeCount, isLiked, toggleLike, isLikePending } = useLikes(workId);

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>작업물을 불러오는데 실패했습니다.</div>;

  return (
    <div>
      <WorkDetailViewer
        work={work}
        likeCount={likeCount}
        isLiked={isLiked}
        toggleLike={toggleLike}
        isLikePending={isLikePending}
      />

      <WorkActionButtons
        work={work}
        onEdit={() => router.push(`/challenges/${id}/work/${workId}/edit`)}
        onDelete={() => deleteWork()}
        isDeletePending={isDeletePending}
      />

      {/* 댓글 목록 */}
      <FeedbackList workId={workId} />

      {/* 댓글 작성 */}
      <FeedbackForm workId={workId} />
    </div>
  );
}
