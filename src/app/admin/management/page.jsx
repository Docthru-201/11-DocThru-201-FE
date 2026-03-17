'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

// 컴포넌트 확인하여 갈아끼기 - swlee
import ListHead from '@/app/admin/_components/ListHead';
import ListRow from '@/app/admin/_components/ListRow';
import Pagination from '@/app/admin/_components/Pagination';
import { getChallengesAction } from '@/shared/apis/admin.js';
import { ITEM_COUNT } from '@/shared/constants/file.js';

import * as styles from './AdminManagementPage.css.js';

// 컴포넌트 확인하여 갈아끼기 - swlee
// import LoadingSpinner from "@/components/loading/LoadingSpinner";
// import SearchInput from "@/components/input/SearchInput";
// import ApplyDropdown from "@/components/dropDown/list/ApplyDropdown";
// import Sort from "@/components/sort/Sort";

export default function AdminManagementPage() {
  const router = useRouter();

  const [challenges, setChallenges] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedSortLabel, setSelectedSortLabel] = useState("신청 시간 느린순");
  const [sort, setSort] = useState('createdAt_desc');
  const [keyword, setKeyword] = useState('');

  const pageSize = ITEM_COUNT.CHALLENGE_CNT || 10;
  const fetchChallenges = async () => {
    try {
      const response = await getChallengesAction({
        params: { page, pageSize, sort, keyword },
      });
      const { challenges: fetchedData, pagination } = response;
      const fetchedTotal = pagination?.totalCount || 0;

      setChallenges(fetchedData || []);
      setTotalCount(fetchedTotal);
    } catch (err) {
      console.error('신청 목록 조회 실패:', err.message);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, [page, sort, keyword]);

  // const handleSortSelect = ({ label, value }) => {
  //   setSelectedSortLabel(label);
  //   setSort(value);
  //   setIsDropdownOpen(false);
  //   setPage(1);
  // };

  const handleRowClick = (id) => {
    router.push(`/admin/management/${id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>챌린지 신청 관리</h1>

      <div className={styles.searchSortWrapper}>
        {/* <SearchInput
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setPage(1); 
          }}
        /> */}

        <div className={styles.sortWrapper}>
          {/* <Sort
            isAdminStatus={true}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            label={selectedSortLabel}
          /> */}

          {/* {isDropdownOpen && (
            <ApplyDropdown
              onSelect={handleSortSelect}
              className={styles.dropdown}
            />
          )} */}
        </div>
      </div>

      {/* {isLoading ? (
        <div className={styles.loadingWrapper}>
          <LoadingSpinner />
        </div>
      ) : ( */}
      <>
        <ListHead />
        {challenges.length > 0 ? (
          challenges.map((data) => (
            <Link key={data.id} href={`/admin/management/${data.id}`}>
              <ListRow data={data} />
            </Link>
          ))
        ) : (
          <div className={styles.emptyState}>
            불러올 지원 데이터가 없습니다.
          </div>
        )}
        {totalCount > 0 && (
          <div className={styles.paginationContainer}>
            <Pagination
              totalCount={totalCount}
              currentPage={page}
              pageSize={pageSize}
              onPageChange={(newPage) => setPage(newPage)}
            />
          </div>
        )}
      </>
      {/* )} */}
    </div>
  );
}
