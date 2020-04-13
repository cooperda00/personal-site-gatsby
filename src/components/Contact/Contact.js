//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { spacing } from "../../Utilities"
//Components
import Form from "./Form"
import Details from "./Details"

const Contact = () => {
  return (
    <StyledContactContainer>
      <Form />
      <Details />
    </StyledContactContainer>
  )
}

const StyledContactContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  grid-gap: ${spacing.L};
  margin-top: ${spacing.M};

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default Contact
