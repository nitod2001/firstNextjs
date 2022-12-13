import React from "react";
import Bar from "../component/Bar";
import styles from "../styles/Export.module.css";
import Team_Item from "../component/Team_Item";

export default function exports() {
  return (
    <section className="export_section">
      <Bar title="Exports"></Bar>
      <div className={styles.export_content}>
        <div className={styles.export_heading}>our team</div>
        <div className={styles.export_titile}>
          We are proud to introduce you to our team.
        </div>
        <div className={styles.export_desc_wrap}>
          <div className={styles.export_desc}>
            We are a team of passionate and seasoned engineers with a diverse
            array of specialties, including Atlassian, AWS, Kubernetes, Mobile &
            Web Development, and UI/UX.
          </div>
          <div className={styles.export_desc_block}>
            <div className="export_role">
              <div className={styles.export_role_title}>RoLE</div>
              <select name="role" className={styles.export_role_options}>
                <option value="Atlassian">Atlassian</option>
                <option value="XXX">XXX</option>
                <option value="YYY">YYY</option>
              </select>
            </div>
            <div className="export_certification">
              <div className={styles.export_role_title}>CERTIFICATION</div>
              <select className={styles.export_role_options}>
                <option value="Atlassian">Atlassian</option>
                <option value="XXX">XXX</option>
                <option value="YYY">YYY</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.export_block}>
          <Team_Item
            url="/Rectangle702.png"
            name="Kiet Ngo"
            desc="AgileOps Lead"
          ></Team_Item>
          <Team_Item
            url="/Rectangle703.png"
            name="Duy Nguyen"
            desc="Agile Evangelist"
          ></Team_Item>
          <Team_Item
            url="/Rectangle704.png"
            name="Luu Minh"
            desc="DevOps Practitioner"
          ></Team_Item>
          <Team_Item
            url="/Rectangle705.png"
            name="Hau Tran"
            desc="Mobile Guru"
          ></Team_Item>
          <Team_Item
            url="/Rectangle706.png"
            name="Tam Pham"
            desc="Web Wizard"
          ></Team_Item>
          <Team_Item
            url="/Rectangle707.png"
            name="Ngoc Vu"
            desc="UI/UX Sorcerer"
          ></Team_Item>
        </div>
      </div>
    </section>
  );
}
