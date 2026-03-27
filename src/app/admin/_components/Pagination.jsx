'use client';

import React from 'react';
import * as styles from './Pagination.css.js';

const PAGE_GROUP_SIZE = 5;

export default function Pagination({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (totalPages <= 1) return null;

  const currentGroupIndex = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE);
  const startPage = currentGroupIndex * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);

  const handlePrevGroup = () => {
    if (startPage > 1) {
      onPageChange(startPage - 1);
    }
  };

  const handleNextGroup = () => {
    if (endPage < totalPages) {
      onPageChange(endPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paginationContainer}>
      <button
        type="button"
        className={styles.arrowButton}
        onClick={handlePrevGroup}
        disabled={startPage === 1}
      >
        &lt;
      </button>

      <div className={styles.numberWrapper}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            type="button"
            className={`${styles.pageButton} ${number === currentPage ? styles.active : ''}`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={styles.arrowButton}
        onClick={handleNextGroup}
        disabled={endPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}
