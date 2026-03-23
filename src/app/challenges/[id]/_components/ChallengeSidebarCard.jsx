'use client';

import React from 'react';
import * as styles from './ChallengeSidebarCard.css';
import { Icon } from '@/shared/components/Icon';

export default function ChallengeSidebarCard({
  deadline,
  currentCount,
  maxCount,
  originalUrl,
  onChallenge,
  status,
}) {
  const isDisabled = status === 'closed' || status === 'dateEnd';
  const actionButtonKey = isDisabled ? 'disabled' : 'active';

  return (
    <aside className={styles.cardWrapper}>
      <div className={styles.innerContainer}>
        {/* 마감 및 인원 정보 */}
        <div className={styles.infoRow}>
          <div className={styles.infoItem}>
            <Icon
              name={'deadline-black'}
              alt="마감 기한"
              width={16}
              height={16}
            />
            <span>{deadline} 마감</span>
          </div>
          <div className={styles.infoItem}>
            <Icon
              name={'profile-member'}
              alt="참여 인원"
              width={16}
              height={16}
            />

            <span>
              {currentCount}/{maxCount}
            </span>
          </div>
        </div>

        {/* 버튼 영역 (화면 크기에 따라 가로/세로 자동 전환) */}
        <nav className={styles.buttonGroup}>
          <a
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkButton}
          >
            원문 보기
          </a>
          <button
            onClick={onChallenge}
            disabled={isDisabled}
            className={styles.actionButtonVariants[actionButtonKey]}
          >
            작업 도전하기
          </button>
        </nav>
      </div>
    </aside>
  );
}
