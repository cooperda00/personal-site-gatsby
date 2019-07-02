//Modules
import React from "react"
import { Link } from "gatsby"
//SASS
import styles from "./Navigation.module.scss"
//Constants
import { links } from "../../../../constants/links"
//Icons
import { IoMdDownload } from "react-icons/io"
//Assets
import CV from "../../../../Assets/daniel_cooper_cv.pdf"

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      {links.map(({ path, text }) => (
        <Link to={path} activeClassName="active-link" key={text}>
          {text}
        </Link>
      ))}
      <a href={CV} className={styles.Resume} download>
        CV
        <IoMdDownload />
      </a>
    </nav>
  )
}

export default Navigation
