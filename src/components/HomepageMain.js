import React from "react";
import styles from "./HomepageMain.module.css";
import Formation from "../../static/img/01_diagram.png";
import Podify from "../../static/img/02_diagram.png";
import Builders from "../../static/img/03_diagram.png";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.header__container}>
        <img className={styles.diagrams} src={Formation} />
        <img className={styles.diagrams} src={Podify} />
        <img className={styles.diagrams} src={Builders} />
      </div>
      <div className={styles.section}>
        <h1 className={styles.section__heading}>
          Dive straight into building.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.orcaSection}>
        <h1 className={styles.section__heading}>Lorem Ipsum?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
