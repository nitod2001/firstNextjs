import React, { useState } from "react";
import styles from "../styles/Team.module.css";

import Team_Image from "./Team_Image";
import Team_Content from "./Team_Content";
import Team_Item from "./Team_Item";

export default function Team() {
  return (
    <section className={styles.team_section}>
      <div className="heading">
        our <span>team</span>
      </div>
      <div className={styles.team_options_wrap}>
        <div className={styles.team_options}>
          <div className={(styles.team_options_item, styles.active)}>
            leadership
          </div>
          <div className={styles.team_options_item}>agile</div>
          <div className={styles.team_options_item}>ops</div>
          <div className={styles.team_options_item}>engineers</div>
        </div>
      </div>
      <div className={styles.team_block}>
        <Team_Item
          none="true"
          url="/Rectangle702.png"
          name="Kiet Ngo"
          desc="AgileOps Lead"
        ></Team_Item>
        <Team_Item
          none="true"
          url="/Rectangle703.png"
          name="Duy Nguyen"
          desc="Agile Evangelist"
        ></Team_Item>
        <Team_Item
          none="true"
          url="/Rectangle704.png"
          name="Luu Minh"
          desc="DevOps Practitioner"
        ></Team_Item>
        <Team_Item
          none="true"
          url="/Rectangle705.png"
          name="Hau Tran"
          desc="Mobile Guru"
        ></Team_Item>
        <Team_Item
          none="true"
          url="/Rectangle706.png"
          name="Tam Pham"
          desc="Web Wizard"
        ></Team_Item>
        <Team_Item
          none="true"
          url="/Rectangle707.png"
          name="Ngoc Vu"
          desc="UI/UX Sorcerer"
        ></Team_Item>
      </div>
    </section>
  );
}
