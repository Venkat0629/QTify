import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, setFeedBack }) {
  const handleButton = (e) => {
    setFeedBack(true);
  };
  return (
    <button className={styles.button} onClick={handleButton}>
      {children}
    </button>
  );
}
