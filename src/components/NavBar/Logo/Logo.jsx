import React from "react";
import styles from "./Logo.module.css";

export default function Logo({ props }) {
  return (
    <div className={styles.logo}>
      <img src={props} alt="QTify Logo" />
    </div>
  );
}
