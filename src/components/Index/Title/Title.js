//Modules
import React from "react"
//Sass
import styles from "./Title.module.scss"
//Components
import MainTitle from "./MainTitle/MainTitle"
import Subtitle from "./Subtitle/Subtitle"

const Title = () => {
  return (
    <div className={styles.Title}>
      <MainTitle />
      <Subtitle />
    </div>
  )
}

export default Title
