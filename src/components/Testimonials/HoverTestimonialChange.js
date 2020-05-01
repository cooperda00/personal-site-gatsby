//Modules
import React, { useState } from "react"
//Styles
import { flex, spacing, font, colors } from "../../Utilities"
import styled from "styled-components"
//Components
import Testimonial from "./Testimonial"

const HoverTestimonialChange = ({
  testimonial1,
  testimonial2,
  testimonial3,
}) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState("one")

  return (
    <StyledWrapper selected={selectedTestimonial}>
      <div className="menu">
        <div className="buttons">
          <button
            className="button"
            onMouseEnter={() => {
              setSelectedTestimonial("one")
            }}
            onKeyPress={e => {
              if (e.which === 13) {
                setSelectedTestimonial("one")
              }
            }}
            onTouchStart={() => {
              setSelectedTestimonial("one")
            }}
          >
            {selectedTestimonial === "one" ? (
              <mark>James Round</mark>
            ) : (
              "James Round"
            )}
            {selectedTestimonial === "one" && <span className="bar" />}
          </button>

          <button
            className="button"
            onMouseEnter={() => {
              setSelectedTestimonial("two")
            }}
            onKeyPress={e => {
              if (e.which === 13) {
                setSelectedTestimonial("two")
              }
            }}
            onTouchStart={() => {
              setSelectedTestimonial("two")
            }}
          >
            {selectedTestimonial === "two" ? (
              <mark>Mutsumi Adachi</mark>
            ) : (
              "Mutsumi Adachi"
            )}
            {selectedTestimonial === "two" && <span className="bar" />}
          </button>

          <button
            className="button"
            onMouseEnter={() => {
              setSelectedTestimonial("three")
            }}
            onKeyPress={e => {
              if (e.which === 13) {
                setSelectedTestimonial("three")
              }
            }}
            onTouchStart={() => {
              setSelectedTestimonial("three")
            }}
          >
            {selectedTestimonial === "three" ? (
              <mark>Tayani van Eeden</mark>
            ) : (
              "Tayani van Eeden"
            )}
            {selectedTestimonial === "three" && <span className="bar" />}
          </button>
        </div>
      </div>

      {selectedTestimonial === "one" && (
        <Testimonial testimonial={testimonial1} className="testimonial" />
      )}

      {selectedTestimonial === "two" && (
        <Testimonial testimonial={testimonial2} className="testimonial" />
      )}

      {selectedTestimonial === "three" && (
        <Testimonial testimonial={testimonial3} className="testimonial" />
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  ${flex("column")};
  width: 100%;
  height: 100%;
  margin-top: ${spacing.M};

  .menu {
    ${flex("column", "flex-start", "center")};
    width: 100%;
    box-shadow: none;
    margin-bottom: ${spacing.M};

    @media (min-width: 1000px) {
      ${flex("column", "center", "center")};
      height: 100%;
      margin-bottom: 0;
      box-shadow: 0.5rem 0.1rem 0.5rem -0.5rem rgba(0, 0, 0, 0.3);
    }

    .buttons {
      ${flex("row", "space-around", "center")};
      width: 100%;

      @media (min-width: 1000px) {
        ${flex("column", "flex-start", "center")};
      }

      .button {
        ${flex("column", "center", "center")};
        ${font("XS")};
        text-align: center;
        cursor: pointer;
        position: relative;
        background: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;

        mark {
          background: ${colors.primary + "55"};
        }

        @media (min-width: 700px) {
          ${font("S")};
        }

        @media (min-width: 1000px) {
          height: 6rem;
          width: 100%;
          margin-bottom: ${spacing.M};
          outline: inherit;

          .bar {
            width: 0.3rem;
            height: 100%;
            position: absolute;
            background: ${colors.primary};
            right: 0;
          }

          mark {
            background: transparent;
          }
        }
      }
    }
  }

  .testimonial {
    width: 100%;
  }

  @media (min-width: 1000px) {
    ${flex("row")};

    .menu {
      width: 25%;
    }

    .testimonial {
      width: 75%;
    }
  }
`

export default HoverTestimonialChange
