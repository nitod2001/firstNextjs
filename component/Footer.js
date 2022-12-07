import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEarthAmerica,
  faEarthAsia,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer_section}>
      <div className={styles.footer_logo}>
        <img src="/PrimaryLogo1.png"></img>
      </div>
      <div className={styles.footer_block}>
        <div className="footer_locations">
          <div className={styles.footer_heading}>locations</div>
          <div className={styles.locations_block}>
            <img src="/vietnam2.png"></img>
            <div className={styles.locations_info}>
              <div className="locations_address">Floor 9, Flemington Tower</div>
              <div className={styles.locations_street}>
                182 Le Dai Hanh, District 11, Ho Chi Minh City
              </div>
              <div className="locations_phone">
                TEL: 028 022222722 - 0282222522
              </div>
            </div>
          </div>
          <div className={styles.locations_block}>
            <img src="/singapore1.png"></img>
            <div className={styles.locations_info}>
              <div className="locations_address">XXXX</div>
              <div className={styles.locations_street}>YYYY Singapore</div>
              <div className="locations_phone">
                TEL: 028 022222722 - 0282222522
              </div>
            </div>
          </div>
        </div>
        <div className="footer_services">
          <div className={styles.footer_heading}>services</div>
          <div className={styles.sevices_block}>
            <div className={styles.services_item}>Atlassian</div>
            <div className={styles.services_item}>Kubernetes</div>
            <div className={styles.services_item}>AWS</div>
            <div className={styles.services_item}>Bluetooth Development</div>
            <div className={styles.services_item}>Unity Development</div>
          </div>
        </div>
        <div className="footer_media">
          <div className={styles.footer_heading}>follow us</div>
          <div className={styles.social_media}>
            <div className={styles.social_media_item}>
              <img src="/upwork.png"></img>
            </div>
            <div className={styles.social_media_item}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className={styles.social_media_item}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={styles.social_media_item}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            <div>hi@agileops.vn</div>
          </div>
          <div className={styles.contact}>
            <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>
            <div>hi.agileops.vn</div>
          </div>
        </div>
      </div>
      <div className={styles.copy_right}>
        © 2022 AGILEOPS, ALL RIGHTS RESERVED | Privacy Policy | Legals
      </div>
    </div>
  );
}
