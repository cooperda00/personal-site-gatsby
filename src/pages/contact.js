//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"
//Styles
import { StyledMainHeading } from "../Elements"

const ContactPage = () => {
  return (
    <Layout>
      <SEO titleExtra="Contact" descriptionExtra="Contact" />
      <StyledMainHeading center>Contact Me</StyledMainHeading>
      <Contact />
    </Layout>
  )
}

export default ContactPage
