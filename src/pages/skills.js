//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle/PageTitle"
import Copy from "../components/Skills/Copy/Copy"
import Skills from "../components/Skills/Skills/Skills"

const SkillsPage = () => {
  return (
    <Layout>
      <PageTitle title="Skills" />
      <Copy />
      <Skills />
    </Layout>
  )
}

export default SkillsPage
