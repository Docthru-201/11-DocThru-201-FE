'use client';

import { ChipCard, Chip, Button } from '@/shared/components';
import { Icon } from '@/shared/components/Icon';
import * as styles from './Card.css.js';

const STUDY_TYPE_TO_CHIP = {
  NEXT_JS: 'next',
  API: 'api',
  CAREER: 'career',
  MODERN_JS: 'modernJs',
  WEB: 'web',
};

const STUDY_CATEGORY_TO_CHIP = {
  DOCUMENT: 'docs',
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
  status: statusProp,
  title: titleProp,
  chipType: chipTypeProp,
  chipCategory: chipCategoryProp,
  deadlineText: deadlineTextProp,
  personText: personTextProp,

  ctaLabel = '도전 계속하기',
  onCtaClick,
  showCta = true,
  showEditMenu = false,
  onEditClick,
}) {
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
    chipType = chipType ?? (study.type ? STUDY_TYPE_TO_CHIP[study.type] : null);
    chipCategory =
      chipCategory ??
      (study.category ? STUDY_CATEGORY_TO_CHIP[study.category] : null);
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
            <button
              type="button"
              className={styles.editButton}
              onClick={onEditClick}
              aria-label="더보기 메뉴"
            >
              <Icon name="meatballsMenu" aria-hidden />
            </button>
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
              status
            >
              도전 계속하기
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
