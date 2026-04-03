import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ModalConfirm.css';

const ModalConfirm = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {title && <h2 className={styles.titleText}>{title}</h2>}

        <div className={styles.contentArea}>{children}</div>

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

ModalConfirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

// 기본값 설정 (명시적)
ModalConfirm.defaultProps = {
  title: '',
  onClose: () => {},
};

export default ModalConfirm;
