'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMyChallenges } from '@/apis/challenges';
import { deleteChallengeAction } from '@/shared/apis/admin.js';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { formatDate } from '@/shared/utils/formatDate.js';
import {
  Search,
  Tab,
  Card,
  Button,
  Icon,
  PageIndicator,
  Sort,
  Chip,
} from '@/shared/components';
import {
  ChallengeListSkeleton,
  AppliedTableSkeleton,
} from '@/shared/components/Skeleton';
import ModalDecline from '@/app/challenges/[id]/_components/ModalDecline';
import ModalSuccess from '@/app/challenges/[id]/_components/ModalSuccess';
import ModalError from '@/app/challenges/[id]/_components/ModalError';
import * as styles from '../challenges/page.css.js';
import * as appliedStyles from './appliedTable.css.js';

const PAGE_SIZE = 5;

const EMPTY_TAB_COPY = {
  participating: '참여중인 챌린지가 없습니다.',
  done: '완료한 챌린지가 없습니다.',
  applied: '신청한 챌린지가 없습니다.',
};

const SORT_OPTIONS = [
  { value: 'all', label: '승인 대기' },
  { value: 'approved', label: '신청 승인' },
  { value: 'rejected', label: '신청 거절' },
  { value: 'apply_asc', label: '신청 시간 빠른순' },
  { value: 'apply_desc', label: '신청 시간 느린순' },
  { value: 'deadline_asc', label: '마감 기한 빠른순' },
  { value: 'deadline_desc', label: '마감 기한 느린순' },
];

function mapType(t) {
  switch (t) {
    case 'NEXT_JS':
      return 'Next.js';
    case 'API':
      return 'API';
    case 'CAREER':
      return 'Career';
    case 'MODERN_JS':
      return 'Modern JS';
    case 'WEB':
      return 'Web';
    default:
      return t;
  }
}

function mapCategory(c) {
  switch (c) {
    case 'DOCUMENT':
      return '공식문서';
    case 'BLOG':
      return '블로그';
    default:
      return c;
  }
}

function statusChip(status) {
  if (!status) return 'pending';
  return status.toLowerCase();
}

