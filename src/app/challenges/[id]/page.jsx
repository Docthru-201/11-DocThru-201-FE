'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import dayjs from 'dayjs';

import { Icon } from '@/shared/components/Icon';
import { Chip } from '@/shared/components/Chip';
import { Container } from '@/shared/components/Container';
import LineDivider from '@/app/admin/_components/LineDivider';

import ChallengeContent from '@/app/challenges/[id]/_components/ChallengeContent';
import RankingListItem from '@/app/challenges/[id]/_components/RankingListItem';
import TopRankedList from '@/app/challenges/[id]/_components/TopRankedList';
import ModalMessage from '@/app/challenges/[id]/_components/ModalMessage';

import { getChallengeDetail } from '@/shared/apis/user.js';
import { getRankingAction } from '@/shared/apis/user.js';
import { createWorkAction } from '@/shared/apis/user.js';
import { getRankedList } from '@/app/challenges/[id]/_components/getRankedList.js';

import * as styles from './Page.css.js';

export default function ChallengeDetailPage() {
  const router = useRouter();
  const { id: challengeId } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [rankingData, setRankingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const isDisabled = useMemo(() => {
    if (!challenge) return true;

    const isFull =
      (challenge?.participants?.length || 0) >=
      (challenge?.maxParticipants || 0);
    const isClosed = challenge?.isClosed;

    const isInactiveStatus = ['DELETED', 'REJECTED'].includes(
      challenge?.status,
    );

    return isFull || isClosed || isInactiveStatus;
  }, [challenge]);

  const itemsPerPage = 5;
  const { currentItems, totalPages } = useMemo(() => {
    const rankedData = getRankedList(rankingData);
    return {
      currentItems: rankedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      ),
      totalPages: Math.ceil(rankedData.length / itemsPerPage) || 1,
    };
  }, [rankingData, currentPage]);

  useEffect(() => {
    if (!challengeId) return;

    const fetchData = async () => {
      try {
        const [detail, ranks] = await Promise.all([
          getChallengeDetail(challengeId),
          getRankingAction(challengeId),
        ]);
        setChallenge(detail);
        setRankingData(ranks);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [challengeId]);

  const handleChallenge = async () => {
    try {
      const data = await createWorkAction(challengeId);
      router.push(`/challenges/${challenge.id}/work/${data.data.id}/edit`);
    } catch {
      setModalMessage(
        `이미 작성한 작업물이 있어요!\n작업물은 1인 1개만 작성할 수 있어요.`,
      );
    }
    setIsModalOpen(true);
  };

  if (loading)
    return <div className={styles.statusWrapper}>불러오는 중...</div>;

  if (!challenge)
    return (
      <div className={styles.statusWrapper}>챌린지를 찾을 수 없습니다.</div>
    );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <section className={styles.topSection}>
          <div className={styles.leftInfoArea}>
            <Chip status={challenge?.status} />
            {challenge && (
              <ChallengeContent
                challengeId={challengeId}
                paricipants={rankingData.length}
                {...challenge}
              />
            )}
            <div className={styles.authorInfo}>
              <Icon
                name={'profileMember'}
                width={32}
                height={32}
                className={styles.authorImage}
              />
              <span className={styles.authorNickname}>
                {challenge?.author?.nickname || '작성자 없음'}
              </span>
            </div>
          </div>
          <div
            style={{
              background: '#FFFFFF',
              padding: 24,
            }}
          >
            <Container
              size="large"
              deadlineText={dayjs(challenge?.deadline).format('YYYY년 M월 D일')}
              personText={`${challenge?.participants?.length || 0}/${challenge?.maxParticipants || 0}`}
              originalLabel="원문 보기"
              actionLabel="작업 도전하기"
              onActionClick={handleChallenge}
              onOriginalViewClick={() => {
                if (challenge?.originalUrl) {
                  window.open(challenge.originalUrl, '_blank');
                }
              }}
              isDisabled={isDisabled}
            />
          </div>
        </section>

        <LineDivider />
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
                <span className={styles.currentPageText}>{currentPage}</span>
                <span className={styles.totalPageText}>/ {totalPages}</span>
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <Icon name="chevronLeftActive" alt="이전" />
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <Icon name="chevronRightActive" alt="다음" />
                </button>
              </div>
            )}
          </div>

          <div className={styles.rankingListContainer}>
            {currentItems.length > 0 ? (
              currentItems.map((item, index, array) => {
                const isFirstOfRank =
                  index === 0 || array[index - 1].rank !== item.rank;
                return (
                  <RankingListItem
                    key={item.workId}
                    item={{
                      rank: item.rank,
                      userName: item.author.authorNickname,
                      userRole:
                        item.author.grade === 'EXPERT' ? '전문가' : '일반',
                      likes: item.likeCount,
                      workId: item.workId,
                      challengeId: challengeId,
                    }}
                    highlight={isFirstOfRank && item.rank === 1}
                  />
                );
              })
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
