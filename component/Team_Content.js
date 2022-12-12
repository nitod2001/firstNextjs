import styles from "../styles/Team.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Team_Content(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };
  return (
    <div className={styles.team_item_content}>
      <div className={props.none ? styles.none : styles.team_media}>
        <img src="/export1.png"></img>
        <img src="/export2.png"></img>
        <img src="/export3.png"></img>
        <img src="/export4.png"></img>
        <img src="/export5.png"></img>
        <img src="/export6.png"></img>
      </div>
      <div
        className={
          click ? styles.team_item_intro_active : styles.team_item_intro
        }
      >
        Kiet set the first AgileOps cornerstone by self-teaching Atlassian
        mastery years ago. He eventually certified with every certification
        Atlassian has ever published and became the first Atlassian Certified
        Expert ever in Vietnam. He then decide to take a similar route with AWS,
        certified with most AWS Professional & Specialty certifications. Is Kiet
        just an autodidact who wants to learn random things? Indeed, he looks to
        add up these two flavors: Atlassian (Agile) and AWS (Ops) - on top of
        something else that he has been doing for a decade so far - custom
        software development.
      </div>
      <div className={styles.team_item_tools}>
        <div className={styles.team_item_icon}>up</div>
        <div className={styles.team_item_icon}>in</div>
      </div>
      <div onClick={handleClick} className={styles.team_item_btn}>
        {!click ? (
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
        )}
      </div>
    </div>
  );
}
