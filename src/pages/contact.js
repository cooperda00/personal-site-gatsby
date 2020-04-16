//Modules
import React from "react"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Contact from "../components/Contact/Contact"
//Styles
import { StyledMainHeading } from "../Elements"

const ContactPage = () => (
  <Layout>
    <SEO titleExtra="Contact" descriptionExtra="Contact" />
    <StyledMainHeading center>Contact Me</StyledMainHeading>
    <Contact />
  </Layout>
)

export default ContactPage
