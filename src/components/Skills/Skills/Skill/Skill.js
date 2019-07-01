//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Skill.module.scss"

const Skill = () => {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.ImageContainer}></div>
      <p>I am Skill</p>
    </div>
  )
}

export default Skill
