'use client';

import clsx from 'clsx';
import * as styles from './TextBox.css.js';

export function TextBox({
  placeholder = '피드백을 남겨주세요',
  value,
  onChange,
  maxHeight,
  rows = 4,
  ...rest
}) {
  return (
    <div className={styles.root}>
      <textarea
        className={styles.textarea[maxHeight ? 'max' : 'default']}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        {...rest}
      />
    </div>
  );
}
