//Modules
import React from "react"
//Styles
import { StyledSubHeading } from "../Elements"
//Components
import Layout from "../components/Layout/Layout"
import Success404 from "../components/Success404/Success404"
//Icons
import Icon from "../images/success.inline.svg"

const SuccessPage = () => (
  <Layout>
    <Success404 Icon={Icon}>
      <StyledSubHeading>Thank you for getting in touch!</StyledSubHeading>
      <StyledSubHeading>
        I will do my best to respond as soon as possible.
      </StyledSubHeading>
    </Success404>
  </Layout>
)

export default SuccessPage
