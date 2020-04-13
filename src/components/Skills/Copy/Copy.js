//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { font, spacing } from "../../../Utilities"

const Copy = () => {
  return (
    <StyledCopy>
      <p>
        I value being able to build projects that are scalable, easily
        extendable and have an easily navigable codebase. Therefore it makes
        sense for me to build in a modular, component-based fashion using{" "}
        <strong>React</strong>, with a state management library like{" "}
        <strong>Redux</strong>. Unlike many devs, I enjoy writing CSS! And using
        component-scoped <strong>Sass</strong> Modules or{" "}
        <strong>Styled-Components</strong> makes this even more of a joy.
      </p>
      <p>
        For most of my client work, I use <strong>Gatsby</strong> with a
        headless CMS like <strong>Contentful</strong> providing the data layer.
        This allows me to code in a modern and modular way, whilst providing the
        same services and SEO capabilites that a Wordpress site might. Hosting
        statically on <strong>Netlify</strong> provides all the power of a CDN
        with many other useful features.
      </p>
    </StyledCopy>
  )
}

const StyledCopy = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${spacing.M};
  max-width: 1024px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  p {
    ${font("XS")};
    margin-top: ${spacing.M};

    @media (min-width: 360px) {
      ${font("S")};
    }

    @media (min-width: 700px) {
      ${font("SM")};
    }
  }
`

export default Copy
