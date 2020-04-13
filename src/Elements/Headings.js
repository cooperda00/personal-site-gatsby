import styled from "styled-components"
import { font, flex, spacing } from "../Utilities"

export const StyledMainHeading = styled.h1`
  ${font("M")};
  font-weight: 300;
  letter-spacing: 0.2rem;
  text-align: ${props => (props.center ? "center" : "left")};

  @media (min-width: 360px) {
    ${font("L")};
  }

  @media (min-width: 768px) {
    ${font("XL")};
  }

  @media (min-width: 1200px) {
    ${font("XXL")};
  }
`

export const StyledSubHeading = styled.h2`
  ${flex("row", "flex-start", "center")};
  ${font("SM")};
  font-weight: 300;
  letter-spacing: 0.1rem;
  text-align: center;

  svg {
    display: none;
    transform: rotate(180deg);
    margin-left: ${spacing.S};
  }

  @media (min-width: 360px) {
    ${font("M")};
  }

  @media (min-width: 768px) {
    ${font("L")};

    svg {
      display: block;
    }
  }
`
