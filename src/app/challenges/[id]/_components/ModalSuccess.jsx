import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as styles from './ModalSuccess.css';

const ModalSuccess = ({ text, onClose, duration, className }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. 설정된 시간(duration) 후 투명도를 0으로 변경
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // 2. 애니메이션(300ms)이 끝난 후 실제로 컴포넌트 닫기 처리
    const closeTimer = setTimeout(() => {
      onClose?.();
    }, duration + 300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`${styles.overlay} ${
        isVisible ? styles.visibleOn : styles.visibleOff
      } ${className}`}
    >
      <div className={styles.messageContainer}>
        <p className={styles.textStyle}>{text}</p>
      </div>
    </div>
  );
};

ModalSuccess.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

ModalSuccess.defaultProps = {
  duration: 1000,
  className: '',
};

export default ModalSuccess;
