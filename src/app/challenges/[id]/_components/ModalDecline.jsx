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
    onConfirm?.(reason);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <button onClick={onClose} className={styles.closeButton} type="button">
          <Icon name={'out'} width={24} height={24} alt="닫기" />
        </button>

        <h2 className={styles.titleText}>{`${text} 사유`}</h2>

        <label htmlFor="reject-reason" className={styles.labelText}>
          내용
        </label>

        <textarea
          id="reject-reason"
          placeholder={`${text} 사유를 입력해주세요`}
          className={styles.textArea}
          value={reason}
          onChange={handleChange}
        />

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
