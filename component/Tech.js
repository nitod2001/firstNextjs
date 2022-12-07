import React from "react";
import styles from "../styles/Tech.module.css";

export default function Tech() {
  return (
    <section className={styles.tech_section}>
      <div className={styles.partners_block}>
        <div className="heading">
          <span>partners</span>
        </div>
        <div className={styles.partners_options}>
          <div className="partners_item">
            <img src="/zapier.png"></img>
          </div>
          <div className="partners_item">
            <img src="/KCSP 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/image 2030.png"></img>
          </div>
          <div className="partners_item">
            <img src="/SeekPng 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/image 7.png"></img>
          </div>
        </div>
      </div>
      <div className="technologies_block">
        <div className="heading">
          <span>technologies</span>
        </div>
        <div className={styles.tech_options1}>
          <div className="partners_item">
            <img src="/Google-flutter-logo 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/Android-Logo 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/iOS-Logo-2013.png"></img>
          </div>
          <div className="partners_item">
            <img src="/React_Logo_wordmark 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/Microsoft-Azure-Symbol 1.png"></img>
          </div>
        </div>
        <div className={styles.tech_options2}>
          <div className="partners_item">
            <img src="/2560px-Node.js_logo_2015 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/kubernetes-logo 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/1200px-AmazonWebservices_Logo 1.png"></img>
          </div>
          <div className="partners_item">
            <img src="/path893.png"></img>
            <img src="/path897.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
