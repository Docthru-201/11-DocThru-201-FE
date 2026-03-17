import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import {
  field,
  helperText,
  iconButton,
  input,
  inputRoot,
  label as labelStyle,
} from './Input.css.js';
import { Icon } from '@/shared/components/Icon';

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

  return (
    <div className={clsx(inputRoot, className)}>
      {label && <label className={labelStyle}>{label}</label>}
      <div className={field[error ? 'error' : 'default']}>
        <input
          className={input}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
        {/* {type === 'date' && (
          <Icon
            name="signup-calendar"
            width={32}
            height={32}
            aria-hidden="true"
          />
        )} */}
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
                  visible ? 'password_visibility-on' : 'password-visibility-off'
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
