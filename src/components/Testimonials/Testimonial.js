//Modules
import React from "react"
import marked from "marked"
import Image from "gatsby-image"
//Styles
import styled from "styled-components"
import { flex, font, spacing, colors, boxShadow } from "../../Utilities"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
//Animation
import { motion } from "framer-motion"

const Testimonial = ({ testimonial }) => {
  const {
    name,
    organisation,
    text: { text },
    image: { fluid },
    website,
  } = testimonial

  return (
    <StyledTestimonial
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      animate="visible"
    >
      <StyledWrapper>
        <div className="copy">
          <FaQuoteLeft className="quote-icon left" />
          <p dangerouslySetInnerHTML={{ __html: marked(text) }} />
          <FaQuoteRight className="quote-icon right" />
        </div>

        <div className="owner">
          <div className="image-container">
            <Image fluid={fluid} className="image" />
          </div>
          <div className="text">
            <h3>{name}</h3>
            <h3>
              <a href={website} target="_blank" rel="noopener noreferrer">
                {organisation}
              </a>
            </h3>
          </div>
        </div>
      </StyledWrapper>
    </StyledTestimonial>
  )
}

const StyledTestimonial = styled(motion.article)`
  ${flex("column", "center", "center")};
  width: 100%;

  @media (min-width: 700px) {
    height: 100%;
  }
`

const StyledWrapper = styled.div`
  ${flex("column", "center", "flex-start")};
  margin-bottom: ${spacing.M};
  max-width: 80rem;
  padding: 0 ${spacing.S};

  @media (min-width: 700px) {
    padding: 0 ${spacing.M};
    ${flex("column", "center", "center")};
  }

  .copy {
    ${flex("column", "flex-start", "center")};

    .quote-icon {
      font-size: 4rem;
      color: ${colors.primary + "55"};

      @media (min-width: 700px) {
        font-size: 6rem;
      }
    }

    .left {
      align-self: flex-start;
      margin-bottom: ${spacing.S};
    }

    .right {
      align-self: flex-end;
    }

    p {
      ${font("XS")};

      @media (min-width: 700px) {
        ${font("S")};
      }
    }

    p:not(:last-of-type) {
      margin-bottom: ${spacing.S};
    }
  }

  .owner {
    ${flex("row", "flex-start", "center")};
    height: 8rem;

    .image-container {
      height: 6rem;
      width: 6rem;
      margin-right: ${spacing.S};

      @media (min-width: 500px) {
        height: 8rem;
        width: 8rem;
      }

      .image {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        box-shadow: ${boxShadow.dark};
      }
    }

    .text {
      ${flex("column", "flex-start", "flex-start")};

      h3 {
        ${font("XS")};
        font-weight: 300;
        letter-spacing: 0.1rem;

        @media (min-width: 500px) {
          ${font("S")};
        }

        @media (min-width: 1000px) {
          ${font("SM")};
        }

        a {
          color: ${colors.link};
        }
      }
    }
  }
`

export default Testimonial
