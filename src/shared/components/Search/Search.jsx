'use client';

import clsx from 'clsx';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Search.css.js';

export function Search({
  placeholder = '챌린지 이름을 검색해보세요',
  value,
  onChange,
  className,
  ...rest
}) {
  return (
    <div className={clsx(styles.root, className)}>
      <div className={styles.inputWrap}>
        <span className={styles.iconWrap} aria-hidden>
          <Icon name="search" width={24} height={24} />
        </span>
        <input
          type="search"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-label="검색"
          {...rest}
        />
      </div>
    </div>
  );
}
