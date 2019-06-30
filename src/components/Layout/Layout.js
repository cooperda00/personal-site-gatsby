//Modules
import React from "react"
//Sass
import styles from "./Layout.module.scss"
import "./base.scss"
//Components
import Sidebar from "./Sidebar/Sidebar"

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout
