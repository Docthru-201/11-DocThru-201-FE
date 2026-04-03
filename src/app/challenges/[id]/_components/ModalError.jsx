import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ModalError.css';

const ModalError = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {title && <h2 className={styles.titleText}>{title}</h2>}

        <div className={styles.errorContent}>{message}</div>

        <div className={styles.buttonWrapper}>
          <button
            type="button"
            onClick={onClose}
            className={styles.confirmButton}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

ModalError.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.node.isRequired,
};

ModalError.defaultProps = {
  title: '알림',
};

export default ModalError;
