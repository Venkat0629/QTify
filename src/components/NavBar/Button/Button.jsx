import React from "react";
import styles from "./Button.module.css";

export default function Button({ children }) {
  const handleButton = (e) => {};
  return (
    <button className={styles.button} onClick={handleButton}>
      {children}
    </button>
  );
}
