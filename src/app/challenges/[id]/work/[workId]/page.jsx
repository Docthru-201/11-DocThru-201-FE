'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useWork } from '@/features/works/hooks/useWork';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation';
import { useLikes } from '@/features/likes/hooks/useLikes';
import { Modal } from '@/shared/components/Modal';
import WorkDetailViewer from './_components/WorkDetailViewer';
import WorkActionButtons from './_components/WorkActionButtons';
import FeedbackList from './_components/FeedbackList';
import FeedbackForm from './_components/FeedbackForm';
import ProfileModal from '../../_components/ProfileModal';
import { WorkDetailSkeleton } from '@/shared/components/Skeleton';

import * as styles from './page.css';

export default function WorkPage() {
  const { id, workId } = useParams();
  const router = useRouter();
  const { work, isPending, isError } = useWork(workId);
  const { deleteWork, isDeletePending } = useWorkMutation(workId, id);
  const { likeCount, isLiked, toggleLike, isLikePending } = useLikes(workId);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [profileUserId, setProfileUserId] = useState(null);

  const handleDelete = () => {
    deleteWork();
    setIsDeleteModalOpen(false);
  };

  if (isPending) return <WorkDetailSkeleton />;
  if (isError) return <div>작업물을 불러오는데 실패했습니다.</div>;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <WorkDetailViewer
          work={work}
          likeCount={likeCount}
          isLiked={isLiked}
          toggleLike={toggleLike}
          isLikePending={isLikePending}
          onProfileClick={(userId) => setProfileUserId(userId)}
          headerActions={
            <WorkActionButtons
              work={work}
              onEdit={() =>
                router.push(`/challenges/${id}/work/${workId}/edit`)
              }
              onDelete={() => setIsDeleteModalOpen(true)}
              isDeletePending={isDeletePending}
            />
          }
        />

        <hr className={styles.sectionDivider} />

        <div className={styles.feedbackSection}>
          <FeedbackForm workId={workId} />
          <FeedbackList
            workId={workId}
            onProfileClick={(userId) => setProfileUserId(userId)}
          />
        </div>
      </div>

      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        message="작업물을 삭제하면 복구할 수 없습니다. 정말 삭제하시겠습니까?"
        primaryLabel="삭제하기"
        secondaryLabel="취소"
        onPrimary={handleDelete}
        onSecondary={() => setIsDeleteModalOpen(false)}
      />
      {profileUserId && (
        <ProfileModal
          userId={profileUserId}
          onClose={() => setProfileUserId(null)}
        />
      )}
    </div>
  );
}
