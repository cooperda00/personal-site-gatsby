//Module
import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
//Sass
import styles from "./Card.module.scss"
//Icons
import { IoIosDesktop, IoIosCode } from "react-icons/io"
//Svgs
import css from "../../../images/skills/css.svg"
import gatsby from "../../../images/skills/gatsby.svg"

const Card = ({ item: { node } }) => {
  const {
    desktopImage: { fluid },
    liveUrl,
    title,
    technology,
    codeUrl,
  } = node

  const data = useStaticQuery(query)

  const getTechIcon = name => {
    switch (name) {
      case "html5":
        return (
          <Image fluid={data.html.childImageSharp.fluid} alt="html5 logo" />
        )
      case "css3":
        return <img src={css} alt="css3 logo" />
      case "sass":
        return <Image fluid={data.sass.childImageSharp.fluid} alt="sass logo" />
      case "javascript":
        return (
          <Image fluid={data.js.childImageSharp.fluid} alt="javascript logo" />
        )
      case "react":
        return (
          <Image fluid={data.react.childImageSharp.fluid} alt="react logo" />
        )
      case "gatsby":
        return <img src={gatsby} alt="gatsby logo" />
      case "redux":
        return (
          <Image fluid={data.redux.childImageSharp.fluid} alt="redux logo" />
        )
      case "firebase":
        return (
          <Image
            fluid={data.firebase.childImageSharp.fluid}
            alt="firebase logo"
          />
        )
      case "contentful":
        return (
          <Image
            fluid={data.contentful.childImageSharp.fluid}
            alt="contentful logo"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.Card}>
      <div className={styles.MainImageContainer}>
        <Image
          fluid={fluid}
          className={styles.Image}
          alt={`${title} desktop screenshot`}
        />
      </div>

      <h2 className={styles.Title}>{title}</h2>

      <div className={styles.Technology}>
        {technology.map(item => (
          <div className={styles.ImageContainer}>{getTechIcon(item)}</div>
        ))}
      </div>

      <div className={styles.Controls}>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <IoIosDesktop />
          <p>Live</p>
        </a>

        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <IoIosCode />
            <p>Code</p>
          </a>
        )}
      </div>
    </div>
  )
}

const query = graphql`
  {
    contentful: file(relativePath: { eq: "skills/contentful.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    firebase: file(relativePath: { eq: "skills/firebase.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    html: file(relativePath: { eq: "skills/html.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    js: file(relativePath: { eq: "skills/js.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    netlify: file(relativePath: { eq: "skills/netlify.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    react: file(relativePath: { eq: "skills/react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    redux: file(relativePath: { eq: "skills/redux.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    sass: file(relativePath: { eq: "skills/sass.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Card
