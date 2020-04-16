//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Portfolio from "../components/Portfolio/Portfolio"
//Styles
import { StyledMainHeading } from "../Elements"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO titleExtra="Portfolio" descriptionExtra="Portfolio" />
    <StyledMainHeading center>Portfolio</StyledMainHeading>
    <Portfolio
      professionalProjects={data.professional}
      personalProjects={data.personal}
    />
  </Layout>
)

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
            fluid(maxWidth: 500) {
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
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default PortfolioPage
