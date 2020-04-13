//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import Portfolio from "../components/Portfolio/Portfolio"
import SEO from "../components/SEO/SEO"
//Styles
import { StyledMainHeading } from "../Elements"

const PortfolioPage = ({ data }) => {
  const professionalProjects = data.professional
  const personalProjects = data.personal

  return (
    <Layout>
      <SEO titleExtra="Portfolio" descriptionExtra="Portfolio" />
      <StyledMainHeading center>Portfolio</StyledMainHeading>
      <Portfolio
        professionalProjects={professionalProjects}
        personalProjects={personalProjects}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    professional: allContentfulPortfolioItem(
      filter: { type: { eq: "professional" } }
      sort: { order: DESC, fields: projectStartDate }
    ) {
      edges {
        node {
          path
          title
          desktopImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }

    personal: allContentfulPortfolioItem(
      filter: { type: { eq: "personal" } }
      sort: { order: ASC, fields: projectStartDate }
    ) {
      edges {
        node {
          path
          title
          desktopImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
