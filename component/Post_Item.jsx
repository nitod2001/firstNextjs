import React from "react";
import styles from "../styles/Post.module.css";

export default function Post_Item(props) {
  return (
    <div className={styles.post_item}>
      <div className={styles.post_date}>
        <div className={styles.post_day}>{props.day}</div>
        <div className={styles.post_month}>{props.month}</div>
      </div>
      <div className={styles.post_content}>
        <div className={styles.post_title}>{props.title}</div>
        <div className={styles.post_desc}>{props.desc}</div>
        <div className={styles.post_btn}>Read more</div>
      </div>
    </div>
  );
}
