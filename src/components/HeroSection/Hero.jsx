import React from "react";
import styles from "./Hero.module.css";

export default function Hero({ props }) {
  return (
    <div className={styles.hero}>
      <div className={styles.context}>
        <div>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
          <img src={props} alt="HeadSet" />
        </div>
      </div>
    </div>
  );
}
