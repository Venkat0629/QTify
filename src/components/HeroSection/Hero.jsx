import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ props }) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.heroText}>
          <div>100 Thousand Songs, ad-free</div>
          <div>Over thousands podcast episodes</div>
        </div>
        <img src={props} alt="HeadSet" />
      </div>
    </div>
  );
}
