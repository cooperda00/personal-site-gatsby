//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, font, spacing } from "../../../Utilities"

const Subtitle = () => {
  return (
    <StyledSubtitle>
      <h2>UX</h2>
      <h2>JavaScript </h2>
      <h2>UI </h2>
      <h2>React</h2>
    </StyledSubtitle>
  )
}

const StyledSubtitle = styled.div`
  ${flex("column")};
  letter-spacing: 0.4rem;
  position: relative;
  width: 17rem;
  margin-top: ${spacing.S};

  h2 {
    ${font("S")};
    font-weight: 300;
  }

  h2:nth-child(3),
  h2:nth-child(4) {
    align-self: flex-end;
  }

  h2:nth-child(1)::after,
  h2:nth-child(3)::before {
    content: "";
    position: absolute;
    width: 0.3rem;
    height: 1.5em;
    background: orange;
  }

  h2:nth-child(1) {
    &::after {
      margin-left: 1rem;
    }
  }

  h2:nth-child(3) {
    &::before {
      margin-left: -1rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;

    h2 {
      ${font("M")};
    }

    h2:nth-child(1) {
      &::after {
        margin-left: 2rem;
      }
    }

    h2:nth-child(3) {
      &::before {
        margin-left: -2rem;
      }
    }
  }
`

export default Subtitle
