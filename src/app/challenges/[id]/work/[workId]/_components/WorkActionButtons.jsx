'use client';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';
import * as styles from './WorkActionButtons.css.js';

export default function WorkActionButtons({
  work,
  onEdit,
  onDelete,
  isDeletePending,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = useAuthStore((state) => state.user);

  const isOwner = user?.id === work?.userId;
  const isAdmin = user?.role === 'ADMIN';
  const canEdit = isOwner;
  const canDelete = isOwner || isAdmin;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!canEdit && !canDelete) return null;

  return (
    <div ref={dropdownRef} className={styles.wrapper}>
      <button
        className={styles.triggerButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        ⋮
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {canEdit && (
            <button
              className={styles.dropdownItem}
              onClick={() => {
                onEdit();
                setIsOpen(false);
              }}
            >
              수정하기
            </button>
          )}
          {canDelete && (
            <button
              className={styles.dropdownItemDanger}
              onClick={() => {
                onDelete();
                setIsOpen(false);
              }}
              disabled={isDeletePending}
            >
              {isDeletePending ? '삭제 중...' : '삭제하기'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
