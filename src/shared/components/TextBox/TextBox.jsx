'use client';

import * as styles from './TextBox.css.js';

export function TextBox({
  label,
  placeholder = '피드백을 남겨주세요',
  value,
  onChange,
  maxHeight,
  rows = 4,
  ...rest
}) {
  const isLarge =
    Boolean(maxHeight) || (typeof rows === 'number' && rows >= 10);

  return (
    <div className={styles.root}>
      {label && <p className={styles.label}>{label}</p>}
      <textarea
        className={
          styles.textarea[isLarge ? 'large' : maxHeight ? 'max' : 'default']
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        {...rest}
      />
    </div>
  );
}
