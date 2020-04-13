//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, font, spacing, grays } from "../../Utilities"
//Icons
import { MdMailOutline } from "react-icons/md"
import { FiPhoneCall, FiLinkedin } from "react-icons/fi"
import { IoLogoGithub } from "react-icons/io"

const Details = () => {
  return (
    <StyledDetails>
      <div className="details-container">
        <p>
          <a href="mailto:info@danielcooper.io">
            <MdMailOutline /> info@danielcooper.io
          </a>
        </p>
        <p>
          <FiPhoneCall /> (+44) 7732 85318
        </p>
        <p>
          <a
            href="https://github.com/cooperda00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub /> GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/daniel-cooper-560859190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </p>
      </div>

      <div className="copy-container">
        <p>
          Please feel free to contact me on any of the above platforms or via
          the contact form, and I will do my best to get back to you as soon as
          possible.
        </p>
      </div>
    </StyledDetails>
  )
}

const StyledDetails = styled.section`
  ${flex("column", "flex-start", "center")};

  .details-container,
  .copy-container {
    ${flex("column", "flex-start", "flex-start")};
    width: 100%;
    margin-bottom: ${spacing.M};

    p {
      ${flex("row", "flex-start", "center")};
      ${font("XS")};
      margin-bottom: ${spacing.S};

      @media (min-width: 360px) {
        ${font("S")};
      }

      @media (min-width: 768px) {
        ${font("SM")};
      }

      a {
        ${flex("row", "flex-start", "center")};
        color: dodgerblue;
      }

      svg {
        ${font("M")};
        margin-right: ${spacing.S};
        color: ${grays[5]};
      }
    }
  }
`

export default Details
