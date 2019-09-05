//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle/PageTitle"
import Contact from "../components/Contact/Contact"

const ContactPage = () => {
  return (
    <Layout>
      <PageTitle title="Get In Touch" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
