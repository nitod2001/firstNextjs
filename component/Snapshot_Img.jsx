import React from "react";
import styles from "../styles/Service.module.css";

export default function Snapshot_Img(props) {
  return (
    <div className="service_snapshot_img">
      <img src={props.src}></img>
      <style jsx>
        {`
          .service_snapshot_img {
            position: relative;
            padding: 0 6rem;
          }
          .service_snapshot_img::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${props.bgColor};
          }
        `}
      </style>
    </div>
  );
}
