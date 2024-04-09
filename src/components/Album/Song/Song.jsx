import styles from "./Song.module.css";

const convertMStoMin = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};
export default function Song({ song }) {
  return (
    <>
      <div className={styles.songwrapper}>
        <div className={styles.imagewrapper}>
          <img src={song.image} alt={song.title} className={styles.songIcon} />
          <div className={styles.title}>{song.title}</div>
        </div>
        <div className={styles.artists}>{song.artists.join(", ")}</div>
        <div className={styles.duration}>
          {convertMStoMin(song.durationInMs)}
        </div>
      </div>
      <hr />
    </>
  );
}
