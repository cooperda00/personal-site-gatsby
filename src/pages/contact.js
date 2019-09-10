//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle/PageTitle"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"

const ContactPage = () => {
  return (
    <Layout>
      <SEO titleExtra="Contact" descriptionExtra="Contact"/>
      <PageTitle title="Get In Touch" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
