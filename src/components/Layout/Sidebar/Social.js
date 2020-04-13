//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, font } from "../../../Utilities"
//Icons
import { IoLogoGithub } from "react-icons/io"

const Social = () => {
  return (
    <StyledSocial>
      <a
        href="https://github.com/cooperda00"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoGithub />
      </a>
    </StyledSocial>
  )
}

const StyledSocial = styled.div`
  ${flex("column", "flex-start", "center")};

  margin-bottom: 3rem;

  a {
    ${font("XL")};

    margin-bottom: 3rem;
    transition: 0.4s;
  }

  a:hover {
    transform: rotate(45deg);
  }
`

export default Social
