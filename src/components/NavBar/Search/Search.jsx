import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../../assets/SearchIcon.svg";

export default function Search({ placeholder }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input className={styles.search} placeholder={placeholder} required />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
