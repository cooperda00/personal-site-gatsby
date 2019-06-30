//Modules
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
//Sass
import styles from "./Grid.module.scss"

const Grid = () => {
  const data = useStaticQuery(query)

  const cards = [
    {
      name: "Design",
      fluid: data.bangkok1.childImageSharp.fluid,
      alt: "Bangkok streets",
    },
    {
      name: "Development",
      fluid: data.bangkok2.childImageSharp.fluid,
      alt: "Aerial view of street",
    },
    {
      name: "Deployment",
      fluid: data.bangkok3.childImageSharp.fluid,
      alt: "Tuk Tuk",
    },
  ]

  return (
    <section className={styles.Grid}>
      <p className={styles.Copy}>
        I am a front-end focused web developer, born in the UK, based in Asia. I
        create web sites and web apps with a focus on mobile-first responsive
        design, accessibility, and a clean user experience. I can create complex
        data driven apps, product landing pages, blogs, portfolio sites,
        e-commerce solutions and anything in-between. Please
        <Link to="/contact" className={styles.Link}>
          {" "}
          contact
        </Link>{" "}
        me if you would like to work together.
      </p>

      {cards.map((card, i) => (
        <BackgroundImage
          fluid={card.fluid}
          className={`${styles[`Card${i + 1}`]} ${styles.Card}`}
          alt={card.alt}
        >
          <h2>{card.name}</h2>
        </BackgroundImage>
      ))}
    </section>
  )
}

const query = graphql`
  {
    bangkok1: file(relativePath: { eq: "bangkok1.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bangkok2: file(relativePath: { eq: "bangkok2.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    bangkok3: file(relativePath: { eq: "bangkok3.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Grid
