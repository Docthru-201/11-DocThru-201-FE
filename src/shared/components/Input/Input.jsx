import { useId, useRef, useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import * as styles from './Input.css.js';
import { Icon } from '@/shared/components/Icon';

function formatDateToYYMMDD(value) {
  if (!value || typeof value !== 'string') return '';
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return value;
  const [, y, m, d] = match;
  return `${y.slice(-2)}/${m}/${d}`;
}

export const Input = ({
  label,
  type = 'text',
  error = false,
  helperText: helper,
  value,
  onChange,
  placeholder,
  showPasswordToggle = false,
  className,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const dateInputId = useId();
  const dateInputRef = useRef(null);
  const isPassword = type === 'password';

  const inputType =
    isPassword && showPasswordToggle ? (visible ? 'text' : 'password') : type;
  const isDate = type === 'date';
  const datePlaceholder = placeholder ?? 'YY/MM/DD';
  const dateDisplayText = isDate ? formatDateToYYMMDD(value) : '';
  const showDatePlaceholder = isDate && !dateDisplayText;

  function openDatePicker() {
    const el = dateInputRef.current;
    if (!el) return;
    if (typeof el.showPicker === 'function') {
      try {
        el.showPicker();
        return;
      } catch {
        /* 보안 제한 등 — focus로 폴백 */
      }
    }
    el.focus();
    el.click();
  }

  return (
    <div className={clsx(styles.inputRoot, className)}>
      {label &&
        (isDate ? (
          <label className={styles.label} htmlFor={dateInputId}>
            {label}
          </label>
        ) : (
          <label className={styles.label}>{label}</label>
        ))}
      {isDate ? (
        <div
          className={error ? styles.fieldDateError : styles.fieldDate}
          onMouseDown={(e) => {
            const inputEl = dateInputRef.current;
            if (
              inputEl &&
              e.target !== inputEl &&
              !inputEl.contains(e.target)
            ) {
              e.preventDefault();
              openDatePicker();
            }
          }}
        >
          <div className={styles.dateInputArea}>
            <span
              className={clsx(
                styles.dateDisplay,
                dateDisplayText && styles.dateDisplayFilled,
              )}
              aria-hidden
            >
              {showDatePlaceholder ? datePlaceholder : dateDisplayText}
            </span>
            <input
              ref={dateInputRef}
              id={dateInputId}
              className={styles.inputDate}
              type="date"
              value={value}
              onChange={onChange}
              {...rest}
            />
          </div>
          <span className={styles.dateIconWrap} aria-hidden>
            <Icon name="dateCalendar" width={32} height={32} />
          </span>
        </div>
      ) : (
        <div className={styles.field[error ? 'error' : 'default']}>
          <input
            className={styles.input}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
          />
          {isPassword && showPasswordToggle && (
            <Button
              type="button"
              variant="transparent"
              className={styles.iconButton}
              onClick={() => setVisible((prev) => !prev)}
              aria-label={visible ? '비밀번호 숨기기' : '비밀번호 보기'}
              icon={
                <Icon
                  name={
                    visible ? 'passwordVisibilityOn' : 'passwordVisibilityOff'
                  }
                  width={24}
                  height={24}
                  aria-hidden
                />
              }
            />
          )}
        </div>
      )}
      {helper && (
        <p className={styles.helperText[error ? 'error' : 'default']}>
          {helper}
        </p>
      )}
    </div>
  );
};
