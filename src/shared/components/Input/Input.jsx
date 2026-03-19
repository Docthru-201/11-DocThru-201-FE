import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import {
  dateDisplay,
  dateDisplayFilled,
  dateIconWrap,
  dateInputArea,
  field,
  fieldDate,
  fieldDateError,
  helperText,
  iconButton,
  input,
  inputDate,
  inputRoot,
  label as labelStyle,
} from './Input.css.js';
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
  const isPassword = type === 'password';

  const inputType =
    isPassword && showPasswordToggle ? (visible ? 'text' : 'password') : type;
  const isDate = type === 'date';
  const datePlaceholder = placeholder ?? 'YY/MM/DD';
  const dateDisplayText = isDate ? formatDateToYYMMDD(value) : '';
  const showDatePlaceholder = isDate && !dateDisplayText;

  return (
    <div className={clsx(inputRoot, className)}>
      {label && <label className={labelStyle}>{label}</label>}
      <div
        className={
          isDate
            ? error
              ? fieldDateError
              : fieldDate
            : field[error ? 'error' : 'default']
        }
      >
        {isDate ? (
          <>
            <div className={dateInputArea}>
              <span
                className={clsx(
                  dateDisplay,
                  dateDisplayText && dateDisplayFilled,
                )}
                aria-hidden
              >
                {showDatePlaceholder ? datePlaceholder : dateDisplayText}
              </span>
              <input
                className={inputDate}
                type="date"
                value={value}
                onChange={onChange}
                {...rest}
              />
            </div>
            <span className={dateIconWrap} aria-hidden>
              <Icon name="dateCalendar" width={32} height={32} />
            </span>
          </>
        ) : (
          <input
            className={input}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...rest}
          />
        )}
        {isPassword && showPasswordToggle && (
          <Button
            type="button"
            variant="transparent"
            className={iconButton}
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
      {helper && (
        <p className={helperText[error ? 'error' : 'default']}>{helper}</p>
      )}
    </div>
  );
};
