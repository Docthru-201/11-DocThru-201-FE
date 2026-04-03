// app/mypage/_components/WorkCard.jsx
import { Icon } from '@/shared/components/Icon';
import * as styles from './WorkListSection.css.js';
import { useRouter } from 'next/navigation';

export default function WorkCard({ work }) {
  const router = useRouter();
  const likeDisplay = Number(work.likeCount ?? 0).toLocaleString('ko-KR');

  return (
    <div
      className={styles.workCard}
      onClick={() =>
        router.push(`/challenges/${work.challengeId}/work/${work.id}`)
      }
    >
      <div className={styles.workInfo}>
        <span className={styles.challengeTitle}>{work.challenge.title}</span>
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
        <span className={styles.likeCount}>
          <Icon name="heartActive" width={16} height={16} aria-hidden />
          {likeDisplay}
        </span>
        <span className={styles.date}>
          {new Date(work.createdAt).toLocaleDateString('ko-KR')}
        </span>
      </div>
    </div>
  );
}
