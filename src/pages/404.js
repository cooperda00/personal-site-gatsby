//Modules
import React from "react"
//Styles
import { StyledSubHeading } from "../Elements"
import { spacing } from "../Utilities"
//Components
import Layout from "../components/Layout/Layout"
import Success404 from "../components/Success404/Success404"
//Icons
import Icon from "../images/not_found.inline.svg"

const NotFoundPage = () => (
  <Layout>
    <Success404 Icon={Icon}>
      <StyledSubHeading>
        Sorry This Page Doesn't Exist{" "}
        <span
          role="img"
          aria-label="sad face emoji"
          style={{ marginLeft: `${spacing.S}` }}
        >
          {" "}
          😥
        </span>
      </StyledSubHeading>
    </Success404>
  </Layout>
)

export default NotFoundPage
