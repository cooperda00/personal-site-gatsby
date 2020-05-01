//Modules
import React from "react"
import Image from "gatsby-image"
//Styles
import styled from "styled-components"
import { font, spacing, flex, boxShadow } from "../../Utilities"
//Components
import TechLogo from "./TechLogo"
import RichTextRenderer from "../RichTextRender/RichTextRender"
//Icons
import LiveIcon from "../../images/live_site.inline.svg"
import CodeIcon from "../../images/code.inline.svg"

const IndividualPiece = ({ piece }) => {
  const {
    richText: { json },
    technology,
    liveUrl,
    codeUrl,
    desktopImage: { fluid: desktopFluid },
    mobileImage: { fluid: mobileFluid },
  } = piece

  return (
    <StyledIndividualPiece>
      <StyledLeft>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <div className="images-container">
            <div className="desktop-container">
              <Image
                fluid={desktopFluid}
                className="image"
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
            <div className="mobile-container">
              <Image
                fluid={mobileFluid}
                className="image"
                imgStyle={{
                  objectFit: "cover",
                  objectPosition: "50% 50%",
                }}
              />
            </div>
          </div>

          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <div className="tech">
              {" "}
              {technology.map(tech => (
                <TechLogo skill={tech} />
              ))}
            </div>
          </div>
        </a>
      </StyledLeft>

      <StyledRight>
        <h2 className="title">Description</h2>
        <RichTextRenderer json={json} />
        <div className="links">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <LiveIcon /> Live Site
          </a>

          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              <CodeIcon /> Code
            </a>
          )}
        </div>
      </StyledRight>
    </StyledIndividualPiece>
  )
}

const StyledIndividualPiece = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: ${spacing.M};

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const StyledLeft = styled.article`
  .images-container {
    width: 100%;
    position: relative;

    .desktop-container {
      width: 100%;
      height: 100%;
    }

    .mobile-container {
      position: absolute;
      width: 24.5%;
      height: 111%;
      bottom: -65%;
      left: 2rem;
      box-shadow: ${boxShadow.dark};

      @media (min-width: 500px) {
      }

      @media (min-width: 870px) {
        bottom: -70%;
      }

      @media (min-width: 1024px) {
        bottom: -80%;
        left: 2rem;
      }
    }

    .desktop-container {
      box-shadow: ${boxShadow.dark};
    }

    .desktop-container,
    .mobile-container {
      .image {
        height: 100%;
        width: 100%;
      }
    }
  }

  .tech-stack {
    h2 {
      ${font("L")};
      margin: ${spacing.SM} 0 ${spacing.SM} 0;
      font-weight: 300;
      text-align: right;
    }

    .tech {
      ${flex("row", "flex-end", "center")};
    }
  }
`

const StyledRight = styled.article`
  margin-top: ${spacing.M};

  @media (min-width: 600px) {
    margin-top: ${spacing.L};
  }

  @media (min-width: 720px) {
    margin-top: ${spacing.XL};
  }

  @media (min-width: 870px) {
    margin-top: ${spacing.XXL};
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    padding-left: ${spacing.M};
  }

  .title {
    ${font("L")};
    margin-bottom: ${spacing.S};
    font-weight: 300;
    text-align: center;
  }

  .links {
    ${flex("row", "space-around", "center")};

    a {
      ${flex("column", "flex-start", "center")};
      ${font("S")};
      color: dodgerblue;

      svg {
        transform: scale(0.7);
      }
    }
  }
`

export default IndividualPiece
