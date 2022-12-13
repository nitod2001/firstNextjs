import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Navbar_btn from "./Navbar_btn";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <img src="/PrimaryLogo.png"></img>
        </div>
        <nav className={styles.header_nav}>
          <Navbar_btn href="/" title="About"></Navbar_btn>
          <Navbar_btn href="/services" title="Services"></Navbar_btn>
          <Navbar_btn href="/exports" title="Exports"></Navbar_btn>
          <Navbar_btn href="/careers" title="Careers"></Navbar_btn>
          <Navbar_btn href="/contact" title="Contact"></Navbar_btn>
        </nav>
      </div>
    </div>
  );
}
