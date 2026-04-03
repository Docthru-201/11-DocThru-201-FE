'use client';

import * as styles from '@/app/challenges/page.css.js';
import * as sk from './MyChallengesSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';
import ChallengeListSkeleton from './ChallengeListSkeleton.jsx';
import AppliedTableSkeleton from './AppliedTableSkeleton.jsx';

/**
 * /my 나의 챌린지 — 라우트 로딩·탭 전환 시 스켈레톤
 * @param {'cards' | 'table'} variant — 참여/완료 카드 vs 신청 테이블
 */
export default function MyChallengesSkeleton({ variant = 'cards' }) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.headerMy} aria-hidden>
          <div className={`${bone.boneRounded} ${sk.titleSk}`} />
          <div className={`${bone.boneRounded} ${sk.btnSk}`} />
        </header>

        <div className={styles.tabBar}>
          <div className={sk.tabRow}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={`${bone.boneRounded} ${sk.tabPill}`} />
            ))}
          </div>
        </div>

        <div className={styles.toolbar}>
          <div className={`${bone.boneRounded} ${sk.searchSk}`} />
        </div>

        {variant === 'table' ? (
          <AppliedTableSkeleton />
        ) : (
          <ChallengeListSkeleton count={5} />
        )}
      </main>
    </div>
  );
}
