//Modules
import React from "react"
//Sass
import styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <div className={styles.Border} />
      <div className={styles.Typography}>
        <h1>D.</h1>
        <h1>.C</h1>
      </div>
    </div>
  )
}

export default Logo
