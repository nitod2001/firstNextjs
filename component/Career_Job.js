import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../styles/Careers.module.css";

export default function Career_Job(props) {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    click ? setClick(false) : setClick(true);
  };
  console.log(click);
  return (
    <div className={styles.career_job}>
      <div className={styles.career_job_title_block}>
        <div className={styles.career_job_title}>{props.title}</div>
        {click ? (
          <FontAwesomeIcon
            onClick={handleClick}
            className={styles.career_job_icon}
            icon={faChevronDown}
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            onClick={handleClick}
            className={styles.career_job_icon}
            icon={faChevronUp}
          ></FontAwesomeIcon>
        )}
      </div>
      <div
        className={
          click ? styles.career_job_content_none : styles.career_job_content
        }
      >
        <div className={styles.career_job_content_block}>
          <div className={styles.career_job_content_desc}>
            The DevOps Engineer (Fresher Level) is responsible for the effective
            provisioning, installation, configuration, operation, and
            maintenance of AgileOps' internal DevOps and SysOps systems hardware
            and software and related infrastructure. You will participate in
            technical research and development to enable continuing innovation
            within the infrastructure. You will also ensure that system
            hardware, operating systems, software systems, and related
            procedures adhere to organizational values and are enabling staff
            organization-wide.
          </div>
          <div className={styles.career_job_content_title}>
            Duties and responsibilities:
          </div>
          <ul>
            <li>
              Managing and maintaining AgileOps' internal Proxmox infrastructure
              and Kubernetes on-premise cluster
            </li>
            <li>
              Developing DevOps and SysOps solutions and implementations for
              various project and operational needs
            </li>
            <li>
              Installing new and rebuilding existing servers and configuring
              hardware, peripherals, services, settings, directories, storage,
              etc. in accordance with standards and project/operational
              requirements
            </li>
            <li>
              Developing and maintaining installation and configuration
              procedures
            </li>
            <li>
              Developing and maintaining installation and configuration
              procedures
            </li>
            <li>
              Performing daily system monitoring, verifying the integrity and
              availability of all hardware, server resources, systems, and key
              processes, reviewing system and application logs, and verifying
              completion of scheduled jobs such as backups
            </li>
            <li>
              Performing ongoing performance tuning and resource optimization as
              required
            </li>
            <li>Configuring CPU, memory, and disk partitions as required</li>
          </ul>
          <div className={styles.career_job_content_title}>
            This Is For You If You Have:
          </div>
          <ul>
            {/* 2nd */}
            <li>
              Bachelor’s Degree in Information Technology, Networking or a
              related field
            </li>
            <li>
              A strong background in Linux and Networking (AWS and on-premises
              products)
            </li>
            <li>A productivity and performance-focused mindset</li>
            <li>
              The ability to communicate technical concepts and ideas clearly
            </li>
            <li>Keen attention to detail</li>
          </ul>
          <div className={styles.career_job_content_title}>
            It’s Even Better If You Have:
          </div>
          <ul>
            {/* 3rd */}
            <li>6-12 months of Linux system administration experience</li>
            <li>
              The ability to document, diagram, and flowchart systems and
              processes
            </li>
            <li>
              A curious and continuous hunger for learning and staying up to
              date with the latest solutions on the market
            </li>
            <li>An analytical mind</li>
            <li>A creative and open-minded attitude</li>
          </ul>
        </div>
        <div className="btn">APPLY NOW</div>
      </div>
    </div>
  );
}
