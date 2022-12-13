import React from "react";
import styles from "../styles/Service.module.css";

export default function Service_Offer(props) {
  return (
    <div className={styles.service_offer_item}>
      <div className={styles.service_offer_image}>
        <img src={props.src}></img>
      </div>
      <div className={styles.service_offer_content}>
        <div className={styles.service_offer_title}>{props.title}</div>
        <div className={styles.service_offer_desc}>{props.content}</div>
      </div>
    </div>
  );
}
