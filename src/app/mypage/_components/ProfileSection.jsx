'use client';

import { useRef } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Icon } from '@/shared/components/Icon';
import { uploadProfileImage } from '@/shared/lib/supabase';
import { updateMe } from '@/features/users/api/user.service';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import Image from 'next/image';
import * as styles from './ProfileSection.css.js';
import { Camera } from 'lucide-react';

export default function ProfileSection({ me }) {
  const fileInputRef = useRef(null);
  const queryClient = useQueryClient();

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const url = await uploadProfileImage(file, me.id);
      await updateMe({ image: url });
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.user.me });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageWrapper}
        onClick={() => fileInputRef.current?.click()}
      >
        {me.image ? (
          <Image
            src={me.image}
            alt="프로필"
            width={80}
            height={80}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <Icon name="profileMember" width={80} height={80} />
        )}

        <div className={styles.cameraOverlay}>
          <Camera width={14} height={14} stroke="#6b7280" strokeWidth={1.5} />
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
      </div>

      <div className={styles.info}>
        <span className={styles.nickname}>{me.nickname}</span>
        <span className={styles.grade}>
          {me.grade === 'EXPERT' ? '🏆 전문가' : '일반'}
        </span>
        {me.profile?.introduction && (
          <p className={styles.introduction}>{me.profile.introduction}</p>
        )}
      </div>
    </div>
  );
}
