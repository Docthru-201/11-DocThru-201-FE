'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useAuthStore } from '@/shared/store/useAuthStore';
import { getChallengesAll } from '@/apis/challenges';
import { deleteChallengeAction } from '@/shared/apis/admin.js';

import {
  Search,
  Sort,
  Card,
  PageIndicator,
  Icon,
  Button,
} from '@/shared/components';

import ModalDecline from '@/app/challenges/[id]/_components/ModalDecline';
import ModalSuccess from '@/app/challenges/[id]/_components/ModalSuccess';
import ModalError from '@/app/challenges/[id]/_components/ModalError';

import {
  ChallengeFilterPopover,
  DEFAULT_CHALLENGE_FILTER,
  filterChallengeItems,
  hasActiveChallengeFilter,
} from './_components/ChallengeFilterPopover';

import { ChallengeListSkeleton } from '@/shared/components/Skeleton';

import * as styles from './page.css.js';

const PAGE_SIZE = 5;

export default function ChallengesPage({ hideNewChallengeButton = false }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);

  const [searchValue, setSearchValue] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState(DEFAULT_CHALLENGE_FILTER);

  const [targetChallenge, setTargetChallenge] = useState(null);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const filterWrapRef = useRef(null);
  const skipScrollToTopRef = useRef(true);

  const rawPageParam = Number(searchParams.get('page'));
  const currentPageFromUrl =
    Number.isFinite(rawPageParam) && rawPageParam >= 1
      ? Math.floor(rawPageParam)
      : 1;

  const replacePageInUrl = useCallback(
    (page) => {
      const p = Math.max(1, Math.floor(Number(page)) || 1);
      const params = new URLSearchParams(searchParams.toString());
      if (p <= 1) {
        params.delete('page');
      } else {
        params.set('page', String(p));
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const {
    data: challengeItems = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['challenges', 'list'],
    queryFn: () => getChallengesAll(),
    staleTime: 60 * 1000,
  });

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
    try {
      await deleteChallengeAction(targetChallenge.id, declineMessage);
      setIsSuccessModalOpen(true);
      queryClient.invalidateQueries({ queryKey: ['challenges', 'list'] });
    } catch (error) {
      console.error('삭제 실패 상세 원인:', error);
      setErrorMessage('삭제 처리 중 오류가 발생했습니다.');
      setErrorModalOpen(true);
    } finally {
      setIsDeclineModalOpen(false);
    }
  };

  useEffect(() => {
    if (!filterOpen) return undefined;
    function handlePointerDown(event) {
      const el = filterWrapRef.current;
      const target = event.target;
      if (el && target instanceof Node && !el.contains(target)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [filterOpen]);

  const filteredChallenges = useMemo(
    () => filterChallengeItems(challengeItems, appliedFilter, searchValue),
    [challengeItems, appliedFilter, searchValue],
  );

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(filteredChallenges.length / PAGE_SIZE)),
    [filteredChallenges.length],
  );

  const safePage = Math.min(currentPageFromUrl, totalPages);

  useEffect(() => {
    if (totalPages < 1) return;
    if (currentPageFromUrl > totalPages) {
      replacePageInUrl(totalPages);
    }
  }, [currentPageFromUrl, totalPages, replacePageInUrl]);

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
      replacePageInUrl(p);
    },
    [currentPageFromUrl, replacePageInUrl, totalPages],
  );

  const displayedChallenges = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredChallenges.slice(start, start + PAGE_SIZE);
  }, [filteredChallenges, safePage]);

  const filterButtonActive =
    filterOpen || hasActiveChallengeFilter(appliedFilter);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>챌린지 목록</h1>
          {user && !hideNewChallengeButton && (
            <Link href="/challenges/new">
              <Button
                variant="solidIcon"
                icon={<Icon name="plus" width={16} height={16} aria-hidden />}
                iconPosition="right"
              >
                신규 챌린지 신청
              </Button>
            </Link>
          )}
        </header>

        <div className={styles.toolbar}>
          <div className={styles.filterSlot} ref={filterWrapRef}>
            <Sort
              variant="filter"
              label="필터"
              className=""
              active={filterButtonActive}
              onClick={() => setFilterOpen((prev) => !prev)}
            />
            {filterOpen && (
              <ChallengeFilterPopover
                applied={appliedFilter}
                onApply={(next) => {
                  setAppliedFilter(next);
                  replacePageInUrl(1);
                }}
                onClose={() => setFilterOpen(false)}
              />
            )}
          </div>
          <Search
            className={styles.searchField}
            placeholder="챌린지 이름을 검색해보세요"
            value={searchValue}
            onChange={(v) => {
              setSearchValue(v);
              replacePageInUrl(1);
            }}
          />
        </div>

        {isPending && <ChallengeListSkeleton />}
        {isError && (
          <p className={styles.feedback} role="alert">
            {error?.message ?? '챌린지 목록을 불러오지 못했습니다.'}
          </p>
        )}

        {!isPending && !isError && (
          <div className={styles.cardList}>
            {displayedChallenges.map((study) => (
              <Link
                key={study.id}
                href={`/challenges/${study.id}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <Card
                  study={study}
                  showEditMenu={user?.role === 'ADMIN'}
                  onEditClick={() => {
                    handleEdit(study);
                  }}
                  onDeleteClick={() => {
                    handleDeleteClick(study);
                  }}
                  onCtaClick={() => {
                    router.push(`/challenges/${study.id}`);
                  }}
                />
              </Link>
            ))}
          </div>
        )}

        {!isPending && !isError && filteredChallenges.length > 0 && (
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
