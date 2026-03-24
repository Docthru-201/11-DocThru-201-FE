import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@/shared/components/Icon';
import * as styles from './ModalDecline.css';

const ModalDecline = ({ text, onClose, onConfirm }) => {
  const [reason, setReason] = useState('');

  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    // 사유가 비어있지 않을 때만 실행하거나, 필요에 따라 유효성 검사를 추가할 수 있습니다.
    onConfirm?.(reason);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {/* 닫기 버튼 */}
        <button onClick={onClose} className={styles.closeButton} type="button">
          <Icon name={'out'} width={24} height={24} alt="닫기" />
        </button>

        {/* 제목 */}
        <h2 className={styles.titleText}>{`${text} 사유`}</h2>

        {/* 입력 라벨 */}
        <label htmlFor="reject-reason" className={styles.labelText}>
          내용
        </label>

        {/* 사유 입력창 */}
        <textarea
          id="reject-reason"
          placeholder={`${text} 사유를 입력해주세요`}
          className={styles.textArea}
          value={reason}
          onChange={handleChange}
        />

        {/* 전송 버튼 */}
        <button
          type="button"
          onClick={handleSubmit}
          className={styles.submitButton}
        >
          전송
        </button>
      </div>
    </div>
  );
};

ModalDecline.propTypes = {
  text: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
};

ModalDecline.defaultProps = {
  text: '거절',
  onConfirm: () => {},
};

export default ModalDecline;
