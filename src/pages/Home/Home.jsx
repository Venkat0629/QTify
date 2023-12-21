import React from "react";
import styles from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/HeroSection/Hero";
import Section from "../../components/Section/Section";

export default function Home({}) {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <hr className={styles.separator} />
        <Section title="New Albums" data={newAlbums} type="album" />
        {/* <Section title="Songs" data={songs} type="song" /> */}
      </div>
    </>
  );
}
