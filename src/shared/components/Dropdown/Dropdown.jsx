'use client';

import { useState, useRef, useEffect } from 'react';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Dropdown.css.js';

export function Dropdown({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  showLabel = false,
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDisplay = (val) => {
    if (val == null) return null;
    const o = options.find(
      (opt) => (typeof opt === 'string' ? opt : opt.value) === val,
    );
    return o == null ? null : typeof o === 'string' ? o : o.label;
  };
  const displayText = getDisplay(value) ?? placeholder ?? label;

  return (
    <div className={styles.root} ref={ref}>
      {showLabel && label && <p className={styles.label}>{label}</p>}
      <button
        type="button"
        className={styles.trigger[open ? 'active' : 'default']}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={label}
      >
        <span className={styles.triggerLabel}>{displayText}</span>
        <span className={styles.triggerIcon} aria-hidden>
          <Icon
            name={open ? 'toggleUp' : 'toggleDown'}
            width={24}
            height={24}
          />
        </span>
      </button>
      {open && (
        <ul className={styles.list} role="listbox" aria-label={label}>
          {options.map((opt) => {
            const itemValue = typeof opt === 'string' ? opt : opt.value;
            const itemLabel = typeof opt === 'string' ? opt : opt.label;
            return (
              <li
                key={itemValue}
                role="option"
                aria-selected={value === itemValue}
                className={styles.item}
                onClick={() => {
                  onChange?.(itemValue);
                  setOpen(false);
                }}
              >
                {itemLabel}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
