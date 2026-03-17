'use client';

import clsx from 'clsx';
// import { Slot } from '@radix-ui/react-slot';
import * as styles from './Button.css.js';
import { Spinner } from '../Spinner/Spinner';

export function Button({
  // type = 'button',
  // asChild = false,
  variant = 'solid',
  icon,
  iconPosition = 'right',
  loading = false,
  fullWidth = false,
  disabled = false,
  children,
  className,
  ...props
}) {
  const isDisabled = disabled || loading;
  const showIcon = icon && !loading;

  const classes = clsx(
    styles.base,
    styles.variant[variant],
    fullWidth && styles.fullWidth,
    isDisabled && styles.disabled,
    className,
  );

  // const Component = asChild ? Slot : 'button';

  return (
    <button
      // type={!asChild ? type : undefined}
      // disabled={!asChild ? isDisabled : undefined}
      className={classes}
      {...props}
    >
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