export default function MyChallengesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const user = useAuthStore((state) => state.user);

  const [searchValue, setSearchValue] = useState('');
  const tabParam = searchParams.get('tab');
  const value =
    tabParam === 'applied' ||
    tabParam === 'participating' ||
    tabParam === 'done'
      ? tabParam
      : 'participating';
  const rawPageParam = Number(searchParams.get('page'));
  const currentPageFromUrl =
    Number.isFinite(rawPageParam) && rawPageParam >= 1
      ? Math.floor(rawPageParam)
      : 1;
  const skipScrollToTopRef = useRef(true);

  const [sortValue, setSortValue] = useState('all');
  const [sortOpen, setSortOpen] = useState(false);

  const [targetChallenge, setTargetChallenge] = useState(null);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const replaceSearchParams = useCallback(
    (mutate) => {
      const params = new URLSearchParams(searchParams.toString());
      mutate(params);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const handleTabChange = (next) => {
    setSortOpen(false);
    replaceSearchParams((params) => {
      params.set('tab', next);
      params.delete('page');
    });
  };

  const handleSearchChange = (next) => {
    setSearchValue(next);
    replaceSearchParams((params) => {
      params.delete('page');
    });
  };

  const handleEdit = (challenge) => {
    if (challenge.isClosed) {
      setErrorMessage('완료된 챌린지는 수정이 불가능합니다.');
      setErrorModalOpen(true);
    } else {
      router.push(`/admin/challenges/${challenge.id}/edit`);
    }
  };

  const handleDeleteClick = (challenge) => {
    if (challenge.isClosed || challenge.status === 'DELETED') {
      setErrorMessage('완료되었거나 이미 삭제된 챌린지는 삭제가 불가능합니다.');
      setErrorModalOpen(true);
      return;
    }
    setTargetChallenge(challenge);
    setIsDeclineModalOpen(true);
  };

  const handleConfirmDelete = async (declineMessage) => {
    if (!targetChallenge) return;
    const result = await deleteChallengeAction(
      targetChallenge.id,
      declineMessage,
    );
    setIsDeclineModalOpen(false);
    if (!result.ok) {
      console.error('삭제 실패:', result.message);
      setErrorMessage(result.message || '삭제 처리 중 오류가 발생했습니다.');
      setErrorModalOpen(true);
      return;
    }
    setIsSuccessModalOpen(true);
    queryClient.invalidateQueries({ queryKey: ['challenges', 'my'] });
  };

  const myChallengesTabs = [
    { value: 'participating', label: '참여중인 챌린지' },
    { value: 'done', label: '완료한 챌린지' },
    { value: 'applied', label: '신청한 챌린지' },
  ];

  const {
    data: challengeItems = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['challenges', 'my', value],
    queryFn: async () => {
      const res = await getMyChallenges({ tab: value });
      return res?.data?.items ?? [];
    },
    staleTime: 60 * 1000,
  });

  const appliedRows = useMemo(() => {
    if (value !== 'applied') return [];
    return challengeItems
      .map((item) => ({
        id: item.id,
        no: item.serialNumber,
        field: mapType(item.type),
        category: mapCategory(item.category),
        title: item.title,
        maxParticipants: item.maxParticipants,
        appliedAt: formatDate(item.createdAt),
        deadline: formatDate(item.deadline),
        status: item.status,
        createdAt: item.createdAt,
      }))
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }, [value, challengeItems]);

  const filteredAppliedRows = useMemo(() => {
    const sortRows = [...appliedRows]
      .filter((row) => {
        if (sortValue === 'pending') return row.status === 'PENDING';
        if (sortValue === 'approved') return row.status === 'APPROVED';
        if (sortValue === 'rejected') return row.status === 'REJECTED';
        return true;
      })
      .sort((a, b) => {
        const createdA = new Date(a.createdAt).getTime();
        const createdB = new Date(b.createdAt).getTime();
        const deadlineA = new Date(a.deadline).getTime();
        const deadlineB = new Date(b.deadline).getTime();

        switch (sortValue) {
          case 'pending':
          case 'approved':
          case 'rejected':
            return createdB - createdA;
          case 'apply_asc':
            return createdA - createdB;
          case 'apply_desc':
          case 'all':
            return createdB - createdA;
          case 'deadline_asc':
            return deadlineA - deadlineB;
          case 'deadline_desc':
            return deadlineB - deadlineA;
          default:
            return 0;
        }
      });

    const q = searchValue.trim().toLowerCase();
    if (!q) return sortRows;
    return sortRows.filter((row) => row.title.toLowerCase().includes(q));
  }, [appliedRows, sortValue, searchValue]);

  const filteredChallenges = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return challengeItems;
    return challengeItems.filter((item) =>
      item.title.toLowerCase().includes(q),
    );
  }, [challengeItems, searchValue]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredChallenges.length / PAGE_SIZE)),
    [filteredChallenges.length],
  );

  const safePage = Math.min(currentPageFromUrl, totalPages);

  useEffect(() => {
    if (totalPages < 1) return;
    if (currentPageFromUrl > totalPages) {
      replaceSearchParams((params) => {
        if (totalPages === 1) {
          params.delete('page');
        } else {
          params.set('page', String(totalPages));
        }
      });
    }
  }, [currentPageFromUrl, totalPages, replaceSearchParams]);

  useEffect(() => {
    if (skipScrollToTopRef.current) {
      skipScrollToTopRef.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [safePage]);

  const setPage = useCallback(
    (next) => {
      const cap = Math.max(1, totalPages);
      const resolved =
        typeof next === 'function'
          ? next(Math.min(currentPageFromUrl, cap))
          : next;
      const p = Math.max(1, Math.min(Math.floor(Number(resolved)) || 1, cap));
      replaceSearchParams((params) => {
        if (p <= 1) {
          params.delete('page');
        } else {
          params.set('page', String(p));
        }
      });
    },
    [currentPageFromUrl, replaceSearchParams, totalPages],
  );

  const displayedChallenges = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredChallenges.slice(start, start + PAGE_SIZE);
  }, [filteredChallenges, safePage]);

  const currentSortLabel =
    SORT_OPTIONS.find((o) => o.value === sortValue)?.label ?? '승인 대기';

  const showCardList = value === 'participating' || value === 'done';

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.headerMy}>
          <h1 className={styles.title}>나의 챌린지</h1>
          <Link href="/challenges/new">
            <Button
              variant="solidIcon"
              icon={<Icon name="plus" width={16} height={16} aria-hidden />}
              iconPosition="right"
            >
              신규 챌린지 신청
            </Button>
          </Link>
        </header>

        <div className={styles.tabBar}>
          <Tab
            tabs={myChallengesTabs}
            value={value}
            onChange={handleTabChange}
          />
        </div>

        {showCardList && (
          <div className={styles.toolbar}>
            <Search
              className={styles.searchField}
              placeholder="챌린지 이름을 검색해보세요"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </div>
        )}

        {value === 'applied' && (
          <div className={appliedStyles.appliedWrap}>
            <div className={appliedStyles.filterRow}>
              <Search
                className={appliedStyles.searchApplied}
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="챌린지 이름을 검색해보세요"
              />
              <div className={appliedStyles.sortWrap}>
                <Sort
                  className={appliedStyles.sort}
                  label={currentSortLabel}
                  active={sortOpen}
                  onClick={() => setSortOpen((open) => !open)}
                />
                {sortOpen && (
                  <div className={appliedStyles.sortDropdown}>
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={appliedStyles.sortOption}
                        onClick={() => {
                          setSortValue(opt.value);
                          setSortOpen(false);
                          replaceSearchParams((params) => {
                            params.delete('page');
                          });
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {isPending && (
          <div
            className={styles.listSkeletonWrap}
            role="status"
            aria-live="polite"
            aria-label="나의 챌린지 목록 로딩 중"
          >
            {value === 'applied' ? (
              <AppliedTableSkeleton />
            ) : (
              <ChallengeListSkeleton count={5} />
            )}
          </div>
        )}
        {isError && (
          <p className={styles.feedback} role="alert">
            {error?.message ?? '나의 챌린지를 불러오지 못했습니다.'}
          </p>
        )}

        {!isPending && !isError && showCardList && (
          <>
            {challengeItems.length === 0 ? (
              <p className={styles.emptyState}>{EMPTY_TAB_COPY[value]}</p>
            ) : filteredChallenges.length === 0 ? (
              <p className={styles.emptyState}>검색 결과가 없습니다.</p>
            ) : (
              <div className={styles.cardList}>
                {displayedChallenges.map((study) => (
                  <Card
                    key={study.id}
                    study={study}
                    onCtaClick={() => {}}
                    showEditMenu={
                      user?.id != null && study.authorId === user.id
                    }
                    compactEditMenu
                    onEditClick={() => handleEdit(study)}
                    onDeleteClick={() => handleDeleteClick(study)}
                    tab={value}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {!isPending && !isError && value === 'applied' && (
          <div className={appliedStyles.tableSection}>
            {challengeItems.length === 0 ? (
              <p className={styles.emptyState}>{EMPTY_TAB_COPY.applied}</p>
            ) : filteredAppliedRows.length === 0 ? (
              <p className={styles.emptyState}>검색 결과가 없습니다.</p>
            ) : (
              <table className={appliedStyles.table}>
                <thead>
                  <tr>
                    <th
                      className={`${appliedStyles.headerCell} ${appliedStyles.headerFirst}`}
                    >
                      No.
                    </th>
                    <th className={appliedStyles.headerCell}>분야</th>
                    <th className={appliedStyles.headerCell}>카테고리</th>
                    <th className={appliedStyles.headerCell}>챌린지 제목</th>
                    <th className={appliedStyles.headerCell}>모집 인원</th>
                    <th className={appliedStyles.headerCell}>신청일</th>
                    <th className={appliedStyles.headerCell}>마감 기한</th>
                    <th
                      className={`${appliedStyles.headerCell} ${appliedStyles.headerLast}`}
                    >
                      상태
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={8}
                      className={appliedStyles.headerGapCell}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppliedRows.map((row) => (
                    <tr
                      key={row.id ?? String(row.no)}
                      className={appliedStyles.row}
                    >
                      <td className={appliedStyles.bodyCell}>{row.no}</td>
                      <td className={appliedStyles.bodyCell}>{row.field}</td>
                      <td className={appliedStyles.bodyCell}>{row.category}</td>
                      <td className={appliedStyles.bodyTitleCell}>
                        {row.title}
                      </td>
                      <td className={appliedStyles.bodyCell}>
                        {row.maxParticipants}
                      </td>
                      <td className={appliedStyles.bodyCell}>
                        {row.appliedAt}
                      </td>
                      <td className={appliedStyles.bodyCell}>{row.deadline}</td>
                      <td className={appliedStyles.bodyCell}>
                        <Chip status={statusChip(row.status)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {!isPending &&
          !isError &&
          showCardList &&
          filteredChallenges.length > 0 && (
            <div className={styles.paginationWrap}>
              <PageIndicator
                current={safePage}
                total={totalPages}
                onChange={setPage}
              />
            </div>
          )}
      </main>

      <ModalError
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title="알림"
        message={errorMessage}
      />
      {isDeclineModalOpen && (
        <ModalDecline
          text="삭제"
          onClose={() => {
            setIsDeclineModalOpen(false);
            setTargetChallenge(null);
          }}
          onConfirm={handleConfirmDelete}
        />
      )}
      {isSuccessModalOpen && (
        <ModalSuccess
          duration={1000}
          text="삭제가 완료되었습니다!"
          onClose={() => {
            setIsSuccessModalOpen(false);
            setTargetChallenge(null);
          }}
        />
      )}
    </div>
  );
}
