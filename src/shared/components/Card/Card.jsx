'use client';

import { useState, useRef, useEffect } from 'react';
import { ChipCard, Chip, Button } from '@/shared/components';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Card.css.js';

const TYPE = {
  NEXT_JS: 'next_js',
  API: 'api',
  CAREER: 'career',
  MODERN_JS: 'modern_js',
  WEB: 'web',
};

const CATEGORY = {
  DOCUMENT: 'document',
  BLOG: 'blog',
};

function formatDeadlineText(deadline) {
  if (!deadline) return '';
  const [y, m, d] = deadline.split('-');
  const month = parseInt(m, 10);
  const day = parseInt(d, 10);
  return `${y}년 ${month}월 ${day}일 마감`;
}

export function Card({
  study,
  status: statusProp = undefined,
  title: titleProp = undefined,
  chipType: chipTypeProp = undefined,
  chipCategory: chipCategoryProp = undefined,
  deadlineText: deadlineTextProp = undefined,
  personText: personTextProp = undefined,
  onCtaClick = () => {},
  showCta = true,
  showEditMenu = false,
  onEditClick = () => {},
  onDeleteClick = () => {}, // 삭제 핸들러 추가
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  let status = statusProp;
  let title = titleProp;
  let chipType = chipTypeProp;
  let chipCategory = chipCategoryProp;
  let deadlineText = deadlineTextProp;
  let personText = personTextProp;
  let showCtaResolved = showCta;

  if (study) {
    status =
      status ??
      (study.isDeadlinePassed
        ? 'dateEnd'
        : study.isRecruitmentFull
          ? 'recruitEnd'
          : null);
    title = title ?? study.title;
    chipType = chipType ?? (study.type ? TYPE[study.type] : null);
    chipCategory =
      chipCategory ?? (study.category ? CATEGORY[study.category] : null);
    deadlineText =
      deadlineText ??
      (study.deadline ? formatDeadlineText(study.deadline) : '');
    personText =
      personText ??
      (study.maxParticipants != null && study.currentParticipants != null
        ? study.currentParticipants >= study.maxParticipants
          ? `${study.currentParticipants}/${study.maxParticipants} 참여 완료`
          : `${study.currentParticipants}/${study.maxParticipants} 참여중`
        : '');
    showCtaResolved = study.isParticipating === true;
  }

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          {status != null && <ChipCard status={status} />}

          {showEditMenu && (
            <div className={styles.menuContainer} ref={menuRef}>
              <button
                type="button"
                className={styles.editButton}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMenuOpen((prev) => !prev);
                }}
                aria-label="더보기 메뉴"
              >
                <Icon name="meatballsMenu" aria-hidden width={24} height={24} />
              </button>

              {isMenuOpen && (
                <div className={styles.adminDropdownMenu}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      onEditClick();
                    }}
                    className={styles.adminDropdownButton}
                  >
                    수정하기
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      onDeleteClick();
                    }}
                    className={styles.adminDropdownButton}
                  >
                    삭제하기
                  </button>
                </div>
              )}
            </div>
          )}

          {title != null && title !== '' && (
            <h2 className={styles.title}>{title}</h2>
          )}
        </div>

        {(chipType != null || chipCategory != null) && (
          <div className={styles.chipsRow}>
            {chipType != null && <Chip type={chipType} />}
            {chipCategory != null && <Chip category={chipCategory} />}
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <hr className={styles.divider} />
        <div className={styles.metaRow}>
          <div className={styles.metaLeft}>
            {deadlineText && (
              <span className={styles.metaItem}>
                <Icon name="deadlineBlack" aria-hidden />
                {deadlineText}
              </span>
            )}
            {personText && (
              <span className={styles.metaItem}>
                <Icon name="personYellow" aria-hidden />
                {personText}
              </span>
            )}
          </div>
          {showCtaResolved && (
            <Button
              variant="outlineIcon"
              icon={<Icon name="arrowRight" />}
              iconPosition="right"
              onClick={onCtaClick}
            >
              도전 계속하기
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
