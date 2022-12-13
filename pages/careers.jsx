import {
  faCakeCandles,
  faCertificate,
  faChevronDown,
  faChevronUp,
  faCircleDollarToSlot,
  faGift,
  faHandHoldingDollar,
  faMoneyBill1Wave,
  faToolbox,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../styles/Careers.module.css";
import Bar from "../component/Bar";
import Career_Job from "../component/Career_Job";

export default function careers() {
  return (
    <section className="careers_section">
      <Bar title="Careers"></Bar>
      <div className={styles.first_career}>
        <div className={styles.career_heading}>
          <span>AgileOps</span> is an IT firm, but we put people before
          technology.
        </div>
        <div className={styles.first_career_desc}>
          Our leadership commits to constantly improving the working environment
          and ensuring every team member can maximize their potential here.
          <br /> We are admittedly not an open club - there are rigorous
          criteria for entry. But once you are an AgileOps member, you are
          welcome to stay for the rest of your career. <br /> We are growing at
          an impressive pace, with new positions frequently open for candidates.
          <br />
          Browse through the current opening positions below, and we hope to
          receive your CV soon! <br /> You can even send us an expression of
          interest at
          <a>join@agileops.vn.</a> We welcome talents with open arms.
        </div>
        <div className="btn">Current Jobs</div>
      </div>
      <div className={styles.second_career}>
        <div className={styles.career_heading}>
          <span> Why</span> Work at AgileOps?
        </div>
        <div className={styles.career_desc}>
          Where A Flat Organization Meets Non-Siloed Teams
        </div>
        <div className={styles.career_content}>
          At AgileOps, middle managers are close to non-existent. We empower our
          team members by giving them greater autonomy, authority and
          decision-making capacity. In addition, we connect members across teams
          and strive to break down team silos as much as possible. You will have
          the opportunity to pick up new knowledge and skills working with
          different colleagues. Sometimes, you will even work alongside our CEO.
          We simply believe that no team is an island.
        </div>
        <div className={styles.career_image}>
          <img src="/career1.png"></img>
        </div>
      </div>
      <div className={styles.third_career}>
        <div className={styles.career_heading}>
          Continuous <span>Learning</span>and <span>Development</span>
        </div>
        <div className={styles.career_content}>
          <span> Continuous learning</span>
          is in our organizational DNA. You will have the time and resources to
          expand your skills, gain certifications and advance your professional
          career. Not to mention, we pay you extra if you hold prestigious and
          in-demand certifications. We sponsor our staff to participate in
          popular online training platforms such as Cloud Guru, Udemy, Atlassian
          University and AWS Training.
        </div>
        <div className={styles.third_career_block}>
          <img src="/career2.png"></img>
          <img src="/career3.png"></img>
          <img src="/career4.png"></img>
          <img src="/career5.png"></img>
        </div>
      </div>
      <div className={styles.fourth_career}>
        <div className={styles.fourth_career_content}>
          <div className={styles.fourth_career_heading_wrap}>
            <div className={styles.career_heading}>
              <span>Work-Life </span>Overtime Pay
            </div>
          </div>
          <div className={styles.fourth_career_block}>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faHandHoldingDollar}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Base Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCertificate}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Certification Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faUmbrellaBeach}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Holiday Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faGift}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Incentive Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCircleDollarToSlot}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Year-End Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faMoneyBill1Wave}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Spot Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faToolbox}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Overtime Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCakeCandles}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Birthday Bonus</div>
            </div>
          </div>
        </div>
        <div className="fourth_career_content">
          <div className={styles.fourth_career_heading_wrap}>
            <div className={styles.career_heading}>
              <span>Perks</span> (We’ve got some cool ones!)
            </div>
          </div>
          <div className={styles.fourth_career_block}>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faHandHoldingDollar}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Base Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCertificate}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Certification Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faUmbrellaBeach}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Holiday Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faGift}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Incentive Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCircleDollarToSlot}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Year-End Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faMoneyBill1Wave}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Spot Bonus</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faToolbox}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Overtime Pay</div>
            </div>
            <div className="fourth_career_item">
              <FontAwesomeIcon
                className={styles.fourth_career_icon}
                icon={faCakeCandles}
              ></FontAwesomeIcon>
              <div className={styles.fourth_career_desc}>Birthday Bonus</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifth_career}>
        <div className={styles.career_heading}>
          <span>Current Openings</span>
        </div>
        <Career_Job title="  DevOps/SysOps Engineer [ Fresher / Junior ] - $400 - $600 / Fulltime"></Career_Job>
        <Career_Job title="Atlassian Consultant [ Senior ] - $1400 - $2500 / Fulltime"></Career_Job>
        <Career_Job title="Technical Writer in English [ Junior ] - $500 - $800 / Fulltime"></Career_Job>
      </div>
    </section>
  );
}
