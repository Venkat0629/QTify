import React, { useState, useEffect } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "./Card/Card";
import Carousel from "./Carousel/Carousel";
import Filters from "./Filters/Filters";

export default function Section({ title, data, type, filters }) {
  const [collapse, setCollapse] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filterData, setFilterData] = useState(data);
  const handleCollapse = () => {
    setCollapse((prevState) => !prevState);
  };

  useEffect(() => {
    if (type === "song") {
      setFilterData(
        data.filter((card) => {
          return filters[selectedIndex].key === card.genre.key;
        })
      );
    }
  }, [selectedIndex]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type !== "song" && (
          <h3 className={styles.toggle} onClick={handleCollapse}>
            {!collapse ? "Collapse" : "Show all"}
          </h3>
        )}
      </div>
      {type === "song" && (
        <Filters
          filters={filters}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!collapse ? (
            <>
              <div className={styles.wrapper}>
                {data.map((item) => (
                  <Card key={item.id} cardData={item} type={type} />
                ))}
              </div>
              {title === "Top Albums" && <hr className={styles.separator} />}
            </>
          ) : (
            <div className={styles.wrapper}>
              <Carousel
                data={
                  type === "song" && filters[selectedIndex].key !== "all"
                    ? filterData
                    : data
                }
                type={type}
                className={styles.carousel}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
