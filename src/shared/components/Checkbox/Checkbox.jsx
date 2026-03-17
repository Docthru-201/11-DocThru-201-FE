'use client';

import * as styles from './Checkbox.css.js';

export function Checkbox({
  checked,
  onChange,
  disabled,
  'aria-label': ariaLabel,
  ...rest
}) {
  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
        {...rest}
      />
      <span
        className={styles.box[checked ? 'checked' : 'unchecked']}
        aria-hidden
      >
        {checked && <span className={styles.check} />}
      </span>
    </label>
  );
}
