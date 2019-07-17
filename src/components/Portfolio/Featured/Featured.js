//Modules
import React from "react"
//Sass
import styles from "./Featured.module.scss"
//Components
import Card from "../Card/Card"

const Featured = ({ featuredPortfolio: { edges } }) => {
  return (
    <section className={styles.Featured}>
      {edges.map(item => (
        <Card item={item} />
      ))}
    </section>
  )
}

export default Featured
