//Modules
import React from "react"
//Components
import Sidebar from "./Sidebar/Sidebar"
//Styles
import "./base.css"
import styled from "styled-components"
import { flex, spacing } from "../../Utilities"

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Sidebar />
      <main>{children}</main>
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;
  height: 100vh;

  main {
    ${flex("column", "flex-start", "center")};
    height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-y: scroll;
    padding: ${spacing.M} ${spacing.S};

    @media (min-width: 768px) {
      padding: ${spacing.M};
    }
  }
`

export default Layout
