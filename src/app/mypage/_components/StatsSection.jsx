import * as styles from './StatsSection.css.js';

export default function StatsSection({ stats }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>활동 통계</h3>
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{stats.participantCount}</span>
          <span className={styles.statLabel}>챌린지 참여</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>{stats.workCount}</span>
          <span className={styles.statLabel}>작업물 수</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>
            {Number(stats.likeCount ?? 0).toLocaleString('ko-KR')}
          </span>
          <span className={styles.statLabel}>받은 좋아요</span>
        </div>
      </div>
    </div>
  );
}
