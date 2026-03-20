'use client';

import { useMemo } from 'react';

import { Icon } from '@/shared/components/Icon';
import * as styles from './Pagination.css';

const pagesPerGroup = 5;

function Pagination({ totalCount, currentPage, pageSize, onPageChange }) {
  const itemsPerPage = pageSize;

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(totalCount / itemsPerPage);
    const currentGroup = Math.ceil(currentPage / pagesPerGroup);
    const startPage = (currentGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return {
      totalPages,
      startPage,
      endPage,
      pages,
      hasPrev: currentPage > 1,
      hasNext: currentPage < totalPages,
    };
  }, [currentPage, totalCount, itemsPerPage]);

  const handlePrev = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.pageButton} ${
          !paginationData.hasPrev ? styles.disabled : ''
        }`}
        onClick={handlePrev}
        disabled={!paginationData.hasPrev}
      >
        <Icon name="chevronLeftActive" alt="이전" />
      </button>

      {paginationData.pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`${styles.pageButton} ${
            page === currentPage ? styles.active : styles.hover
          }`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className={`${styles.pageButton} ${
          !paginationData.hasNext ? styles.disabled : ''
        }`}
        onClick={handleNext}
        disabled={!paginationData.hasNext}
      >
        <Icon name="chevronRightActive" alt="다음" />
      </button>
    </div>
  );
}

export default Pagination;
