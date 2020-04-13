//Modules
import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
//Styles
import styled from "styled-components"
import { font, spacing } from "../../Utilities"

const RichTextRender = ({ json }) => {
  return <StyledRichText>{documentToReactComponents(json)}</StyledRichText>
}

const StyledRichText = styled.div`
  p {
    ${font("S")};
    margin-bottom: ${spacing.S};
  }
`

export default RichTextRender
