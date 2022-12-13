import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";

export default function Navbar_btn(props) {
  const router = useRouter();
  return (
    <Link
      className={
        router.route === props.href ? styles.active : styles.header_nav_item
      }
      href={props.href}
    >
      <div>{props.title}</div>
    </Link>
  );
}
