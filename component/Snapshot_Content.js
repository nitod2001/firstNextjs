import React from "react";
import styles from "../styles/Service.module.css";

export default function Snapshot_Content(props) {
  return (
    <div className="service_snapshot_content">
      <div className={styles.service_snapshot_content_title}>
        {props.children}
      </div>
      <div className={styles.service_snapshot_desc}>{props.content}</div>
      <style jsx>{`
        .service_snapshot_content {
          width: 100%;
          padding: 6rem;
          background: #e9eef4;
          text-align: ${props.ta};
        }
      `}</style>
    </div>
  );
}
