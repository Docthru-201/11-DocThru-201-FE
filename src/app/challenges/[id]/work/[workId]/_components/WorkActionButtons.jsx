'use client';
import { useState, useRef, useEffect } from 'react';
import { useAuthStore } from '@/shared/store/useAuthStore';

export default function WorkActionButtons({
  work,
  onEdit,
  onDelete,
  isDeletePending,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Zustand에서 직접
  const user = useAuthStore((state) => state.user);

  // 권한 판단 (컴포넌트 내부에서)
  const isOwner = user?.id === work?.userId;
  const isAdmin = user?.role === 'ADMIN';

  const canEdit = isOwner;
  const canDelete = isOwner || isAdmin;

  // 드롭다운 외부 클릭시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 둘 다 권한 없으면 버튼 자체를 렌더링 안 함
  if (!canEdit && !canDelete) return null;

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button onClick={() => setIsOpen((prev) => !prev)}>⋮</button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            background: 'white',
            border: '1px solid #eee',
          }}
        >
          {canEdit && (
            <button
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
