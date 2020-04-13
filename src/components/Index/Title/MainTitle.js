//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex } from "../../../Utilities"
import { StyledMainHeading } from "../../../Elements"

const MainTitle = () => {
  return (
    <StyledMainTitle>
      <StyledMainHeading>Daniel Cooper.</StyledMainHeading>
      <StyledMainHeading>Web Developer.</StyledMainHeading>
    </StyledMainTitle>
  )
}

const StyledMainTitle = styled.div`
  ${flex("column")};

  @media (min-width: 768px) {
    width: 500px;
    margin-left: -5rem;

    h1:nth-child(2) {
      align-self: flex-end;
    }
  }

  @media (min-width: 1200px) {
    width: 60rem;
  }
`

export default MainTitle
