'use client';

import { Button } from '@/shared/components/Button';
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
      <Button
        type="button"
        variant="transparent"
        className={styles.arrowButton}
        onClick={handlePrev}
        disabled={!canPrev}
        aria-label="이전 페이지"
        icon={
          <Icon name="chevronLeftActive" width={40} height={40} aria-hidden />
        }
      />
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
      <Button
        type="button"
        variant="transparent"
        className={styles.arrowButton}
        onClick={handleNext}
        disabled={!canNext}
        aria-label="다음 페이지"
        icon={<Icon name="arrowRight" width={40} height={40} aria-hidden />}
      />
    </div>
  );
};
