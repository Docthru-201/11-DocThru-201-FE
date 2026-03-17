'use client';

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation'; // useRouter 추가
import React, { useEffect, useState } from 'react';

import ChallengeInfo from '@/app/admin/_components/ChallengeInfo';
import arrorLeft from '@/app/admin/_components/ic_arrow_left.svg';
import arrorRight from '@/app/admin/_components/ic_arrow_right.svg';
import LineDivider from '@/app/admin/_components/LineDivider';
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

  const [challenge, setChallenge] = useState(null);
  const [prevId, setPrevId] = useState(null);
  const [nextId, setNextId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [declineReason, setDeclineReason] = useState(''); //임시

  /**
   * 챌린지 상세 데이터를 가져오는 함수
   */
  const fetchChallenge = async (id) => {
    if (!id) return;
    try {
      const data = await getChallengeAction(id);
      setChallenge(data?.challenge || null);
      setPrevId(data?.prevId || null);
      setNextId(data?.nextId || null);
    } catch (error) {
      console.error('신청 상세 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    if (challengeId) {
      fetchChallenge(challengeId);
    }
  }, [challengeId]);

  const handleMovePage = (targetId) => {
    if (!targetId) return;
    router.push(`/admin/management/${targetId}`);
  };

  //모달로 바꿔달기--access토근없어 확인 못함
  const handleConfirmDecline = async () => {
    if (!challenge?.id) return;
    if (!declineReason.trim()) {
      alert('거절 사유를 입력해주세요.');
      return;
    }

    try {
      await declineChallengeAction(challenge.id, declineReason);
      setIsModalOpen(false);
      setDeclineReason(''); // 입력값 초기화
      alert('챌린지가 거절되었습니다.');
      await fetchChallenge(challengeId); // 현재 페이지 데이터 갱신
    } catch (error) {
      alert(`거절 실패: ${error.message}`);
    }
  };

  //에러메시지 재정리 필요--access토근없어 확인 못함
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
      {/* 상단 네비게이션 */}
      <div className={styles.header}>
        <span className={styles.idText}>No. {challenge?.serialNumber}</span>
        <div className={styles.navGroup}>
          {/* 이전 버튼 */}
          <button
            onClick={() => handleMovePage(prevId)}
            disabled={!prevId}
            className={styles.navBtn}
            title="이전 항목"
          >
            <Image src={arrorLeft} alt="이전" width={24} height={24} />
          </button>

          <button
            onClick={() => handleMovePage(nextId)}
            disabled={!nextId}
            className={styles.navBtn}
            title="다음 항목"
          >
            <Image src={arrorRight} alt="다음" width={24} height={24} />
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
          <button
            onClick={() => setIsModalOpen(true)}
            className={styles.actionBtn}
          >
            거절하기
          </button>
          <button onClick={handleApproved} className={styles.actionBtn}>
            승인하기
          </button>
        </div>
      )}

      {/* 승인 완료 시 프리뷰 노출 (APPROVED 상태일 때만) */}
      {challenge?.status === 'APPROVED' && (
        <iframe
          src={challenge?.originalUrl}
          title="원문 페이지 미리보기"
          className={styles.previewIframe}
          loading="lazy"
        />
      )}

      {/* 거절 사유 입력 모달 */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>거절 사유 입력</h3>
            <textarea
              className={styles.modalTextarea}
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
              placeholder="거절 사유를 입력해주세요..."
            />
            <div className={styles.modalButtonGroups}>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setDeclineReason('');
                }}
                className={styles.cancelBtn}
              >
                취소
              </button>
              <button
                onClick={handleConfirmDecline}
                className={styles.confirmBtn}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
