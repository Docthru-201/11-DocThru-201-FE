'use client';

import clsx from 'clsx';
// import { Slot } from '@radix-ui/react-slot';
import * as styles from './Button.css.js';
import { Spinner } from '../Spinner';

export function Button({
  variant = 'solid',
  icon = undefined,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  disabled = false,
  children = undefined,
  ...props
}) {
  const isDisabled = disabled || loading;
  const showIcon = icon && !loading;

  const classes = clsx(
    styles.base,
    styles.variant[variant],
    fullWidth && styles.fullWidth,
    isDisabled && styles.disabled,
  );

  return (
    <button className={classes} {...props}>
      {showIcon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}

      {loading && <Spinner aria-hidden />}

      <span className={styles.content}>{children}</span>

      {showIcon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
}
