import { Icon } from '@/shared/components/Icon';
import * as styles from './ProfileSection.css.js';

export default function ProfileSection({ me }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Icon
          name="profileMember"
          width={80}
          height={80}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.nickname}>{me.nickname}</span>
        <span className={styles.grade}>
          {me.grade === 'EXPERT' ? '⭐ 전문가' : '일반'}
        </span>
        {me.profile?.introduction && (
          <p className={styles.introduction}>{me.profile.introduction}</p>
        )}
      </div>
    </div>
  );
}
