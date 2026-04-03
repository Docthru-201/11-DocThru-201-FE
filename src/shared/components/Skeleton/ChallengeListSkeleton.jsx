'use client';

import * as styles from './ChallengeListSkeleton.css.js';
import * as bone from './skeletonPrimitives.css.js';

function ChallengeCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden>
      <div className={styles.cardHeader}>
        <div className={`${bone.boneRounded} ${styles.chip}`} />
        <div className={`${bone.boneRounded} ${styles.chip}`} />
      </div>
      <div className={`${bone.boneRounded} ${styles.titleLine}`} />
      <div className={`${bone.boneRounded} ${styles.titleLineShort}`} />
      <div className={styles.metaRow}>
        <div className={`${bone.boneRounded} ${styles.metaItem}`} />
        <div className={`${bone.boneRounded} ${styles.metaItem}`} />
      </div>
    </div>
  );
}

export default function ChallengeListSkeleton({ count = 5 }) {
  return (
    <div className={styles.list} role="status" aria-label="챌린지 목록 로딩 중">
      {Array.from({ length: count }, (_, i) => (
        <ChallengeCardSkeleton key={i} />
      ))}
    </div>
  );
}
