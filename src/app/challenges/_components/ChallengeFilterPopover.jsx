'use client';

import { useState } from 'react';
import { Checkbox } from '@/shared/components/Checkbox';
import { Icon } from '@/shared/components/Icon';
import * as styles from './ChallengeFilterPopover.css.js';
import {
  TYPE_OPTIONS,
  CATEGORY_OPTIONS,
  STATUS_OPTIONS,
} from '@/shared/constants/file.js';

export const DEFAULT_CHALLENGE_FILTER = {
  types: [],
  category: null,
  status: null,
};

export function hasActiveChallengeFilter(f) {
  return f.types.length > 0 || f.category != null || f.status != null;
}

export function filterChallengeItems(items, filter, searchQuery) {
  const q = searchQuery.trim().toLowerCase();
  return items.filter((item) => {
    if (q && !item.title.toLowerCase().includes(q)) return false;
    if (filter.types.length > 0 && !filter.types.includes(item.type))
      return false;
    if (filter.category != null && item.category !== filter.category)
      return false;
    if (filter.status === 'open' && item.isClosed) return false;
    if (filter.status === 'closed' && !item.isClosed) return false;
    return true;
  });
}

// 열릴 때만 부모에서 마운트
// 닫히면 언마운트되어 다음에 열 때 applied 기준으로 draft가 다시 초기화 됨
export function ChallengeFilterPopover({ applied, onApply, onClose }) {
  const [draft, setDraft] = useState(() => applied ?? DEFAULT_CHALLENGE_FILTER);

  function toggleType(typeValue, nextChecked) {
    setDraft((d) => {
      const set = new Set(d.types);
      if (nextChecked) set.add(typeValue);
      else set.delete(typeValue);
      return { ...d, types: [...set] };
    });
  }

  function handleReset() {
    setDraft(DEFAULT_CHALLENGE_FILTER);
  }

  function handleApply() {
    onApply(draft);
    onClose();
  }

  return (
    <div
      className={styles.root}
      role="dialog"
      aria-modal="false"
      aria-labelledby="challenge-filter-title"
    >
      <header className={styles.header}>
        <h2 id="challenge-filter-title" className={styles.title}>
          필터
        </h2>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="필터 닫기"
        >
          <Icon name="out" width={24} height={24} aria-hidden />
        </button>
      </header>

      <section className={styles.section} aria-labelledby="filter-field-label">
        <h3 id="filter-field-label" className={styles.sectionTitle}>
          분야
        </h3>
        <ul className={styles.list}>
          {TYPE_OPTIONS.map(({ value, label }) => (
            <li key={value} className={styles.checkboxRow}>
              <Checkbox
                checked={draft.types.includes(value)}
                onChange={(next) => toggleType(value, next)}
                aria-label={label}
              />
              <span className={styles.checkboxLabel}>{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="filter-doc-type">
        <h3 id="filter-doc-type" className={styles.sectionTitle}>
          문서 타입
        </h3>
        <ul className={styles.radioList}>
          {CATEGORY_OPTIONS.map(({ value, label }) => (
            <li key={value}>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  name="challenge-filter-category"
                  checked={draft.category === value}
                  onChange={() => setDraft((d) => ({ ...d, category: value }))}
                />
                <span className={styles.radioMark} aria-hidden />
                <span className={styles.radioLabel}>{label}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="filter-status">
        <h3 id="filter-status" className={styles.sectionTitle}>
          상태
        </h3>
        <ul className={styles.radioList}>
          {STATUS_OPTIONS.map(({ value, label }) => (
            <li key={value}>
              <label className={styles.radioRow}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  name="challenge-filter-status"
                  checked={draft.status === value}
                  onChange={() => setDraft((d) => ({ ...d, status: value }))}
                />
                <span className={styles.radioMark} aria-hidden />
                <span className={styles.radioLabel}>{label}</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      <footer className={styles.footer}>
        <button type="button" className={styles.btnReset} onClick={handleReset}>
          초기화
        </button>
        <button type="button" className={styles.btnApply} onClick={handleApply}>
          적용하기
        </button>
      </footer>
    </div>
  );
}
