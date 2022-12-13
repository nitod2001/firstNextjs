import React from "react";
import styles from "../styles/Home.module.css";
import {
  faSolid,
  faCheck,
  faLight,
  faUserGroup,
  faUserGraduate,
  faCheckDouble,
  faFaceGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function MainHome() {
  return (
    <section className={styles.home_section}>
      <div className={styles.home_container}>
        <div className={styles.home}>
          <div className={styles.home_top}>
            <div className={styles.home_heading}>
              <span>Who</span> We Are
            </div>
            <p className={styles.home_intro}>
              <span>Agile Evangelists, DevOps Practitioners & Developers </span>
              Coached By Both
            </p>
            <p className={styles.home_content}>
              We are a team of veteran <span>Agile Evangelists</span>, seasoned
              DevOps Practitioners, and skilled Software Developers coached by
              both. Our specialists are certified and well-versed in popular
              technology ecosystems such as Atlassian, AWS, and Kubernetes.
              Whether it’s development, implementation, or consulting, we’ve got
              you covered.
            </p>
          </div>
          <div className={styles.home_bot}>
            <div className={styles.home_heading}>
              <span>Upworks</span> starts
            </div>
            <div className={styles.home_options}>
              <div className={styles.home_option_item}>
                <FontAwesomeIcon
                  className={styles.home_option_icon}
                  icon={(faSolid, faCheck)}
                />
                <p className={styles.home_option_content}>
                  <span>20+</span> Top-Rated Accounts
                </p>
              </div>
              <div className={styles.home_option_item}>
                <FontAwesomeIcon
                  className={styles.home_option_icon}
                  icon={(faSolid, faCheck)}
                />
                <p className={styles.home_option_content}>
                  <span>XX+</span> Combined Projects
                </p>
              </div>
              <div className={styles.home_option_item}>
                <FontAwesomeIcon
                  className={styles.home_option_icon}
                  icon={(faSolid, faCheck)}
                />
                <p className={styles.home_option_content}>
                  <span>50k+</span> Combined Hours
                </p>
              </div>
              <div className={styles.home_option_item}>
                <FontAwesomeIcon
                  className={styles.home_option_icon}
                  icon={(faSolid, faCheck)}
                />
                <p className={styles.home_option_content}>
                  <span>200+</span> Delighted Clients
                </p>
              </div>
            </div>
            <div className={styles.home_btn_wrap}>
              <Link className="btn" href="https://www.upwork.com/ag/agileops/">
                Hire us on upwork
              </Link>
            </div>
          </div>
        </div>
        <div></div>
        <div className={styles.home_block}>
          <div className={styles.home_block_item}>
            <FontAwesomeIcon
              className={styles.home_block_icon}
              icon={(faLight, faUserGroup)}
            ></FontAwesomeIcon>
            <div className="home_block_wrap">
              <div className={styles.home_block_title}>
                40 <span>+</span>
              </div>
              <div className={styles.home_block_desc}>Skilled engineers</div>
            </div>
          </div>
          <div className={styles.home_block_item}>
            <FontAwesomeIcon
              className={styles.home_block_icon}
              icon={faUserGraduate}
            ></FontAwesomeIcon>
            <div className="home_block_wrap">
              <div className={styles.home_block_title}>
                50 <span>%</span>
              </div>
              <div className={styles.home_block_desc}>
                Certified Individuals
              </div>
            </div>
          </div>
          <div className={styles.home_block_item}>
            <FontAwesomeIcon
              className={styles.home_block_icon}
              icon={faCheckDouble}
            ></FontAwesomeIcon>
            <div className="home_block_wrap">
              <div className={styles.home_block_title}>
                400<span>+</span>
              </div>
              <div className={styles.home_block_desc}>Projects Delivered</div>
            </div>
          </div>
          <div className={styles.home_block_item}>
            <FontAwesomeIcon
              className={styles.home_block_icon}
              icon={faFaceGrinStars}
            ></FontAwesomeIcon>
            <div className="home_block_wrap">
              <div className={styles.home_block_title}>
                200<span>+</span>
              </div>
              <div className={styles.home_block_desc}>Delighted Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
