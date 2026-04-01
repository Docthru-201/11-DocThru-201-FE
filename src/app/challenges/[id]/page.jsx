'use client';

import { useRouter, useParams } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { ITEMSPERPAGE } from '@/shared/constants/file';
import { Icon } from '@/shared/components/Icon';
import { Chip } from '@/shared/components/Chip';
import { Container } from '@/shared/components/Container';
import { List, ListRow } from '@/shared/components/List';
import LineDivider from '@/app/admin/_components/LineDivider';

import ChallengeContent from '@/app/challenges/[id]/_components/ChallengeContent';
import TopRankedList from '@/app/challenges/[id]/_components/TopRankedList';
import ModalMessage from '@/app/challenges/[id]/_components/ModalMessage';

import {
  getChallengeDetail,
  getRankingAction,
  createWorkAction,
} from '@/shared/apis/user.js';
import { getRankedList } from '@/app/challenges/[id]/_components/getRankedList.js';
import { useIsSize } from '@/shared/hooks/useIsSize';
import * as styles from './Page.css.js';
import { useChallengeDetail } from '@/features/challenges/hooks/useChallengeDetail.js';
import { useChallengeRanking } from '@/features/challenges/hooks/useChallengeRanking.js';
import { useMyWork } from '@/features/works/hooks/useMyWork.js';
import { useWorkMutation } from '@/features/works/hooks/useWorkMutation.js';

export default function ChallengeDetailPage() {
  const { id: challengeId } = useParams();
  const router = useRouter();
  const containerSize = useIsSize();

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // 챌린지 상세 데이터 (React Query)
  const { data: challenge, isLoading: isChallengeLoading } = useQuery({
    queryKey: ['challenge', challengeId],
    queryFn: () => getChallengeDetail(challengeId),
    enabled: !!challengeId,
  });

  // 랭킹 데이터 (React Query)
  const { data: rankingData = [], isLoading: isRankingLoading } = useQuery({
    queryKey: ['challenge-ranking', challengeId],
    queryFn: () => getRankingAction(challengeId),
    enabled: !!challengeId,
    select: (data) => data || [],
  });

  // 작업물 생성 (Mutation)
  const challengeMutation = useMutation({
    mutationFn: () => createWorkAction(challengeId),
    onSuccess: (response) => {
      const workId = response.data.id;
      router.push(`/challenges/${challengeId}/work/${workId}/edit`);
    },
    onError: () => {
      setModalMessage(
        `이미 작성한 작업물이 있어요!\n작업물은 1인 1개만 작성할 수 있어요.`,
      );
      setIsModalOpen(true);
    },
  });

  // 데이터 가공 (페이지네이션)

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

  // 비활성화 로직
  const isDisabled = useMemo(() => {
    if (!challenge) return true;
    const isFull =
      (challenge.participants?.length || 0) >= (challenge.maxParticipants || 0);
    const isInactiveStatus = ['DELETED', 'REJECTED'].includes(challenge.status);
    return isFull || challenge.isClosed || isInactiveStatus;
  }, [challenge]);

  // 로딩 처리
  if (isChallengeLoading || isRankingLoading) {
    return <div className={styles.statusWrapper}>불러오는 중...</div>;
  }

  // 예외 처리
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
              paricipants={rankingData.length}
              {...challenge}
            />
            <div className={styles.authorInfo}>
              <Icon
                name="profileMember"
                width={32}
                height={32}
                className={styles.authorImage}
              />
              <span className={styles.authorNickname}>
                {challenge.author?.nickname || '작성자 없음'}
              </span>
            </div>
          </div>

          <div className={styles.rightSidebarArea}>
            <Container
              size={containerSize}
              deadlineText={dayjs(challenge.deadline).format('YYYY년 M월 D일')}
              personText={`${challenge.participants?.length || 0}/${challenge.maxParticipants || 0}`}
              originalLabel="원문 보기"
              actionLabel="작업 도전하기"
              onActionClick={() => challengeMutation.mutate()}
              onOriginalViewClick={() => {
                if (challenge.originalUrl)
                  window.open(challenge.originalUrl, '_blank');
              }}
              isDisabled={isDisabled || challengeMutation.isPending}
            />
          </div>
        </section>

        <LineDivider />

        {challenge.isClosed && (
          <div className={styles.bestWorkWrapper}>
            <TopRankedList rankingData={rankingData} />
          </div>
        )}

        <section className={styles.rankingSection}>
          <div className={styles.rankingHeader}>
            <h3 className={styles.rankingTitle}>참여현황</h3>
            {rankingData.length > 0 && (
              <div className={styles.paginationGroup}>
                <span className={styles.currentPageText}>{currentPage}</span>
                <span className={styles.totalPageText}>/ {totalPages}</span>
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
                    <ListRow
                      badgeRank={item.rank}
                      badgeLabel={item.rank.toString().padStart(2, '0')}
                      showBadge
                      name={item.author.authorNickname}
                      role={item.author.grade === 'EXPERT' ? '전문가' : '일반'}
                      likeCount={item.likeCount}
                      profileType={
                        item.author.grade === 'EXPERT' ? 'admin' : 'member'
                      }
                      onWorkClick={() =>
                        router.push(
                          `/challenges/${challengeId}/work/${item.workId}`,
                        )
                      }
                      onLikeClick={() => {}}
                    />
                    {index < currentItems.length - 1 && (
                      <div className={styles.dividerWrapper}>
                        <LineDivider />
                      </div>
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
