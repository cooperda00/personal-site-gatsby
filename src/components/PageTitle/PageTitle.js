//Modules
import React from "react"
//Sass
import styles from "./PageTitle.module.scss"

const PageTitle = ({ title }) => {
  return (
    <div className={styles.PageTitle}>
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle
