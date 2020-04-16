//Modules
import React from "react"
import { Link } from "gatsby"
//Styles
import styled from "styled-components"
import { font, spacing, colors } from "../../../Utilities"
//Components
import Mockup from "../Mockup/Mockup"

const Grid = () => (
  <StyledGrid>
    <Mockup />
    <p className="copy">
      I am a front-end focused web developer currently based in Norwich,
      England. I create web sites and web apps with a focus on mobile-first
      responsive design, accessibility, and a clean user experience. I can
      create product landing pages, blogs, portfolio sites, e-commerce
      solutions, application UIs and anything in-between. Feel free to
      <Link to="/contact" className="link">
        {" "}
        contact
      </Link>{" "}
      me if you would like to work together.
    </p>
  </StyledGrid>
)

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-gap: ${spacing.M};
  justify-items: center;
  align-items: center;
  width: 100%;
  margin-top: ${spacing.M};

  @media (min-width: 950px) {
    grid-template-columns: 1.5fr 1fr;
  }

  .copy {
    ${font("XS")};
    width: 100%;

    @media (min-width: 360px) {
      ${font("S")};
    }

    @media (min-width: 700px) {
      ${font("SM")};
    }

    .link {
      color: ${colors.link};
    }
  }
`

export default Grid
