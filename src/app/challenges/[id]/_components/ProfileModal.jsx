import { usePublicProfile } from '@/features/users/hooks/usePublicProfile';
import { Icon } from '@/shared/components/Icon';
import * as styles from './ProfileModal.css.js';

export default function ProfileModal({ userId, onClose }) {
  const { profile, isPending } = usePublicProfile(userId);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        {isPending ? (
          <div className={styles.loading}>불러오는 중...</div>
        ) : profile ? (
          <>
            <div className={styles.imageWrapper}>
              <div className={styles.imageWrapper}>
                {profile.image ? (
                  <img
                    src={profile.image}
                    alt="프로필"
                    width={80}
                    height={80}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                ) : (
                  <Icon name="profileMember" width={80} height={80} />
                )}
              </div>
            </div>
            <span className={styles.nickname}>{profile.nickname}</span>
            <span className={styles.grade}>
              {profile.grade === 'EXPERT' ? '⭐ 전문가' : '일반'}
            </span>
            <p className={styles.introduction}>
              {profile.introduction || '자기소개가 없습니다.'}
            </p>
          </>
        ) : (
          <div className={styles.loading}>프로필을 찾을 수 없습니다.</div>
        )}
      </div>
    </div>
  );
}
