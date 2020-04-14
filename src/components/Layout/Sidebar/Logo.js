//Modules
import React from "react"
import { Link } from "gatsby"
//Styles
import styled from "styled-components"
import { flex, spacing } from "../../../Utilities"
//Logo
import LogoSVG from "../../../images/logo.inline.svg"
//Animation
import { motion } from "framer-motion"

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
      transition={{ duration: 0.5, type: "spring", stiffness: 10 }}
    >
      <StyledLogo to="/" aria-label="return to home page">
        <LogoSVG />
      </StyledLogo>
    </motion.div>
  )
}

const StyledLogo = styled(Link)`
  ${flex("column", "center", "center")};
  width: 100%;
  padding: ${spacing.SM};

  svg {
    width: 7rem;
    height: 9rem;
  }

  @media (min-width: 360px) {
    svg {
      width: 10rem;
      height: 12rem;
    }
  }
`

export default Logo
