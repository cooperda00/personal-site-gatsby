//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, colors } from "../../../Utilities"
//Components
import Logo from "./Logo"
import Navigation from "./Navigation"
import Social from "./Social"

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <Navigation />
      <Social />
    </StyledSidebar>
  )
}

// Hex Alpha: 25% = 40, 60% = 99
const StyledSidebar = styled.header`
  ${flex("column", "space-between", "center")};
  background: linear-gradient(
    to right,
    ${colors.primary + "99"} 0%,
    ${colors.secondary + "40"} 100%
  );
  height: 100vh;
  min-width: 75px;
  width: 10vw;

  @media (min-width: 360px) {
    min-width: 100px;
  }
`

export default Sidebar
