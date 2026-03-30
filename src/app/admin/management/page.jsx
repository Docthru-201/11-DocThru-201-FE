'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { Search } from '@/shared/components/Search';
import { Sort } from '@/shared/components/Sort';
import { Spinner } from '@/shared/components/Spinner';
import { ITEM_COUNT, SORT_OPTIONS } from '@/shared/constants/file.js';

import ListHead from '@/app/admin/_components/ListHead';
import ListRow from '@/app/admin/_components/ListRow';
import Pagination from '@/app/admin/_components/Pagination';

import { getChallengesAction } from '@/shared/apis/admin.js';
import * as styles from './Page.css.js';

export default function AdminManagementPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') || 'createdAt_desc';
  const urlKeyword = searchParams.get('keyword') || '';

  const [localKeyword, setLocalKeyword] = useState(urlKeyword);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const popoverRef = useRef(null);
  const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['admin-challenges', page, sort, urlKeyword],
    queryFn: () =>
      getChallengesAction({
        params: { page, pageSize, sort, keyword: urlKeyword },
      }),
    staleTime: 0,
    refetchOnWindowFocus: true,
    select: (res) => ({
      list: res.challenges || [],
      totalCount: res.pagination?.totalCount || 0,
    }),
  });

  const updateQueryParams = useCallback(
    (updates) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, value]) => {
        if (value) params.set(key, value.toString());
        else params.delete(key);
      });
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localKeyword !== urlKeyword) {
        updateQueryParams({ keyword: localKeyword, page: 1 });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [localKeyword, updateQueryParams, urlKeyword]);

  useEffect(() => {
    setLocalKeyword(urlKeyword);
  }, [urlKeyword]);

  const currentSortLabel =
    SORT_OPTIONS.find((opt) => opt.value === sort)?.label || '정렬';

  const handleSelectSort = (value) => {
    updateQueryParams({ sort: value, page: 1 });
    setIsSortOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 신청 관리</h1>

      <div className={styles.searchSortWrapper}>
        <Search
          value={localKeyword}
          className={styles.searchInput}
          onChange={(val) => setLocalKeyword(val)}
        />

        <div className={styles.sortWrapper} ref={popoverRef}>
          <Sort
            className=""
            label={currentSortLabel}
            active={isSortOpen}
            onClick={() => setIsSortOpen((prev) => !prev)}
          />

          {isSortOpen && (
            <div className={styles.sortPopover}>
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.sortOptionButton} ${sort === option.value ? styles.activeOption : ''}`}
                  onClick={() => handleSelectSort(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {isError ? (
        <div className={styles.errorWrapper}>
          <div className={styles.errorBox}>
            <p>⚠️ {error.message}</p>
            <button onClick={() => window.location.reload()}>다시 시도</button>
          </div>
        </div>
      ) : isLoading ? (
        <div className={styles.loadingWrapper}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.listSection}>
          <ListHead />
          {data?.list.length > 0 ? (
            data.list.map((item) => (
              <Link key={item.id} href={`/admin/management/${item.id}`}>
                <ListRow data={item} />
              </Link>
            ))
          ) : (
            <div className={styles.emptyState}>조회된 데이터가 없습니다.</div>
          )}

          {data?.totalCount > 0 && (
            <div className={styles.paginationContainer}>
              <Pagination
                totalCount={data.totalCount}
                currentPage={page}
                pageSize={pageSize}
                onPageChange={(newPage) => updateQueryParams({ page: newPage })}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
// 'use client';

// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// import Link from 'next/link';

// import { Search } from '@/shared/components/Search';
// import { Sort } from '@/shared/components/Sort';
// import { Spinner } from '@/shared/components/Spinner';
// import { ITEM_COUNT, SORT_OPTIONS } from '@/shared/constants/file.js';

// import ListHead from '@/app/admin/_components/ListHead';
// import ListRow from '@/app/admin/_components/ListRow';
// import Pagination from '@/app/admin/_components/Pagination';

// import { getChallengesAction } from '@/shared/apis/admin.js';
// import * as styles from './Page.css.js';

// export default function AdminManagementPage() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   // URL 상태 읽기
//   const page = Number(searchParams.get('page')) || 1;
//   const sort = searchParams.get('sort') || 'createdAt_desc';
//   const urlKeyword = searchParams.get('keyword') || '';

//   // 한글 입력을 위한 로컬 상태
//   // URL과 별개로 입력창의 텍스트를 실시간으로 관리
//   const [localKeyword, setLocalKeyword] = useState(urlKeyword);

//   const [challenges, setChallenges] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [totalCount, setTotalCount] = useState(0);
//   const [isSortOpen, setIsSortOpen] = useState(false);

//   const popoverRef = useRef(null);
//   const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;

//   // URL 업데이트 함수
//   const updateQueryParams = useCallback(
//     (updates) => {
//       const params = new URLSearchParams(searchParams.toString());
//       Object.entries(updates).forEach(([key, value]) => {
//         if (value) params.set(key, value.toString());
//         else params.delete(key);
//       });
//       router.push(`${pathname}?${params.toString()}`, { scroll: false });
//     },
//     [pathname, router, searchParams],
//   );

//   // 디바운스 적용: 입력이 멈추고 0.5초 뒤에 URL을 변경
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (localKeyword !== urlKeyword) {
//         updateQueryParams({ keyword: localKeyword, page: 1 });
//       }
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [localKeyword, updateQueryParams, urlKeyword]);

//   // URL의 키워드가 외부(뒤로가기 등)에 의해 바뀌면 로컬 상태도 동기화
//   useEffect(() => {
//     setLocalKeyword(urlKeyword);
//   }, [urlKeyword]);

//   // 데이터 페칭
//   const fetchChallenges = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const response = await getChallengesAction({
//         params: { page, pageSize, sort, keyword: urlKeyword },
//       });
//       setChallenges(response.challenges || []);
//       setTotalCount(response.pagination?.totalCount || 0);
//     } catch (error) {
//       console.error('데이터 로드 실패:', error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [page, pageSize, sort, urlKeyword]);

//   useEffect(() => {
//     fetchChallenges();
//   }, [fetchChallenges]);

//   const currentSortLabel =
//     SORT_OPTIONS.find((opt) => opt.value === sort)?.label || '정렬';

//   const handleSelectSort = (value) => {
//     updateQueryParams({ sort: value, page: 1 });
//     setIsSortOpen(false);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>챌린지 신청 관리</h1>

//       <div className={styles.searchSortWrapper}>
//         <Search
//           value={localKeyword}
//           className={styles.searchInput}
//           onChange={(val) => setLocalKeyword(val)}
//         />

//         <div className={styles.sortWrapper} ref={popoverRef}>
//           <Sort
//             className=""
//             label={currentSortLabel}
//             active={isSortOpen}
//             onClick={() => setIsSortOpen((prev) => !prev)}
//           />

//           {isSortOpen && (
//             <div className={styles.sortPopover}>
//               {SORT_OPTIONS.map((option) => (
//                 <button
//                   key={option.value}
//                   type="button"
//                   className={`${styles.sortOptionButton} ${sort === option.value ? styles.activeOption : ''}`}
//                   onClick={() => handleSelectSort(option.value)}
//                 >
//                   {option.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {isLoading ? (
//         <div className={styles.loadingWrapper}>
//           <Spinner />
//         </div>
//       ) : (
//         <div className={styles.listSection}>
//           <ListHead />
//           {challenges.length > 0 ? (
//             challenges.map((data) => (
//               <Link key={data.id} href={`/admin/management/${data.id}`}>
//                 <ListRow data={data} />
//               </Link>
//             ))
//           ) : (
//             <div className={styles.emptyState}>조회된 데이터가 없습니다.</div>
//           )}

//           {totalCount > 0 && (
//             <div className={styles.paginationContainer}>
//               <Pagination
//                 totalCount={totalCount}
//                 currentPage={page}
//                 pageSize={pageSize}
//                 onPageChange={(newPage) => updateQueryParams({ page: newPage })}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
