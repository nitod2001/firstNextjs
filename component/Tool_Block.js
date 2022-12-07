import React from "react";
import styles from "../styles/Tool.module.css";

export default function Tool_Block(props) {
  return (
    <div className="tool_block">
      <div className={styles.tool_icon}>
        <img src={props.image}></img>
      </div>
      <div className={styles.tool_title}>{props.title}</div>
      {props.children}
      <style jsx>
        {`
          .tool_block {
            padding: 5rem 4.9rem 3.3rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${props.BgColor};
            color: ${props.color};
          }
        `}
      </style>
    </div>
  );
}
