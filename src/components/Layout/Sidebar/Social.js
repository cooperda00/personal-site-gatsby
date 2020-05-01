//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, font } from "../../../Utilities"
//Icons
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"

const Social = () => {
  return (
    <StyledSocial>
      <a
        href="https://github.com/cooperda00"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my github"
      >
        <IoLogoGithub role="img" />
      </a>

      <a
        href="https://www.linkedin.com/in/danielcooperweb/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my LinkedIn"
      >
        <IoLogoLinkedin role="img" />
      </a>
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  ${flex("row", "space-around", "center")};

  margin-bottom: 3rem;
  width: 80%;

  a {
    ${font("L")};

    transition: 0.4s;
  }

  a:hover {
    transform: rotate(45deg);
  }
`

export default Social
