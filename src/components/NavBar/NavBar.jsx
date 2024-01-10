import React from "react";
import Button from "./Button/Button";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import styles from "./NavBar.module.css";
import QtifyLogo from "../../assets/Qtify.svg";
import { Link } from "react-router-dom";

export default function NavBar({ searchData, setSearchData }) {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <Logo props={QtifyLogo} />
      </Link>
      <Search
        placeholder="Search a album of your choice"
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <Button>Give Feedback</Button>
    </div>
  );
}
