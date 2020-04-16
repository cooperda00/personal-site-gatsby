//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, spacing } from "../../Utilities"

const Success404 = ({ Icon, children }) => (
  <StyledSuccess404>
    <div className="icon-container">
      <Icon />
    </div>
    {children}
  </StyledSuccess404>
)

const StyledSuccess404 = styled.section`
  ${flex("column", "center", "center")}
  width: 100%;
  height: 100vh;
  padding: ${spacing.M};

  .icon-container {
    width: 100%;
    max-width: 50rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`

export default Success404
