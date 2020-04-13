//Modules
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
//SVGs
import GatsbyLogo from "../../images/skills/gatsby.inline.svg"
//Styles
import styled from "styled-components"

const TechLogo = ({ skill }) => {
  const data = useStaticQuery(query)

  switch (skill) {
    case "gatsby":
      return (
        <StyledLogoContainer>
          <GatsbyLogo alt="gatsby" />
        </StyledLogoContainer>
      )
    case "styled-components":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.styledComponents.childImageSharp.fluid}
            alt="styled-components"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "react":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.react.childImageSharp.fluid}
            alt="react"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "sass":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.sass.childImageSharp.fluid}
            alt="sass"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "contentful":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.contentful.childImageSharp.fluid}
            alt="contentful"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "javascript":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.js.childImageSharp.fluid}
            alt="javascript"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "redux":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.redux.childImageSharp.fluid}
            alt="redux"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    case "firebase":
      return (
        <StyledLogoContainer>
          <Image
            fluid={data.firebase.childImageSharp.fluid}
            alt="firebase"
            className="image"
            imgStyle={{
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
          />
        </StyledLogoContainer>
      )
    default:
      return <p>{skill}</p>
  }
}

const StyledLogoContainer = styled.div`
  height: 5rem;
  width: 7rem;

  svg,
  .image {
    height: 100%;
    width: 100%;
  }
`

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

export default TechLogo
