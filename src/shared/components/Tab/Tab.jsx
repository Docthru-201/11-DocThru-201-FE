'use client';

import clsx from 'clsx';
import * as styles from './Tab.css.js';

export function Tab({ tabs, value, onChange }) {
  return (
    <ul className={styles.list} role="tablist">
      {tabs.map((t) => {
        const tabValue = typeof t === 'string' ? t : t.value;
        const label = typeof t === 'string' ? t : t.label;
        const isActive = value === tabValue;

        return (
          <li key={tabValue} role="presentation">
            <button
              type="button"
              role="tab"
              aria-selected={isActive}
              className={styles.item[isActive ? 'active' : 'default']}
              onClick={() => onChange?.(tabValue)}
            >
              <span className={styles.content}>
                <span>{label}</span>
                <span
                  className={clsx(
                    styles.indicator,
                    !isActive && styles.indicatorInactive,
                  )}
                  aria-hidden
                />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
