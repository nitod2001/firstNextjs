import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <img src="/PrimaryLogo.png"></img>
        </div>
        <nav className={styles.header_nav}>
          <Link
            className={(styles.header_nav_item, styles.active)}
            href="/about"
          >
            <div>About</div>
          </Link>
          <Link className={styles.header_nav_item} href="/services">
            <div>Services</div>
          </Link>
          <Link className={styles.header_nav_item} href="/exports">
            <div>Exports</div>
          </Link>
          <Link className={styles.header_nav_item} href="/careers">
            <div>Careers</div>
          </Link>
          <Link className={styles.header_nav_item} href="/contact">
            <div>Contact</div>
          </Link>
        </nav>
      </div>
    </div>
  );
}
