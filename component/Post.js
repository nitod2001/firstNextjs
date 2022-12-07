import React from "react";
import Post_Item from "./Post_Item";
import styles from "../styles/Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function Post() {
  return (
    <div className={styles.posts_section}>
      <div className={styles.posts}>
        <div className={styles.posts_heading}>
          <span>Lastest</span> Posts
          <div className={styles.post_circle}>
            <div className={styles.active}></div>
            <div></div>
          </div>
        </div>
        <div className={styles.posts_container}>
          <Post_Item
            day="11"
            month="Nov"
            title="Lorem ipsum dolor sit amet, consectetur"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Post_Item>
          <Post_Item
            day="11"
            month="Nov"
            title="Lorem ipsum dolor sit amet, consectetur"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></Post_Item>
        </div>
      </div>
      <div className={styles.client}>
        <div className={styles.posts_heading}>
          <span>What</span> Client's Say
          <div className={styles.post_circle}>
            <div className={styles.active}></div>
            <div></div>
          </div>
        </div>
        <div className={styles.client_content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <FontAwesomeIcon
            className={styles.client_icon}
            icon={faQuoteLeft}
          ></FontAwesomeIcon>
        </div>
        <div className={styles.user}>
          <div className={styles.user_avt}></div>
          <div className="user_block">
            <div className={styles.user_name}>John Doe</div>
            <div className={styles.user_desc}>Okler</div>
          </div>
        </div>
      </div>
    </div>
  );
}
