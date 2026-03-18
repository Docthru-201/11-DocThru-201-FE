'use client';

import { Button } from '@/shared/components/Button';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Sort.css.js';

export function Sort({
  label = '승인 대기',
  active = false,
  onClick,
  ...rest
}) {
  return (
    <Button
      type="button"
      variant="transparent"
      className={styles.root}
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
