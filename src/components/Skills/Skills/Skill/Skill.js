//Modules
import React from "react"
import Image from "gatsby-image"
//Sass
import styles from "./Skill.module.scss"

const Skill = ({ skill }) => {
  return (
    <div className={styles.SkillCard}>
      <div className={styles.SkillBubble}>
        <div className={styles.ImageContainer}>
          {skill.type === "png" ? (
            <Image
              fluid={skill.image}
              alt={skill.name}
              className={
                skill.name === "Firebase" ? styles.Firebase : styles.ImagePng
              }
            />
          ) : (
            <img
              src={skill.image}
              alt={skill.name}
              className={styles.ImageSvg}
            />
          )}
        </div>
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Skill
