'use client';

import { useState } from 'react';
import { useUpdateMe } from '@/features/users/hooks/useUpdateMe';
import { useUpdateMyProfile } from '@/features/users/hooks/useUpdateMyProfile';
import * as styles from './AccountSection.css.js';

export default function AccountSection({ me }) {
  const { updateMe, isPending: isNicknamePending } = useUpdateMe();
  const { updateMyProfile, isPending: isProfilePending } = useUpdateMyProfile();
  const isPending = isNicknamePending || isProfilePending;

  const [nickname, setNickname] = useState(me.nickname ?? '');
  const [introduction, setIntroduction] = useState(
    me.profile?.introduction ?? '',
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    if (nickname !== me.nickname) {
      updateMe({ nickname });
    }
    if (introduction !== (me.profile?.introduction ?? '')) {
      updateMyProfile({ introduction });
    }
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>계정 설정</h3>
        {!isEditing && (
          <button
            className={styles.editButton}
            onClick={() => setIsEditing(true)}
          >
            수정하기
          </button>
        )}
      </div>

      <div className={styles.fieldList}>
        <div className={styles.field}>
          <label className={styles.label}>닉네임</label>
          {isEditing ? (
            <>
              <input
                className={styles.input}
                value={nickname}
                minLength={2}
                maxLength={8}
                onChange={(e) => setNickname(e.target.value)}
              />
              <span className={styles.charCount}>
                {nickname.length}/8 (최소 2자)
              </span>
            </>
          ) : (
            <span className={styles.value}>{me.nickname}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>이메일</label>
          <span className={styles.value}>{me.email}</span>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>자기소개</label>
          {isEditing ? (
            <>
              <textarea
                className={styles.textarea}
                value={introduction}
                maxLength={500}
                onChange={(e) => setIntroduction(e.target.value)}
              />
              <span className={styles.charCount}>
                {introduction.length}/500
              </span>
            </>
          ) : (
            <span className={styles.value}>
              {me.profile?.introduction || '자기소개가 없습니다.'}
            </span>
          )}
        </div>
      </div>

      {isEditing && (
        <div className={styles.buttonGroup}>
          <button
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            취소
          </button>
          <button
            className={styles.saveButton}
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? '저장 중...' : '저장하기'}
          </button>
        </div>
      )}
    </div>
  );
}
