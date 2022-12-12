import React from "react";
import styles from "../styles/Team.module.css";

import Team_Image from "./Team_Image";
import Team_Content from "./Team_Content";

export default function Team_Item(props) {
  return (
    <div className={styles.team_item}>
      <Team_Image
        url={props.url}
        name={props.name}
        desc={props.desc}
      ></Team_Image>
      <Team_Content none={props.none}></Team_Content>
    </div>
  );
}
