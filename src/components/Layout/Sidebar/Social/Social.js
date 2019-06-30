//Modules
import React from "react"
//SASS
import styles from "./Social.module.scss"
//Icons
import { IoLogoGithub } from "react-icons/io"

const Social = () => {
  return (
    <div className={styles.Social}>
      <a
        href="https://github.com/cooperda00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
      </a>
    </div>
  )
}

export default Social
