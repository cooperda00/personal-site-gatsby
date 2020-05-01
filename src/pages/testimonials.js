//Modules
import React from "react"
import { graphql } from "gatsby"
//Components
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import HoverTestimonialChange from "../components/Testimonials/HoverTestimonialChange"
//Styles
import { StyledMainHeading } from "../Elements"

const testimonials = ({ data }) => {
  const { james, mutsumi, tayani } = data

  return (
    <Layout>
      <SEO titleExtra="Testimonials" descriptionExtra="Testimonials" />
      <StyledMainHeading center>Testimonials</StyledMainHeading>
      <HoverTestimonialChange
        testimonial1={james}
        testimonial2={mutsumi}
        testimonial3={tayani}
      />
    </Layout>
  )
}

export const query = graphql`
  {
    james: contentfulTestimonial(name: { eq: "James Round" }) {
      image {
        fluid {
          src
        }
      }
      website
      text {
        text
      }
      organisation
      name
    }

    mutsumi: contentfulTestimonial(name: { eq: "Mutsumi Adachi" }) {
      image {
        fluid {
          src
        }
      }
      website
      text {
        text
      }
      organisation
      name
    }

    tayani: contentfulTestimonial(name: { eq: "Tayani van Eeden" }) {
      image {
        fluid {
          src
        }
      }
      website
      text {
        text
      }
      organisation
      name
    }
  }
`

export default testimonials
