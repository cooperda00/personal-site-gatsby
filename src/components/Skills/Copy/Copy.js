//Modules
import React from "react"
//Sass
import styles from "./Copy.module.scss"

const Copy = () => {
  return (
    <section className={styles.Copy}>
      <p>
        I value being able to build projects that are scalable, easily
        extendable and have an easily navigable codebase. Therefore it makes
        sense for me to build in a modular, component-based fashion using{" "}
        <strong>React</strong> and <strong>Redux</strong>. I like to support the
        front-end with <strong>Firebase</strong> services or a headless CMS like{" "}
        <strong>Contentful</strong> on the backend. Recently I have been using{" "}
        <strong>Gatsby</strong> a lot and find it perfect for most of my needs
        as a developer.
      </p>
    </section>
  )
}

export default Copy
