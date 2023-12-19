import React from "react";
import styles from "./Hero.module.css";
import headSet from "../../assets/HeadSet.svg";
export default function Hero({ props }) {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div className={styles.headSet}>
        <img src={headSet} alt="HeadPhones" />
      </div>
    </div>
  );
}
