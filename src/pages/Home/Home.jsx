import React from "react";
import styles from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/HeroSection/Hero";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs, genres } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <hr className={styles.separator} />
        <Section
          title="Songs"
          data={songs}
          type="song"
          filters={[{ key: "all", label: "All" }, ...genres]}
        />
        <hr className={styles.separator} />
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
