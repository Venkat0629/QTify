import React, { useEffect, useState } from "react";
import styles from "./Album.module.css";
import { useOutletContext, useParams } from "react-router-dom";
export default function Album() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs, genres } = data;
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchedAlbum = fetchAlbum(id);
    console.log(fetchedAlbum);
    setAlbum({ ...fetchedAlbum });
  }, [id]);

  const fetchAlbum = (id) => {
    const allAlbums = [...topAlbums, ...newAlbums];
    const foundAlbum = allAlbums.find((album) => id.includes(album.slug));
    console.log(foundAlbum.songs);
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

  return album ? (
    <div className={styles.wrapper}>
      <div className={styles.headerwrapper}>
        <img src={album.image} alt={album.slug} className={styles.albumimage} />
        <div>
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <p></p>
          <p>
            {album.songs.length} songs . {album.duration} .{album.follows}{" "}
            Follows
          </p>
          <div>
            <button>Shuffle</button>
            <button>Add to library</button>
          </div>
        </div>
      </div>
      <div className={styles.songswrapper}>
        {/* Render songs or other components related to the album */}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
