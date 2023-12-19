import React from "react";
import Button from "./Button/Button";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import styles from "./NavBar.module.css";
import QtifyLogo from "../../assets/Qtify.svg";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <Logo props={QtifyLogo} />
      </a>

      <Search
        placeholder="Search a album of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </div>
  );
}
