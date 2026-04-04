'use client';

import clsx from 'clsx';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Container.css.js';

export function Container({
  className = undefined,
  size = 'large',
  deadlineText = '2024년 3월 3일 마감',
  personText = '15/15',
  originalLabel = '원문 보기',
  actionLabel = '작업 도전하기',
  onOriginalViewClick,
  onActionClick,
  isDisabled = false,
}) {
  return (
    <div
      className={clsx(styles.baseContainer, styles.container[size], className)}
    >
      <div className={styles.inner[size]}>
        <div className={styles.metricsWrap[size]}>
          <div className={styles.metricItem}>
            <Icon name="deadlineBlack" width={24} height={24} aria-hidden />
            <span className={styles.metricText}>{deadlineText}</span>
          </div>
          <div className={styles.metricItem}>
            <Icon name="personYellow" width={24} height={24} aria-hidden />
            <span className={styles.metricText}>{personText}</span>
          </div>
        </div>

        <div className={styles.buttonsWrap[size]}>
          <button
            type="button"
            className={styles.originalButton}
            onClick={onOriginalViewClick}
          >
            {originalLabel}
          </button>
          <button
            type="button"
            className={clsx(styles.actionButton, {
              [styles.disabled]: isDisabled,
            })}
            disabled={isDisabled}
            onClick={onActionClick}
          >
            {actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
