//Modules
import React from "react"
import { Link } from "gatsby"
//Styles
import styled from "styled-components"
import { font, colors, boxShadow } from "../Utilities"

//MAIN BUTTONS ******************************************
export const StyledButton = styled.button`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.primary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.primaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.primaryD};
  }
`

export const StyledOutButton = styled.a`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.primary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.primaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.primaryD};
  }
`

export const StyledLink = styled(Link)`
  ${font("S")}
  font-weight: 300;
  letter-spacing: 0.1rem;
  border: none;
  background: ${colors.primary};
  padding: 1rem 2rem;
  color: black !important;
  cursor: pointer;
  transition: 0.4s;
  border-bottom: 0.3rem solid ${colors.primaryD};
  text-align: center;
  box-shadow: ${boxShadow.dark};

  &:hover {
    background: ${colors.primaryD};
  }
`

//ANIMATED ARROW BUTTONS ******************************************
export const AnimatedArrowButton = ({ children }) => {
  return (
    <StyledAnimatedArrowButton>
      {children}
      <span />
    </StyledAnimatedArrowButton>
  )
}

export const AnimatedArrowAnchor = ({ children }) => {
  return (
    <StyledAnimatedArrowAnchor>
      {children}
      <span />
    </StyledAnimatedArrowAnchor>
  )
}

export const AnimatedArrowLink = ({ children }) => {
  return (
    <StyledAnimatedArrowLink>
      {children}
      <span />
    </StyledAnimatedArrowLink>
  )
}

const StyledAnimatedArrowButton = styled(StyledButton)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;
  ${font("XS")};

  @media (min-width: 360px) {
    ${font("S")};
  }

  @media (min-width: 768px) {
    ${font("SM")};
  }

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    /* top: 0; */
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

const StyledAnimatedArrowAnchor = styled(StyledOutButton)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`

const StyledAnimatedArrowLink = styled(StyledLink)`
  text-align: center;
  transition: 0.4s;
  cursor: pointer;
  margin: 5px;

  span {
    cursor: pointer;
    position: relative;
    transition: 0.4s;
  }

  span::after {
    content: " >>";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover span {
    padding-right: 25px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`
