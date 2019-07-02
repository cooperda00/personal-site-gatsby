//Modules
import React from "react"
//Sass
import styles from "./Skills.module.scss"
//Components
import Skill from "./Skill/Skill"

const Skills = ({ skills }) => {
  return (
    <section className={styles.Skills}>
      <div className={styles.GridContainer}>
        <h3>Front-End</h3>
        <div className={styles.Grid}>
          {skills.frontend.map(skill => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </div>

      <div className={styles.GridContainer}>
        <h3>Back-End</h3>
        <div className={styles.Grid}>
          {skills.backend.map(skill => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
