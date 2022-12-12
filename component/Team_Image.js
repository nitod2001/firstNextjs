import React from "react";
import styles from "../styles/Team.module.css";

export default function Team_Image(props) {
  return (
    <div className="team_item_image">
      <div className={styles.team_item_image_wrap}>
        <div className={styles.team_item_info}>
          {props.name}
          <div className={styles.team_item_desc}>{props.desc}</div>
        </div>
      </div>
      <style jsx>
        {`
          .team_item_image {
            border-radius: 1rem;
            overflow: hidden;
            position: relative;
            margin-bottom: 1rem;
            height: 356px;
            background-image: url(${props.url});
            background-color: #e9eef4;
            background-blend-mode: luminosity;
          }
        `}
      </style>
    </div>
  );
}
