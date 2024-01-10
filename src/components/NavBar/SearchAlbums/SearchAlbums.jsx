import React from "react";
import styles from "./SearchAlbums.module.css";
import { Link } from "react-router-dom";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const Album = ({ album }) => {
  return (
    <Link to={`/album/:${album.slug}`} className={styles.album}>
      <div className={styles.icon}>
        <img src={album.image} alt={album.title} />
      </div>
      <div className={styles.contentwrapper}>
        <div className={styles.titlewrapper}>
          <h4 className={styles.title}>{album.title}</h4>
          <p className={styles.subtitle}>{album.title}</p>
        </div>
        <p className={styles.title}>{`${album.follows} Follows`}</p>
      </div>
    </Link>
  );
};

export default function SearchAlbums({ Albums }) {
  return (
    <div className={styles.wrapper}>
      {Albums.length > 0 ? (
        Albums.map((album) => <Album key={album.id} album={album} />)
      ) : (
        <div className={styles.dissatisfiedwrapper}>
          <p>No Albums found...</p>
          <SentimentDissatisfiedIcon className={styles.dissatisfiedIcon} />
        </div>
      )}
    </div>
  );
}
