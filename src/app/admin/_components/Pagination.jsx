'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import leftArrow from './ic_arrow_left.svg';
import rightArrow from './ic_arrow_right.svg';
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
        <Image src={leftArrow} alt="왼쪽 화살표" width={40} height={40} />
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
        <Image src={rightArrow} alt="오른쪽 화살표" width={40} height={40} />
      </button>
    </div>
  );
}

export default Pagination;
