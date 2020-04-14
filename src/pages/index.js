//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import Title from "../components/Index/Title/Title"
import Grid from "../components/Index/Grid/Grid"
import SEO from "../components/SEO/SEO"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO titleExtra="Home" descriptionExtra="Home" />
      <Title />
      <Grid />
    </Layout>
  )
}

export default IndexPage
