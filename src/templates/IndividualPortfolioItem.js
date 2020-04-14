//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import IndividualPiece from "../components/Portfolio/IndividualPiece"
//Styles
import { StyledMainHeading } from "../Elements"

const IndividualPortfolioItem = ({
  data: { contentfulPortfolioItem: piece },
}) => {
  return (
    <Layout>
      <StyledMainHeading>{piece.title}</StyledMainHeading>
      <IndividualPiece piece={piece} />
    </Layout>
  )
}

export const query = graphql`
  query($title: String!) {
    contentfulPortfolioItem(title: { eq: $title }) {
      title
      projectStartDate
      liveUrl
      codeUrl
      technology
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
      richText {
        json
      }
    }
  }
`

export default IndividualPortfolioItem