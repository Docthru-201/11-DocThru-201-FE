'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';

import { ITEMSPERPAGE } from '@/shared/constants/file';
import Image from 'next/image';
import { Icon } from '@/shared/components/Icon';
import { Chip } from '@/shared/components/Chip';
import { Container } from '@/shared/components/Container';
import { List } from '@/shared/components/List';

import ChallengeContent from '@/app/challenges/[id]/_components/ChallengeContent';
import TopRankedList from '@/app/challenges/[id]/_components/TopRankedList';
import ModalMessage from '@/app/challenges/[id]/_components/ModalMessage';

import { getRankedList } from '@/app/challenges/[id]/_components/getRankedList.js';
import { useIsSize } from '@/shared/hooks/useIsSize';
import { ChallengeDetailSkeleton } from '@/shared/components/Skeleton';

import * as styles from './Page.css';
import { useChallengeDetail } from '@/features/challenges/hooks/useChallengeDetail.js';
import { useChallengeRanking } from '@/features/challenges/hooks/useChallengeRanking.js';
import { useMyWork } from '@/features/works/hooks/useMyWork.js';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation.js';
import { markWorkEditorForwardIntent } from '@/shared/lib/workEditorNavigation';
import { RankingListRow } from './_components/RankingListRow.jsx';

export default function ChallengeDetailPage() {
  const { id: challengeId } = useParams();
  const router = useRouter();
  const containerSize = useIsSize();

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const { challenge, isPending: isChallengePending } =
    useChallengeDetail(challengeId);
  const { rankingData, isPending: isRankingPending } =
    useChallengeRanking(challengeId);
  const { myWork, isPending: isMyWorkPending } = useMyWork(challengeId);
  const { createWork, isCreatePending } = useWorkMutation(null, challengeId);

  const { currentItems, totalPages } = useMemo(() => {
    const rankedData = getRankedList(rankingData);
    const total = Math.ceil(rankedData.length / ITEMSPERPAGE) || 1;
    return {
      currentItems: rankedData.slice(
        (currentPage - 1) * ITEMSPERPAGE,
        currentPage * ITEMSPERPAGE,
      ),
      totalPages: total,
    };
  }, [rankingData, currentPage]);

  const isDisabled = useMemo(() => {
    if (!challenge) return true;
    const isFull =
      (challenge.participants?.length || 0) >= (challenge.maxParticipants || 0);
    const isInactiveStatus = ['DELETED', 'REJECTED'].includes(challenge.status);
    return isFull || challenge.isClosed || isInactiveStatus;
  }, [challenge]);

  /** API/직렬화 차이 대비 (대문자 기준) */
  const myWorkStatusUpper = useMemo(
    () => (myWork?.status != null ? String(myWork.status).toUpperCase() : null),
    [myWork],
  );

  const actionLabel = useMemo(() => {
    if (!myWork?.id) return '작업 도전하기';
    if (myWorkStatusUpper === 'SUBMITTED') return '제출 완료';
    return '도전 계속하기';
  }, [myWork?.id, myWorkStatusUpper]);

  const isActionDisabled =
    isDisabled ||
    isCreatePending ||
    isMyWorkPending ||
    myWorkStatusUpper === 'SUBMITTED';

  const handleChallenge = () => {
    if (myWorkStatusUpper === 'SUBMITTED') return;

    if (myWork?.id) {
      if (myWorkStatusUpper === 'DRAFT' || myWorkStatusUpper == null) {
        markWorkEditorForwardIntent(String(challengeId), String(myWork.id));
        router.push(`/challenges/${challengeId}/work/${myWork.id}/edit`);
        return;
      }
      setModalMessage(
        `이미 작성한 작업물이 있어요!\n작업물은 1인 1개만 작성할 수 있어요.`,
      );
      setIsModalOpen(true);
      return;
    }

    createWork(undefined, {
      onSuccess: (data) => {
        markWorkEditorForwardIntent(String(challengeId), String(data.id));
        router.push(`/challenges/${challengeId}/work/${data.id}/edit`);
      },
      onError: (error) => {
        const msg = error?.message || '';
        const isDuplicate = /이미|중복|CONFLICT|409|ALREADY_SUBMITTED/i.test(
          msg,
        );
        setModalMessage(
          isDuplicate
            ? `이미 작성한 작업물이 있어요!\n작업물은 1인 1개만 작성할 수 있어요.`
            : msg || '작업물을 만들 수 없습니다. 잠시 후 다시 시도해 주세요.',
        );
        setIsModalOpen(true);
      },
    });
  };

  if (isChallengePending || isRankingPending) {
    return <ChallengeDetailSkeleton />;
  }

  if (!challenge) {
    return (
      <div className={styles.statusWrapper}>챌린지를 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.topSection}>
          <div className={styles.leftInfoArea}>
            <Chip status={challenge.status} />
            <ChallengeContent
              challengeId={challengeId}
              participants={rankingData.length}
              {...challenge}
            />
            <div className={styles.authorInfo}>
              {challenge.author?.image ? (
                <Image
                  src={challenge.author.image}
                  alt=""
                  width={32}
                  height={32}
                  className={styles.authorImage}
                  unoptimized
                />
              ) : (
                <Icon
                  name="profileMember"
                  width={32}
                  height={32}
                  className={styles.authorImage}
                  aria-hidden
                />
              )}
              <span className={styles.authorNickname}>
                {challenge.author?.nickname || '작성자 없음'}
              </span>
            </div>
          </div>
          <div className={styles.containerWrap}>
            <Container
              size={containerSize}
              deadlineText={dayjs(challenge.deadline).format('YYYY년 M월 D일')}
              personText={`${challenge.participants?.length || 0}/${challenge.maxParticipants || 0}`}
              originalLabel="원문 보기"
              actionLabel={actionLabel}
              onActionClick={handleChallenge}
              onOriginalViewClick={() => {
                if (challenge.originalUrl)
                  window.open(challenge.originalUrl, '_blank');
              }}
              isDisabled={isActionDisabled}
            />
          </div>
        </section>

        <div className={styles.dividerWrapper}></div>
        {challenge?.isClosed === true && (
          <div className={styles.bestWorkWrapper}>
            <TopRankedList rankingData={rankingData} />
          </div>
        )}

        <section className={styles.rankingSection}>
          <div className={styles.rankingHeader}>
            <h3 className={styles.rankingTitle}>참여현황</h3>
            {rankingData.length > 0 && (
              <div className={styles.paginationGroup}>
                <div className={styles.nowPage}>
                  <span className={styles.currentPageText}>{currentPage}</span>
                  <span className={styles.slashSpace}> </span>
                  <span className={styles.totalPageText}>/ {totalPages}</span>
                </div>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <Icon name="chevronLeftActive" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <Icon name="chevronRightActive" />
                </button>
              </div>
            )}
          </div>

          <div className={styles.rankingListContainer}>
            {currentItems.length > 0 ? (
              <List withDivider={false}>
                {currentItems.map((item, index) => (
                  <React.Fragment key={item.workId}>
                    <RankingListRow
                      item={item}
                      challengeId={challengeId}
                      router={router}
                    />
                    {index < currentItems.length - 1 && (
                      <div className={styles.dividerWrapper}></div>
                    )}
                  </React.Fragment>
                ))}
              </List>
            ) : (
              <p className={styles.emptyText}>
                아직 참여한 도전자가 없어요.
                <br />
                지금 바로 도전해보세요!
              </p>
            )}
          </div>
        </section>

        {isModalOpen && (
          <ModalMessage
            message={modalMessage}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
