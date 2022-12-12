import React from "react";
import styles from "../styles/Service.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function Bar(props) {
  return (
    <div className={styles.service_bar}>
      <div className={styles.service_title}>{props.title}</div>
      <Link href="/" className={styles.service_homepage}>
        Home <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon> page
      </Link>
    </div>
  );
}
