'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChipCard, Chip, Button } from '@/shared/components';
import { Icon } from '@/shared/components/Icon';
import { useMyWork } from '@/features/works/hooks/useMyWork'; // 추가
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
  challengeId: challengeIdProp = undefined,
  status: statusProp = undefined,
  title: titleProp = undefined,
  chipType: chipTypeProp = undefined,
  chipCategory: chipCategoryProp = undefined,
  deadlineText: deadlineTextProp = undefined,
  personText: personTextProp = undefined,
  onCtaClick = () => {},
  showCta = true,
  showEditMenu = false,
  /** 마이페이지 등: 더보기(⋯) 버튼만 살짝 작게 */
  compactEditMenu = false,
  onEditClick = () => {},
  onDeleteClick = () => {},
  tab = undefined, // ← 추가
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

  const router = useRouter();
  const isDoneTab = tab === 'done'; // ← 추가

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
    // done 탭은 항상 버튼 표시, participating은 기존 로직 유지
    showCtaResolved = isDoneTab ? true : study.isParticipating === true;
  }

  const challengeId = challengeIdProp ?? study?.id;
  const isCardNavigable = challengeId != null && challengeId !== '';

  // done 탭일 때만 myWork 조회 (참여중 탭에서는 호출 안 함)
  const { myWork } = useMyWork(isDoneTab ? challengeId : null); // ← 추가
  const workId = myWork?.data?.id ?? myWork?.id ?? null; // ← 추가

  const goToChallenge = () => {
    if (!isCardNavigable) return;
    router.push(`/challenges/${challengeId}`);
  };

  // 내 작업물 보기 클릭 핸들러 (done 탭 전용)
  const goToMyWork = () => {
    if (!challengeId) return;
    if (workId) {
      router.push(`/challenges/${challengeId}/work/${workId}`);
    } else {
      // workId를 못 가져온 경우 챌린지 상세로 fallback
      router.push(`/challenges/${challengeId}`);
    }
  };

  return (
    <article
      className={`${styles.card}${isCardNavigable ? ` ${styles.cardClickable}` : ''}`}
      onClick={isCardNavigable ? goToChallenge : undefined}
      onKeyDown={
        isCardNavigable
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToChallenge();
              }
            }
          : undefined
      }
      role={isCardNavigable ? 'link' : undefined}
      tabIndex={isCardNavigable ? 0 : undefined}
    >
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          {status != null && <ChipCard status={status} />}

          {showEditMenu && (
            <div className={styles.menuContainer} ref={menuRef}>
              <button
                type="button"
                className={`${styles.editButton}${compactEditMenu ? ` ${styles.editButtonCompact}` : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMenuOpen((prev) => !prev);
                }}
                aria-label="더보기 메뉴"
              >
                <Icon
                  name="meatballsMenu"
                  aria-hidden
                  width={compactEditMenu ? 20 : 24}
                  height={compactEditMenu ? 20 : 24}
                />
              </button>

              {isMenuOpen && (
                <div
                  className={`${styles.adminDropdownMenu}${compactEditMenu ? ` ${styles.adminDropdownMenuCompact}` : ''}`}
                >
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

          {showCtaResolved &&
            (isDoneTab ? (
              // 완료한 챌린지: 내 작업물 보기 버튼
              <Button
                variant="outlineIcon"
                icon={
                  <Icon
                    name="documentMyWork"
                    width={20}
                    height={20}
                    aria-hidden
                  />
                }
                iconPosition="right"
                onClick={(e) => {
                  e.stopPropagation();
                  goToMyWork();
                }}
              >
                내 작업물 보기
              </Button>
            ) : (
              // 참여중인 챌린지: 기존 도전 계속하기 버튼
              <Button
                variant="outlineIcon"
                icon={<Icon name="arrowRight" />}
                iconPosition="right"
                onClick={(e) => {
                  e.stopPropagation();
                  onCtaClick();
                  if (isCardNavigable) {
                    goToChallenge();
                  }
                }}
              >
                도전 계속하기
              </Button>
            ))}
        </div>
      </div>
    </article>
  );
}
