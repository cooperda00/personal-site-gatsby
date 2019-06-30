//Modules
import React from "react"
//Sass
import styles from "./Sidebar.module.scss"
//Components
import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"

const Sidebar = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <Navigation />
      <Social />
    </header>
  )
}

export default Sidebar
