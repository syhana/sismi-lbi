import React from "react";
import styles from "./alert.module.css";
import alert from "/alert.svg";

const AlertNotif = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <img src={alert} alt="alert" className="w-1/5" />
        </div>
        <div className={styles.modalBody}>
          <p>Apakah kamu yakin ingin menghapus data?</p>
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

export default AlertNotif;
