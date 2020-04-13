//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, spacing, font, grays } from "../../Utilities"
import { AnimatedArrowButton } from "../../Elements"

const Form = () => {
  return (
    <StyledForm
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
    >
      <div className="input-group">
        <label htmlFor="name">Name * </label>
        <input type="text" name="name" id="name" required />
      </div>

      <div className="input-group">
        <label htmlFor="company">Company </label>
        <input type="text" name="company" id="company" />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email * </label>
        <input type="email" name="email" id="email" required />
      </div>

      <div className="input-group">
        <label htmlFor="message">Message * </label>
        <textarea name="message" id="message" required></textarea>
      </div>

      <div className="submit-group">
        <AnimatedArrowButton type="submit">Submit</AnimatedArrowButton>
      </div>

      {/* INVISIBLE FOR NETLIFY */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
    </StyledForm>
  )
}

const StyledForm = styled.form`
  ${flex("column", "flex-start", "center")};
  width: 100%;

  .input-group {
    ${flex("column", "flex-start", "center")};

    width: 100%;
    margin-bottom: ${spacing.S};

    label,
    input,
    textarea {
      ${font("XS")};
      width: 100%;

      @media (min-width: 360px) {
        ${font("S")};
      }

      @media (min-width: 768px) {
        ${font("SM")};
      }
    }

    label {
      margin-bottom: ${spacing.XS};
    }

    input,
    textarea {
      padding: 0.5rem 1rem;
      background: white;
      border: none;
      box-shadow: inset 0 0 0.3rem ${grays[5]};
    }

    textarea {
      resize: none;
      min-height: 28rem;
    }
  }
`

export default Form
