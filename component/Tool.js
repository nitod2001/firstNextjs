import React from "react";
import styles from "../styles/Tool.module.css";
import Tool_Block from "./Tool_Block";

export default function Tool() {
  return (
    <section className={styles.tool_section}>
      <Tool_Block
        BgColor="#0052D8"
        color="#fff"
        image="/atlassian.png"
        title="Agile Consultants"
      >
        <div className={styles.tool_content}>
          We offer a vast array of <span>Atlassian services</span>, all with a
          single purpose: helping you get the most out of your Atlassian
          investment.
        </div>
      </Tool_Block>
      <Tool_Block
        BgColor="#F6F6F6"
        color="#0C1C46"
        image="/laptop.png"
        title="Custom Development"
      >
        <div className={styles.tool_content}>
          Whether it’s mobile, web or UI/UX, we design, develop and deploy
          solutions that meet (and often exceed) your requirements.
        </div>
      </Tool_Block>
      <Tool_Block
        BgColor="#FFC41A"
        color="#0C1C46"
        image="/aws.png"
        title="Ops Consultants"
      >
        <div className={styles.tool_content}>
          With a heavy focus on <a>AWS </a>
          and Kubernetes, we will help you manage, strengthen and optimize your
          infrastructure, processes and tools.
        </div>
      </Tool_Block>
    </section>
  );
}
