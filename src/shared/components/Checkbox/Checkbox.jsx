'use client';

import { useState } from 'react';
import * as styles from './Checkbox.css.js';

export function Checkbox({
  checked,
  onChange,
  disabled,
  'aria-label': ariaLabel,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internalChecked, setInternalChecked] = useState(false);
  const value = isControlled ? checked : internalChecked;

  const handleChange = (next) => {
    if (!isControlled) {
      setInternalChecked(next);
    }
    onChange?.(next);
  };

  return (
    <label className={styles.root}>
      <input
        type="checkbox"
        className={styles.input}
        checked={value}
        onChange={(e) => handleChange(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
        {...rest}
      />
      <span className={styles.box[value ? 'checked' : 'unchecked']} aria-hidden>
        {value && <span className={styles.check} />}
      </span>
    </label>
  );
}
