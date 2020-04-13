//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex } from "../../../Utilities"
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

const StyledSidebar = styled.header`
  ${flex("column", "space-between", "center")};
  background: linear-gradient(
    270deg,
    rgba(238, 174, 201, 0.227328431372549) 0%,
    #daa45ca2 100%
  );
  height: 100vh;
  min-width: 75px;
  width: 10vw;

  @media (min-width: 360px) {
    min-width: 100px;
  }
`

export default Sidebar
