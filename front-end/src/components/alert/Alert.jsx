import React from "react";
import styles from "./alert.module.css";
import alert from "/public/alert.svg";

const Alert = ({ isOpen, onClose, onConfirm , label}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <p>{label}?</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.true} onClick={onConfirm}>
            Ya
          </button>
          <button className={styles.false} onClick={onClose}>
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
