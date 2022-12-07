import React from "react";
import styles from "../styles/Client.module.css";

export default function Client() {
  return (
    <section className={styles.client_section}>
      <div className={styles.client_image}></div>
      <div className={styles.client_content}>
        <div className="heading">
          our <span>clients</span>
        </div>
        <div className={styles.client_options}>
          <div className={styles.client_item}>
            <img src="/SurveyMonkey.png"></img> <span>SurveyMonkey</span>
          </div>
          <div className={styles.client_item}>
            <img src="/dell.png"></img>
            <img src="/Technologies.png"></img>
          </div>
          <div className={styles.client_item}>
            <img src="/Guzman.png"></img>
          </div>
          <div className={styles.client_item}>
            <img src="/cprime.png"></img>
          </div>
          <div className={styles.client_item}>
            <img src="/Rocket 1.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
