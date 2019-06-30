//Modules
import React from "react";
//SASS
import styles from "./Subtitle.module.scss";

const Subtitle = () => {
  return (
    <div className={styles.Subtitle}>
      <h2>UX</h2>
      <h2>JavaScript </h2>
      <h2>UI </h2>
      <h2>React</h2>
    </div>
  );
};

export default Subtitle;
