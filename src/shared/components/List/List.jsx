'use client';

import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './List.css.js';

export function ListRow({
  badgeLabel,
  badgeRank,
  name,
  role,
  profileType,
  likeCount: likeCountProp,
  onWorkClick,
  onLikeClick,
  showBadge = true,
}) {
  const isExpert =
    profileType === 'admin' || (profileType == null && role === '전문가');
  const profileIconName = isExpert ? 'profileAdmin' : 'profileMember';
  const showCrown = badgeRank === 1;

  return (
    <div className={styles.row}>
      {showBadge && badgeLabel != null && (
        <span className={styles.badge}>
          {showCrown && (
            <Icon name="crown" width={16} height={16} aria-hidden />
          )}
          {badgeLabel}
        </span>
      )}
      <div className={styles.profile}>
        <Icon name={profileIconName} width={24} height={24} aria-hidden />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.role}>{role}</span>
      </div>
      <div className={styles.right}>
        <Button
          type="button"
          variant="transparent"
          className={styles.likeCount}
          onClick={onLikeClick}
          aria-label="좋아요"
          icon={<Icon name="heartActive" width={16} height={16} aria-hidden />}
          iconPosition="left"
        >
          {likeCountProp != null ? likeCountProp.toLocaleString() : '0'}
        </Button>
        <Button
          type="button"
          variant="transparent"
          className={styles.workLink}
          onClick={onWorkClick}
          icon={<Icon name="arrowRight" width={16} height={16} aria-hidden />}
          iconPosition="right"
        >
          작업물 보기
        </Button>
      </div>
    </div>
  );
}

export function List({ children, withDivider = false }) {
  return (
    <div className={styles.list}>
      {children}
      {withDivider && <hr className={styles.divider} />}
    </div>
  );
}
