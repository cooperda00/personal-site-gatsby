//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle/PageTitle"
import Featured from "../components/Portfolio/Featured/Featured"
import SEO from "../components/SEO/SEO"

const PortfolioPage = ({ data }) => {
  const featuredPortfolio = data.featured

  return (
    <Layout>
      <SEO titleExtra="Portfolio" descriptionExtra="Portfolio"/>
      <PageTitle title="Selected Portfolio" />
      <Featured featuredPortfolio={featuredPortfolio} />
    </Layout>
  )
}

export const query = graphql`
  {
    featured: allContentfulPortfolioItem(filter: {featured: {eq: true}}, 
      sort: {fields: [priority] order: ASC}) {
      edges {
        node {
          liveUrl
          codeUrl
          title
          technology
          priority
          desktopImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          tabletImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          mobileImage {
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`

export default PortfolioPage
