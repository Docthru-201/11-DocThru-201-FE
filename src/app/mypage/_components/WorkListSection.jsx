'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMyWorks } from '@/features/users/hooks/useMyWorks';
import * as styles from './WorkListSection.css.js';

const STATUS_FILTER = [
  { label: '전체', value: 'ALL' },
  { label: '임시저장', value: 'DRAFT' },
  { label: '제출완료', value: 'SUBMITTED' },
];

export default function WorkListSection() {
  const router = useRouter();
  const { works, isPending } = useMyWorks();
  const [filter, setFilter] = useState('ALL');

  const filteredWorks = works.filter((work) =>
    filter === 'ALL' ? true : work.status === filter,
  );

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
        <div className={styles.workList}>
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className={styles.workCard}
              onClick={() =>
                router.push(`/challenges/${work.challengeId}/work/${work.id}`)
              }
            >
              <div className={styles.workInfo}>
                <span className={styles.challengeTitle}>
                  {work.challenge.title}
                </span>
                <span
                  className={
                    work.status === 'DRAFT'
                      ? styles.statusDraft
                      : styles.statusSubmitted
                  }
                >
                  {work.status === 'DRAFT' ? '임시저장' : '제출완료'}
                </span>
              </div>
              <div className={styles.workMeta}>
                <span className={styles.likeCount}>❤️ {work.likeCount}</span>
                <span className={styles.date}>
                  {new Date(work.createdAt).toLocaleDateString('ko-KR')}
                </span>
              </div>
            </div>
          ))}
        </div>
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
