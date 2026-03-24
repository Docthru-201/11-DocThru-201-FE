import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '@/app/challenges/[id]/_components/ModalMessage.css';

const ModalMessage = ({ message, onClose = () => {}, className = '' }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <span className={`${styles.messageText} ${className}`.trim()}>
          {message}
        </span>

        <button
          type="button"
          onClick={onClose}
          className={styles.confirmButton}
        >
          확인
        </button>
      </div>
    </div>
  );
};

ModalMessage.propTypes = {
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default ModalMessage;
