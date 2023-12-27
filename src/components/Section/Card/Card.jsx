import React from "react";
import styles from "./Card.module.css";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";

export default function Card({ cardData, type }) {
  const getCard = (type) => {
    const { follows, image, title, slug, songs } = cardData;
    switch (type) {
      case "album": {
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <Link to={`/album/:${slug}`} className={styles.wrapper}>
              {/* <Link to={`/album/${slug}`} className={styles.linkStyle}> */}
              {/* <div className={styles.wrapper}> */}
              <div className={styles.card}>
                <div>
                  <img src={image} alt="song card" loading="lazy"></img>
                </div>
                <Chip
                  className={styles.chip}
                  label={`${follows} Follows`}
                  size="small"
                />
              </div>
              <div>
                <p className={styles.title}>{title}</p>
              </div>
              {/* </div> */}
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        const { likes, image, title } = cardData;
        return (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div>
                <img src={image} alt="song card" loading="lazy"></img>
              </div>
              <Chip
                className={styles.chip}
                label={`${likes} Likes`}
                size="small"
              />
            </div>
            <p className={styles.title}>{title}</p>
          </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
}
