'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { Icon } from '@/shared/components/Icon';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';
import { Spinner } from '@/shared/components/Spinner';

import ChallengeInfo from '@/app/admin/_components/ChallengeInfo';
import LineDivider from '@/app/admin/_components/LineDivider.jsx';
import OriginalUrlSection from '@/app/admin/_components/OriginalUrlSection';
import StatusSection from '@/app/admin/_components/StatusSection';

import {
  getChallengeAction,
  approveChallengeAction,
  declineChallengeAction,
} from '@/shared/apis/admin.js';

import * as styles from './Page.css.js';

export default function AdminChallengePage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const challengeId = params?.id;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState('');

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['admin-challenge-detail', challengeId],
    queryFn: () => getChallengeAction(challengeId),
    enabled: !!challengeId,
  });

  /** @type {any} */
  const approveMutation = useMutation({
    mutationFn: (id) => approveChallengeAction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-challenges'] });
      queryClient.invalidateQueries({
        queryKey: ['admin-challenge-detail', challengeId],
      });
      alert('챌린지가 승인되었습니다.');
    },
    onError: (err) => alert(err.message || '승인 처리 중 오류가 발생했습니다.'),
  });

  /** @type {any} */
  const declineMutation = useMutation({
    mutationFn: (/** @type {{ id: string, reason: string }} */ data) =>
      declineChallengeAction(data.id, data.reason),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-challenges'] });
      queryClient.invalidateQueries({
        queryKey: ['admin-challenge-detail', challengeId],
      });
      setIsModalOpen(false);
      setDeclineReason('');
      alert('챌린지가 거절되었습니다.');
    },
    onError: (err) => alert(err.message || '거절 처리 중 오류가 발생했습니다.'),
  });

  if (isLoading)
    return (
      <div className={styles.loadingWrapper}>
        <Spinner />
      </div>
    );
  if (isError)
    return <div className={styles.errorWrapper}>⚠️ {error?.message}</div>;
  if (!data?.challenge)
    return (
      <div className={styles.errorWrapper}>데이터를 찾을 수 없습니다.</div>
    );

  const { challenge, prevId, nextId } = data;

  const handleMovePage = (targetId) => {
    if (!targetId) return;
    router.push(`/admin/management/${targetId}`);
  };

  const handleApproved = () => {
    if (!challenge?.id) return;
    // if (confirm('이 챌린지를 승인하시겠습니까?')) {
    approveMutation.mutate(challenge.id);
    // }
  };

  const handleConfirmDecline = () => {
    if (!challenge?.id) return;
    if (!declineReason.trim()) {
      alert('거절 사유를 입력해주세요.');
      return;
    }

    // mutationFn 정의와 동일한 { id, reason } 객체 전달
    declineMutation.mutate({
      id: challenge.id,
      reason: declineReason,
    });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <span className={styles.idText}>No. {challenge.serialNumber}</span>

          <div className={styles.navGroup}>
            <button
              onClick={() => handleMovePage(prevId)}
              disabled={!prevId}
              className={styles.navBtn}
            >
              <Icon name="chevronLeftActive" alt="이전" />
            </button>

            <button
              onClick={() => handleMovePage(nextId)}
              disabled={!nextId}
              className={styles.navBtn}
            >
              <Icon name="chevronRightActive" alt="다음" />
            </button>
          </div>
        </div>

        {challenge.status !== 'PENDING' && (
          <StatusSection challenge={challenge} />
        )}
        <ChallengeInfo challenge={challenge} />
        <LineDivider />
        <OriginalUrlSection originalPageUrl={challenge.originalUrl} />
        <LineDivider />
        {challenge.status === 'PENDING' && (
          <div className={styles.buttonWrapper}>
            <Button
              variant="outline"
              className={styles.declineBtn}
              onClick={() => setIsModalOpen(true)}
              disabled={declineMutation.isPending}
            >
              거절하기
            </Button>

            <Button
              variant="solid"
              className={styles.approveBtn}
              onClick={handleApproved}
              disabled={approveMutation.isPending}
            >
              {approveMutation.isPending ? '처리 중...' : '승인하기'}
            </Button>
          </div>
        )}
      </div>

      <Modal
        open={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setDeclineReason('');
        }}
        variant="form"
        title="거절 사유"
        icon={null}
        message={null}
        onPrimary={() => {}}
        onSecondary={() => {}}
        onSubmit={() => {}}
      >
        <div className={styles.modalFormContent}>
          <label className={styles.modalFormLabel} htmlFor="decline-textarea">
            내용
          </label>
          <textarea
            id="decline-textarea"
            className={styles.modalTextarea}
            value={declineReason}
            onChange={(e) => setDeclineReason(e.target.value)}
            placeholder="거절 사유를 입력해주세요"
            rows={6}
          />
          <div className={styles.modalSubmitWrapper}>
            <Button
              variant="solid"
              onClick={handleConfirmDecline}
              fullWidth={true}
              disabled={declineMutation.isPending}
            >
              {declineMutation.isPending ? '전송 중...' : '전송'}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
