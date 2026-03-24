'use client';

import { Icon } from '@/shared/components/Icon';
import { Control } from './Control.jsx';
import * as styles from './PageIndicator.css.js';

const WINDOW_SIZE = 5;

export const PageIndicator = ({ current, total, onChange }) => {
  const currentWindowIndex = Math.floor((current - 1) / WINDOW_SIZE);
  const start = currentWindowIndex * WINDOW_SIZE + 1;
  const end = Math.min(start + WINDOW_SIZE - 1, total);
  const windowLength = end - start + 1;

  const handlePrev = () => {
    if (start > 1) {
      onChange(start - 1);
    }
  };

  const handleNext = () => {
    if (end < total) {
      onChange(end + 1);
    }
  };

  const canPrev = start > 1;
  const canNext = end < total;

  return (
    <div className={styles.pageIndicator}>
      <button
        type="button"
        onClick={handlePrev}
        disabled={!canPrev}
        aria-label="이전 페이지"
        className={styles.arrowButton}
      >
        <Icon name="chevronLeftActive" width={40} height={40} aria-hidden />
      </button>
      {Array.from({ length: windowLength }).map((_, i) => {
        const step = start + i;
        return (
          <Control
            key={step}
            variant="page"
            selected={step === current}
            onClick={() => onChange(step)}
          >
            {step}
          </Control>
        );
      })}
      <button
        onClick={handleNext}
        disabled={!canNext}
        type="button"
        aria-label="다음 페이지"
        className={styles.arrowButton}
      >
        <Icon name="chevronRightActive" width={40} height={40} aria-hidden />
      </button>
    </div>
  );
};
