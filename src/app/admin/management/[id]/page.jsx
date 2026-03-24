'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';

import { Icon } from '@/shared/components/Icon';
import { Button } from '@/shared/components/Button';
import { Modal } from '@/shared/components/Modal';

import ChallengeInfo from '@/app/admin/_components/ChallengeInfo';
import LineDivider from '@/app/admin/_components/LineDivider.jsx';
import OriginalUrlSection from '@/app/admin/_components/OriginalUrlSection';
import StatusSection from '@/app/admin/_components/StatusSection';

import {
  getChallengeAction,
  approveChallengeAction,
  declineChallengeAction,
} from '@/shared/apis/admin.js';

import * as styles from './AdminChallengePage.css.js';

export default function AdminChallengePage() {
  const params = useParams();
  const router = useRouter();
  const challengeId = params?.id;

  const [challengeData, setChallengeData] = useState({
    challenge: null,
    prevId: null,
    nextId: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [loading, setLoading] = useState(false);

  const { challenge, prevId, nextId } = challengeData;

  const fetchChallenge = useCallback(async (id) => {
    if (!id) return;

    setLoading(true);

    try {
      const data = await getChallengeAction(id);

      setChallengeData({
        challenge: data?.challenge || null,
        prevId: data?.prevId || null,
        nextId: data?.nextId || null,
      });
    } catch (error) {
      console.error('신청 상세 불러오기 실패:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChallenge(challengeId);
  }, [challengeId, fetchChallenge]);

  const handleMovePage = (targetId) => {
    if (!targetId) return;
    router.push(`/admin/management/${targetId}`);
  };

  const handleConfirmDecline = async () => {
    if (!challenge?.id) return;

    if (!declineReason.trim()) {
      alert('거절 사유를 입력해주세요.');
      return;
    }

    try {
      await declineChallengeAction(challenge.id, declineReason);

      setIsModalOpen(false);
      setDeclineReason('');

      alert('챌린지가 거절되었습니다.');

      await fetchChallenge(challengeId);
    } catch (error) {
      alert(`거절 실패: ${error.message}`);
    }
  };

  const handleApproved = async () => {
    if (!challenge?.id) return;

    try {
      await approveChallengeAction(challenge.id);

      alert('챌린지가 승인되었습니다.');

      await fetchChallenge(challengeId);
    } catch (error) {
      console.error('승인 실패', error);
      alert('승인 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      {loading && <div>로딩 중...</div>}

      <div className={styles.header}>
        <span className={styles.idText}>No. {challenge?.serialNumber}</span>

        <div className={styles.navGroup}>
          <button
            onClick={() => handleMovePage(prevId)}
            disabled={!prevId}
            className={styles.navBtn}
            title="이전 항목"
          >
            <Icon name="chevronLeftActive" alt="이전" />
          </button>

          <button
            onClick={() => handleMovePage(nextId)}
            disabled={!nextId}
            className={styles.navBtn}
            title="다음 항목"
          >
            <Icon name="chevronRightActive" alt="다음" />
          </button>
        </div>
      </div>

      <StatusSection challenge={challenge} />
      <LineDivider />
      <ChallengeInfo challenge={challenge} />
      <LineDivider />
      <OriginalUrlSection originalPageUrl={challenge?.originalUrl} />

      {challenge?.status === 'PENDING' && (
        <div className={styles.buttonWrapper}>
          <Button
            variant="outline"
            icon={null}
            className={styles.declineBtn}
            onClick={() => setIsModalOpen(true)}
          >
            거절하기
          </Button>

          <Button
            variant="solid"
            icon={null}
            className={styles.approveBtn}
            onClick={handleApproved}
          >
            승인하기
          </Button>
        </div>
      )}

      {challenge?.status === 'APPROVED' && (
        <iframe
          src={challenge?.originalUrl}
          title="원문 페이지 미리보기"
          className={styles.previewIframe}
          loading="lazy"
        />
      )}

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
              icon={null}
              onClick={handleConfirmDecline}
              fullWidth={true}
              className={styles.actionBtn}
            >
              전송
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
