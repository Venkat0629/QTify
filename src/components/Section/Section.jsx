import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "./Card/Card";
export default function Section({ title, data, type }) {
  const [collapse, setCollapse] = useState(true);
  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h3 className={styles.toggle} onClick={handleCollapse}>
          {!collapse ? "Collapse" : "Show all"}
        </h3>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!collapse ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} cardData={item} type={type} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
