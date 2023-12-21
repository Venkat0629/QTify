import React from "react";
import styles from "./Album.module.css";
import Card from "./Card/Card";
import Img from "../../assets/Card.svg";

export default function Album() {
  return (
    <div className={styles.album}>
      <div className={styles.title}>
        <p>Top Albums</p>
        <p className={styles.collapse}>Collapse</p>
      </div>
      <div className={styles.wrapper}>
        <div>
          <Card
            cardData={{
              follows: "100",
              title: "New English Songs",
              image: Img,
              slug: ":song",
              songs: [2, 3, 4],
            }}
            type="album"
          />
          <Card
            cardData={{
              title: "New English Songs",
              follows: "100",
              image: Img,
            }}
            type="song"
          />
        </div>
      </div>
    </div>
  );
}
