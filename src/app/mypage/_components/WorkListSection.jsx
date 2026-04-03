'use client';

import { useEffect, useState } from 'react';
import { useMyWorks } from '@/features/users/hooks/useMyWorks';
import * as styles from './WorkListSection.css.js';
import WorkCard from './WorkCard.jsx';

const STATUS_FILTER = [
  { label: '전체', value: 'ALL' },
  { label: '임시저장', value: 'DRAFT' },
  { label: '제출완료', value: 'SUBMITTED' },
];

const PAGE_SIZE = 10;

export default function WorkListSection() {
  const { works, isPending } = useMyWorks();
  const [filter, setFilter] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredWorks = works.filter((work) =>
    filter === 'ALL' ? true : work.status === filter,
  );

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter]);

  const visibleWorks = filteredWorks.slice(0, visibleCount);
  const hasMore = filteredWorks.length > visibleCount;

  if (isPending) return <div className={styles.loading}>불러오는 중...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>내 작업물</h3>
        <div className={styles.filterGroup}>
          {STATUS_FILTER.map((f) => (
            <button
              key={f.value}
              className={
                filter === f.value
                  ? styles.filterButtonActive
                  : styles.filterButton
              }
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filteredWorks.length > 0 ? (
        <>
          <div className={styles.workList}>
            {visibleWorks.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </div>
          {hasMore && (
            <button
              type="button"
              className={styles.moreButton}
              onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            >
              더 보기
            </button>
          )}
        </>
      ) : (
        <p className={styles.emptyText}>
          아직 작업물이 없어요.
          <br />
          챌린지에 도전해보세요!
        </p>
      )}
    </div>
  );
}
