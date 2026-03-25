import React, { useState, useEffect } from 'react';
import * as styles from './ModalSuccess.css';

const ModalSuccess = ({ text, onClose, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsVisible(false), duration);
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
      className={`${styles.overlay} ${isVisible ? styles.visibleOn : styles.visibleOff}`}
    >
      <div className={styles.messageContainer}>
        <p className={styles.textStyle}>{text}</p>
      </div>
    </div>
  );
};

export default ModalSuccess;
