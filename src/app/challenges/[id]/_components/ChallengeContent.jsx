'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/shared/store/useAuthStore';

import { Icon } from '@/shared/components/Icon';
import { Chip } from '@/shared/components/Chip';
import { ChipCard } from '@/shared/components/ChipCard';

import ModalDecline from '@/app/challenges/[id]/_components/ModalDecline';
import ModalSuccess from '@/app/challenges/[id]/_components/ModalSuccess';
import ModalError from '@/app/challenges/[id]/_components/ModalError';

import { deleteChallengeAction } from '@/shared/apis/admin.js';
import * as styles from './ChallengeContent.css';

export default function ChallengeContent({
  challengeId,
  participants,
  title,
  description,
  category,
  type,
  status,
  isClosed,
  deadline,
  maxParticipants,
}) {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);

  const adminDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [challengeStatus, setChallengeStatus] = useState('');

  useEffect(() => {
    const now = new Date();
    const deadlineDate = new Date(deadline);

    if (now > deadlineDate) {
      setChallengeStatus('dateEnd');
    } else if (participants >= maxParticipants) {
      setChallengeStatus('recruitEnd');
    } else {
      setChallengeStatus('');
    }
  }, [deadline, maxParticipants, participants]);

  const handleEdit = () => {
    if (isClosed) {
      setErrorMessage('완료된 챌린지는 수정이 불가능합니다.');
      setErrorModalOpen(true);
    } else {
      router.push(`/admin/challenges/${challengeId}/edit`);
    }
    setIsAdminDropdownOpen(false);
  };

  const handleDeleteClick = () => {
    if (isClosed || status === 'DELETED') {
      setErrorMessage('완료되었거나 이미 삭제된 챌린지는 삭제가 불가능합니다.');
      setErrorModalOpen(true);
      return;
    }
    setIsAdminDropdownOpen(false);
    setIsDeclineModalOpen(true);
  };

  const handleConfirmDelete = async (declineMessage) => {
    try {
      await deleteChallengeAction(challengeId, declineMessage);
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error('삭제 실패:', error);
      setIsDeclineModalOpen(false);
      setErrorMessage('삭제 처리 중 오류가 발생했습니다.');
      setErrorModalOpen(true);
    } finally {
      setIsDeclineModalOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        adminDropdownRef.current &&
        !adminDropdownRef.current.contains(event.target)
      ) {
        setIsAdminDropdownOpen(false);
      }
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <article className={styles.articleContainer}>
      {challengeStatus && <ChipCard status={challengeStatus} />}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>

        {status === 'PENDING' && user?.role === 'USER' && (
          <div ref={userDropdownRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            >
              <Icon name="meatballsMenu" alt="메뉴" width={24} height={24} />
            </button>

            {isUserDropdownOpen && (
              <div className={styles.adminDropdownMenu}>
                <button
                  type="button"
                  onClick={() => setIsUserDropdownOpen(false)}
                  className={styles.adminDropdownButton}
                >
                  신청 취소하기
                </button>
              </div>
            )}
          </div>
        )}

        {user?.role === 'ADMIN' && (
          <div ref={adminDropdownRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
            >
              <Icon name="meatballsMenu" alt="메뉴" width={24} height={24} />
            </button>

            {isAdminDropdownOpen && (
              <div className={styles.adminDropdownMenu}>
                <button
                  type="button"
                  onClick={handleEdit}
                  className={styles.adminDropdownButton}
                >
                  수정하기
                </button>
                <button
                  type="button"
                  onClick={handleDeleteClick}
                  className={styles.adminDropdownButton}
                >
                  삭제하기
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.chipGroup}>
        {category && <Chip category={category.toLowerCase()} />}
        {type && <Chip type={type.toLowerCase()} />}
      </div>

      <p className={styles.descriptionText}>{description}</p>

      <ModalError
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title="알림"
        message={errorMessage}
      />

      {isDeclineModalOpen && (
        <ModalDecline
          text="삭제"
          onClose={() => setIsDeclineModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}

      {isSuccessModalOpen && (
        <ModalSuccess
          duration={1000}
          text="삭제가 완료되었습니다!"
          onClose={() => setIsSuccessModalOpen(false)}
        />
      )}
    </article>
  );
}
