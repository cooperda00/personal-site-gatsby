//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Copy from "../components/Skills/Copy/Copy"
import Skills from "../components/Skills/Skills/Skills"
//SVGs
import css from "../images/skills/css.svg"
import gatsby from "../images/skills/gatsby.svg"
//Styles
import styled from "styled-components"
import { StyledMainHeading } from "../Elements"

const SkillsPage = ({ data }) => {
  const skills = {
    frontend: [
      {
        name: "HTML5",
        image: data.html.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "CSS3",
        image: css,
        type: "svg",
      },

      {
        name: "JavaScript",
        image: data.js.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "React",
        image: data.react.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "Gatsby",
        image: gatsby,
        type: "svg",
      },
      {
        name: "Redux",
        image: data.redux.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "Sass",
        image: data.sass.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "Styled Components",
        image: data.styledComponents.childImageSharp.fluid,
        type: "png",
      },
    ],
    backend: [
      {
        name: "Firebase",
        image: data.firebase.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "Contentful",
        image: data.contentful.childImageSharp.fluid,
        type: "png",
      },
      {
        name: "Netlify",
        image: data.netlify.childImageSharp.fluid,
        type: "png",
      },
    ],
  }
  return (
    <Layout>
      <SEO titleExtra="Skills" descriptionExtra="Skills" />
      <StyledMainHeading center>Skills</StyledMainHeading>
      <StyledContainer>
        <Skills skills={skills} />
        <Copy />
      </StyledContainer>
    </Layout>
  )
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
`

export const query = graphql`
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
    styledComponents: file(
      relativePath: { eq: "skills/styled_components_icon.png" }
    ) {
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

export default SkillsPage
