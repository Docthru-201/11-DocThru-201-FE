'use client';

import { useEffect } from 'react';
import { Icon } from '@/shared/components/Icon';
import { Button } from '@/shared/components';
import * as styles from './Modal.css.js';

export function Modal({
  open,
  onClose,
  variant = 'dialog',
  icon,
  message,
  primaryLabel = '네',
  secondaryLabel = '아니오',
  onPrimary,
  onSecondary,
  title: titleProp,
  submitLabel = '전송',
  onSubmit,
  children,
}) {
  useEffect(() => {
    if (!open) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const isForm = variant === 'form';

  return (
    <div
      className={styles.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      role="dialog"
      aria-modal="true"
      aria-labelledby={isForm ? 'modal-title' : undefined}
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        {isForm ? (
          <>
            <div className={styles.header}>
              <h2 id="modal-title" className={styles.title}>
                {titleProp}
              </h2>
              <Button
                type="button"
                variant="transparent"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="닫기"
                icon={<Icon name="out" width={24} height={24} aria-hidden />}
              />
            </div>
            {children ? (
              <div className={styles.body.default}>{children}</div>
            ) : (
              <div className={styles.body.default}>
                <div className={styles.formContent}>
                  <label className={styles.formLabel} htmlFor="modal-textarea">
                    내용
                  </label>
                  <textarea
                    id="modal-textarea"
                    className={styles.textarea}
                    placeholder="거절사유를 입력해주세요"
                    rows={6}
                  />
                </div>
                <div className={styles.submitRow}>
                  <Button
                    type="button"
                    variant="solid"
                    className={styles.submitButton}
                    onClick={onSubmit}
                  >
                    {submitLabel}
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.body.centered}>
            {icon && <div className={styles.iconSlot}>{icon}</div>}
            {message && <p className={styles.message}>{message}</p>}
            <div className={styles.actions}>
              <Button variant="outline" onClick={onSecondary ?? onClose}>
                {secondaryLabel}
              </Button>
              <Button variant="solid" onClick={onPrimary}>
                {primaryLabel}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
