import React, { useEffect, useState } from "react";
import styles from "./Album.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import { ReactComponent as ShuffleImg } from "../../assets/shuffle.svg";
import { ReactComponent as Library } from "../../assets/library.svg";
import { ReactComponent as Dot } from "../../assets/dot.svg";
import { ReactComponent as LeftPage } from "../../assets/LeftNav.svg";
import { ReactComponent as RightPage } from "../../assets/RightNav.svg";
import Song from "./Song/Song";

export default function Album() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums } = data;
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 10;

  useEffect(() => {
    const fetchedAlbum = fetchAlbum(id);
    setAlbum({ ...fetchedAlbum });
  }, [id]);

  const fetchAlbum = (id) => {
    const allAlbums = [...topAlbums, ...newAlbums];
    const foundAlbum = allAlbums.find((album) => id.includes(album.slug));
    const duration = foundAlbum.songs.reduce(
      (accumulator, currentValue) => accumulator + currentValue.durationInMs,
      0
    );
    return { ...foundAlbum, duration: convert(duration) };
  };

  const convert = (number) => {
    var hours = Math.floor(number / 360000);
    var minutes = number % 60;
    return hours + " hr " + minutes + " min";
  };

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs =
    album && album.songs.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return album ? (
    <div className={styles.wrapper}>
      <div className={styles.headerwrapper}>
        <img src={album.image} alt={album.slug} className={styles.albumimage} />
        <div className={styles.albumcontentwrapper}>
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <div className={styles.albumdetails}>
            {album.songs.length} songs <Dot />
            {album.duration} <Dot />
            {album.follows} Follows
          </div>
          <div className={styles.buttonwrapper}>
            <button className={styles.albumbutton}>
              <ShuffleImg />
              Shuffle
            </button>
            <button className={styles.albumbutton}>
              <Library />
              Add to library
            </button>
          </div>
        </div>
      </div>
      <div className={styles.contentwrapper}>
        <div className={styles.pagination}>
          {currentPage !== 1 && (
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <LeftPage />
            </button>
          )}
          {Array.from({
            length: Math.ceil(album.songs.length / songsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage !== Math.ceil(album.songs.length / songsPerPage) && (
            <button
              className={styles.pageButton}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <RightPage />
            </button>
          )}
        </div>
        <div className={styles.titlewrapper}>
          <div className={styles.title}>Title</div>
          <div className={styles.artists}>Artists</div>
          <div className={styles.duration}>Duration</div>
        </div>
        <div>
          {currentSongs.map((song, index) => (
            <Song key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
