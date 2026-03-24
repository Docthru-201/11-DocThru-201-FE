'use client';

import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Sort.css.js';

export function Sort({
  label = '승인 대기',
  active = false,
  onClick,
  variant = 'sort',
  className,
  ...rest
}) {
  if (variant === 'filter') {
    return (
      <button
        type="button"
        className={clsx(
          styles.rootFilter,
          active && styles.rootFilterActive,
          className,
        )}
        onClick={onClick}
        aria-pressed={active}
        aria-expanded={active}
        aria-haspopup="dialog"
        {...rest}
      >
        <span className={styles.label[active ? 'active' : 'default']}>
          {label}
        </span>
        <span className={styles.filterIconWrap}>
          <Icon name="filterBlack" width={16} height={16} aria-hidden />
        </span>
      </button>
    );
  }

  return (
    <Button
      type="button"
      variant="transparent"
      className={clsx(styles.root, className)}
      onClick={onClick}
      aria-pressed={active}
      icon={<Icon name="toggleDown" width={24} height={24} aria-hidden />}
      iconPosition="right"
      {...rest}
    >
      <span className={styles.label[active ? 'active' : 'default']}>
        {label}
      </span>
    </Button>
  );
}
