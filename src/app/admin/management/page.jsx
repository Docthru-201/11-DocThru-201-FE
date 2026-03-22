'use client';

import Link from 'next/link';
import React, { useEffect, useState, useRef, useCallback } from 'react';

import ListHead from '@/app/admin/_components/ListHead';
import ListRow from '@/app/admin/_components/ListRow';
import Pagination from '@/app/admin/_components/Pagination';
import { getChallengesAction } from '@/shared/apis/admin.js';
import { ITEM_COUNT, SORT_OPTIONS } from '@/shared/constants/file.js';

import * as styles from './AdminManagementPage.css.js';

import { Search } from '@/shared/components/Search';
import { Sort } from '@/shared/components/Sort';
import { Spinner } from '@/shared/components/Spinner';

export default function AdminManagementPage() {
  const [challenges, setChallenges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [sort, setSort] = useState('createdAt_desc');
  const [keyword, setKeyword] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const popoverRef = useRef(null);
  const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fetchChallenges = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getChallengesAction({
        params: { page, pageSize, sort, keyword },
      });
      setChallenges(response.challenges || []);
      setTotalCount(response.pagination?.totalCount || 0);
    } catch (err) {
      console.error('데이터 로드 실패:', err.message);
    } finally {
      setIsLoading(false);
    }
  }, [page, pageSize, sort, keyword]);

  useEffect(() => {
    fetchChallenges();
  }, [fetchChallenges]);

  const currentSortLabel =
    SORT_OPTIONS.find((opt) => opt.value === sort)?.label || '정렬';

  const handleSelectSort = (value) => {
    setSort(value);
    setPage(1);
    setIsSortOpen(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 신청 관리</h1>

      <div className={styles.searchSortWrapper}>
        <Search
          value={keyword}
          className={styles.searchInput} // 아래 CSS에서 크기 조정됨
          onChange={(v) => {
            setKeyword(v);
            setPage(1);
          }}
          placeholder="챌린지 이름을 검색해보세요"
        />

        <div className={styles.sortWrapper} ref={popoverRef}>
          <Sort
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

      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <Spinner />
        </div>
      ) : (
        <div className={styles.listSection}>
          <ListHead />
          {challenges.length > 0 ? (
            challenges.map((data) => (
              <Link key={data.id} href={`/admin/management/${data.id}`}>
                <ListRow data={data} />
              </Link>
            ))
          ) : (
            <div className={styles.emptyState}>조회된 데이터가 없습니다.</div>
          )}

          {totalCount > 0 && (
            <div className={styles.paginationContainer}>
              <Pagination
                totalCount={totalCount}
                currentPage={page}
                pageSize={pageSize}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
// 'use client';

// import Link from 'next/link';
// import React, { useEffect, useState, useCallback } from 'react';

// import ListHead from '@/app/admin/_components/ListHead';
// import ListRow from '@/app/admin/_components/ListRow';
// import Pagination from '@/app/admin/_components/Pagination';
// import { getChallengesAction } from '@/shared/apis/admin.js';
// import { ITEM_COUNT, SORT_OPTIONS } from '@/shared/constants/file.js';

// import * as styles from './AdminManagementPage.css.js';

// import { Search } from '@/shared/components/Search';
// import { Dropdown } from '@/shared/components/Dropdown'; // 👈 공통 드롭다운 사용
// import { Spinner } from '@/shared/components/Spinner';

// export default function AdminManagementPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);

//   const [sort, setSort] = useState('createdAt_desc');
//   const [keyword, setKeyword] = useState('');

//   const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;

//   const fetchChallenges = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const response = await getChallengesAction({
//         params: { page, pageSize, sort, keyword },
//       });
//       setChallenges(response.challenges || []);
//       setTotalCount(response.pagination?.totalCount || 0);
//     } catch (err) {
//       console.error('데이터 로드 실패:', err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [page, pageSize, sort, keyword]);

//   useEffect(() => {
//     fetchChallenges();
//   }, [fetchChallenges]);

//   const handleSelectSort = (value) => {
//     setSort(value);
//     setPage(1);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>챌린지 신청 관리</h1>

//       <div className={styles.searchSortWrapper}>
//         <Search
//           value={keyword}
//           className={styles.searchInputWrapper} // 👈 여기서 크기 조정
//           onChange={(v) => {
//             setKeyword(v);
//             setPage(1);
//           }}
//           placeholder="챌린지 명을 검색하세요"
//         />

//         <div className={styles.sortWrapper}>
//           <Dropdown
//             label="정렬"
//             options={SORT_OPTIONS}
//             value={sort}
//             onChange={handleSelectSort}
//           />
//         </div>
//       </div>

//       {isLoading ? (
//         <div className={styles.loadingWrapper}>
//           <Spinner />
//         </div>
//       ) : (
//         <>
//           <div className={styles.listContainer}> {/* 👈 리스트 영역을 감싸서 안정감 부여 */}
//             <ListHead />
//             {challenges.length > 0 ? (
//               challenges.map((data) => (
//                 <Link key={data.id} href={`/admin/management/${data.id}`}>
//                   <ListRow data={data} />
//                 </Link>
//               ))
//             ) : (
//               <div className={styles.emptyState}>조회된 데이터가 없습니다.</div>
//             )}
//           </div>

//           {totalCount > 0 && (
//             <div className={styles.paginationContainer}>
//               <Pagination
//                 totalCount={totalCount}
//                 currentPage={page}
//                 pageSize={pageSize}
//                 onPageChange={setPage}
//               />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
// 'use client';

// import Link from 'next/link';
// import React, { useEffect, useState, useRef, useCallback } from 'react';

// import ListHead from '@/app/admin/_components/ListHead';
// import ListRow from '@/app/admin/_components/ListRow';
// import Pagination from '@/app/admin/_components/Pagination';
// import { getChallengesAction } from '@/shared/apis/admin.js';
// import { ITEM_COUNT, SORT_OPTIONS } from '@/shared/constants/file.js';

// import * as styles from './AdminManagementPage.css.js';

// import { Search } from '@/shared/components/Search';
// import { Sort } from '@/shared/components/Sort';
// import { Button } from '@/shared/components/Button';
// import { Spinner } from '@/shared/components/Spinner';

// export default function AdminManagementPage() {
//   const [challenges, setChallenges] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalCount, setTotalCount] = useState(0);

//   const [sort, setSort] = useState('createdAt_desc');
//   const [keyword, setKeyword] = useState('');
//   const [isSortOpen, setIsSortOpen] = useState(false);

//   const popoverRef = useRef(null); // 외부 클릭 감지를 위한 참조
//   const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;

//   // 외부 클릭 시 팝오버 닫기 로직
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popoverRef.current && !popoverRef.current.contains(event.target)) {
//         setIsSortOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const fetchChallenges = useCallback(async () => {
//     setIsLoading(true);
//     try {
//       const response = await getChallengesAction({
//         params: { page, pageSize, sort, keyword },
//       });
//       setChallenges(response.challenges || []);
//       setTotalCount(response.pagination?.totalCount || 0);
//     } catch (err) {
//       console.error('데이터 로드 실패:', err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [page, pageSize, sort, keyword]);

//   useEffect(() => {
//     fetchChallenges();
//   }, [fetchChallenges]);

//   const currentSortLabel = SORT_OPTIONS.find((opt) => opt.value === sort)?.label || '승인 대기';

//   const handleSelectSort = (value) => {
//     setSort(value);
//     setPage(1);
//     setIsSortOpen(false);
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>챌린지 신청 관리</h1>

//       <div className={styles.searchSortWrapper}>
//         <Search
//           value={keyword}
//           className="" // 나중에 크기 조정 시 styles.searchInput 적용
//           onChange={(v) => {
//             setKeyword(v);
//             setPage(1);
//           }}
//           placeholder="챌린지 명을 검색하세요"
//         />

//         <div className={styles.sortWrapper} ref={popoverRef}>
//           <Sort
//             label={currentSortLabel}
//             active={isSortOpen}
//             onClick={() => setIsSortOpen((prev) => !prev)}
//           />

//           {isSortOpen && (
//             <div className={styles.sortPopover}>
//               {SORT_OPTIONS.map((option) => (
//                 <Button
//                   key={option.value}
//                   variant={sort === option.value ? 'solid' : 'outline'}
//                   className={styles.sortOptionButton}
//                   icon={null}
//                   onClick={() => handleSelectSort(option.value)}
//                 >
//                   {option.label}
//                 </Button>
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
//         <>
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
//                 onPageChange={setPage}
//               />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
