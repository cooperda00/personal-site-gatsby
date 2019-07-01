//Modules
import React from "react"
//Sass
import styles from "./Skills.module.scss"
//Components
import Skill from "./Skill/Skill"

const Skills = () => {
  return (
    <section className={styles.Skills}>
      <div className={styles.GridContainer}>
        <h3>Front-End</h3>
        <div className={styles.Grid}>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>

      <div className={styles.GridContainer}>
        <h3>Back-End</h3>
        <div className={styles.Grid}>
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </section>
  )
}

export default Skills
