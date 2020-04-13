//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex } from "../../../Utilities"
//Components
import MainTitle from "./MainTitle"
import Subtitle from "./Subtitle"

const Title = () => {
  return (
    <StyledTitleContainer>
      <MainTitle />
      <Subtitle />
    </StyledTitleContainer>
  )
}

const StyledTitleContainer = styled.div`
  ${flex("column", "center", "center")};

  @media (min-width: 900px) {
    ${flex("row", "space-between", "flex-start")};
    max-width: 1000px;
    width: 70vw;
  }
`

export default Title
