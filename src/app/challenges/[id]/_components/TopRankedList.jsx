'use client';

import React, { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import DOMPurify from 'dompurify';
import * as styles from './TopRankedList.css';

import { Icon } from '@/shared/components/Icon';

export default function TopRankedList({ rankingData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const topWorks = useMemo(() => {
    if (!rankingData || rankingData.length === 0) return [];
    const maxLikes = Math.max(...rankingData.map((w) => w.likeCount));
    return rankingData.filter((w) => w.likeCount === maxLikes);
  }, [rankingData]);

  const CONTENT_LIMIT_LENGTH = 500;

  if (topWorks.length === 0) return null;

  const isSingle = topWorks.length === 1;

  return (
    <section className={styles.sectionContainer}>
      <div
        className={styles.sliderTrack}
        style={{
          transform: `translateX(calc(-${currentIndex} * (92% + 12px)))`,
        }}
      >
        {topWorks.map((work, index) => {
          const isCurrent = index === currentIndex;
          const isExpanded = !!expandedIndexes[index];
          const cardKey = isSingle
            ? 'single'
            : isCurrent
              ? 'active'
              : 'inactive';
          const contentKey = isExpanded ? 'expanded' : 'clamped';

          return (
            <div key={work.workId} className={styles.cardVariants[cardKey]}>
              <div className={styles.badge}>
                <Icon name={'bestMedal'} width={16} height={16} />
                <span>최다 추천 번역</span>
              </div>

              <div className={styles.header}>
                <div className={styles.authorGroup}>
                  <div className={styles.userInfoLeft}>
                    <Icon
                      name={'profileMember'}
                      width={24}
                      height={24}
                      className={styles.userAvatar}
                    />
                    <span className={styles.authorName}>
                      {work.author.authorNickname}
                    </span>
                    <span className={styles.authorGrade}>
                      {work.author.grade === 'EXPERT' ? '전문가' : '일반'}
                    </span>
                    <div className={styles.likeCountBox}>
                      <Icon name={'heartActive'} width={16} height={16} />
                      {work.likeCount}
                    </div>
                  </div>
                  <span className={styles.createdAtText}>
                    {dayjs(work.createdAt).format('YYYY/MM/DD HH:mm')}
                  </span>
                </div>
              </div>

              <div className={styles.contentArea}>
                <hr className={styles.hr} />
                <div className={styles.contentTextVariants[contentKey]}>
                  {typeof work.content === 'string' &&
                  work.content.startsWith('{') ? (
                    JSON.parse(work.content).content[0].content[0].text
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(work.content),
                      }}
                    />
                  )}
                </div>

                {work.content.length > CONTENT_LIMIT_LENGTH && (
                  <div className={styles.moreButtonWrapper}>
                    <button
                      onClick={() =>
                        setExpandedIndexes((prev) => ({
                          ...prev,
                          [index]: !isExpanded,
                        }))
                      }
                      className={styles.moreButton}
                    >
                      <span>{isExpanded ? '접기' : '더보기'}</span>
                      <Icon
                        name={isExpanded ? 'arrowCircleUp' : 'arrowCircleDown'}
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                )}
              </div>

              {!isSingle && isCurrent && (
                <div className={styles.nextButtonWrapper}>
                  <button
                    onClick={() =>
                      setCurrentIndex((p) => (p + 1) % topWorks.length)
                    }
                  >
                    <Icon
                      name={'arrowCircleRight'}
                      alt="다음"
                      width={32}
                      height={32}
                    />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
