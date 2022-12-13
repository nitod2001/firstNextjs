import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Bar from "../component/Bar";
import Contact_Image from "../component/Contact_Image";
import styles from "../styles/Contact.module.css";

export default function contact() {
  return (
    <div className="contact_section">
      <Bar title="Contact"></Bar>
      <div className={styles.contact_block}>
        <div className={styles.contact_content}>
          <div>
            <div className={styles.contact_heading}>Our Office</div>
            <div className={styles.contact_title}>
              Feel free to ask for details, don't save any questions!
            </div>
            <div className={styles.contact_content_block}>
              <div className={styles.contact_content_icon}>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              </div>
              <div className={styles.contact_content_intro}>
                <div className={styles.contact_content_title}>ADDRESS</div>
                <div className={styles.contact_content_desc}>
                  Flemington Tower, 182 Le Dai Hanh, District 11, Ho Chi Minh
                  City, Vietnam
                </div>
              </div>
            </div>
            <div className={styles.contact_content_block}>
              <div className={styles.contact_content_icon}>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              <div className={styles.contact_content_intro}>
                <div className={styles.contact_content_title}>phone</div>
                <div className={styles.contact_content_desc}>
                  028 22222722 – 028 22222522
                </div>
              </div>
            </div>
            <div className={styles.contact_content_block}>
              <div className={styles.contact_content_icon}>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              <div className={styles.contact_content_intro}>
                <div className={styles.contact_content_title}>email</div>
                <div className={styles.contact_content_desc}>
                  Drop us an email at
                  <a> hi@agileops.vn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_image}></div>
      </div>
      <div className={styles.contact_image_block}>
        <Contact_Image
          bgColor="transparent"
          url="/contact1.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="rgba(12, 28, 70, 0.8)"
          url="/contact2.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact3.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact4.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact5.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact6.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact7.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact8.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact9.png"
        ></Contact_Image>
        <Contact_Image
          bgColor="transparent"
          url="/contact10.png"
        ></Contact_Image>
      </div>
    </div>
  );
}
