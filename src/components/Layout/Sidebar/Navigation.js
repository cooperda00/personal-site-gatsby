//Modules
import React from "react"
import { Link } from "gatsby"
//Styles
import styled from "styled-components"
import { flex, font, grays } from "../../../Utilities"
//Constants
import { links } from "../../../constants/links"
//Icons
import { IoMdDownload } from "react-icons/io"
//Assets
import CV from "../../../Assets/daniel_cooper_cv.pdf"

const Navigation = () => {
  return (
    <StyledNavigation>
      {links.map(({ path, text }) => (
        <Link to={path} activeClassName="active-link" key={text}>
          {text}
        </Link>
      ))}
      <a href={CV} className="resume" download>
        CV
        <IoMdDownload />
      </a>
    </StyledNavigation>
  )
}

const StyledNavigation = styled.nav`
  ${flex("column", "flex-start", "center")};

  a {
    font-size: 1.55rem;
    margin-bottom: 2rem;
    transition: 0.4s;

    &:hover {
      text-shadow: 0 0 1px ${grays[5]};
    }

    @media (min-width: 1200px) {
      ${font("S")};
    }
  }

  .resume {
    ${flex("row", "center", "center")};

    svg {
      font-size: 2rem;
      margin-left: 10px;
    }
  }
`

export default Navigation
