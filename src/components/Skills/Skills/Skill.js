//Modules
import React from "react"
import Image from "gatsby-image"
//Styles
import styled from "styled-components"
import { flex, font, spacing } from "../../../Utilities"
//Animation
import { motion } from "framer-motion"

const Skill = ({ skill }) => (
  <StyledSkill variants={skillVariants} transition={skillTransition}>
    <div className="image-container">
      {skill.type === "png" ? (
        <Image
          fluid={skill.image}
          alt={skill.name}
          imgStyle={{
            objectFit: "contain",
          }}
          className="image-png"
        />
      ) : (
        <img src={skill.image} alt={skill.name} className="image-svg" />
      )}
    </div>
    <p className="skill-name">{skill.name}</p>
  </StyledSkill>
)

const StyledSkill = styled(motion.div)`
  ${flex("column", "flex-start", "center")};
  width: 10rem;
  height: 10rem;
  margin: ${spacing.M};

  .image-container {
    height: 70%;
    width: 100%;

    .image-png,
    .image-svg {
      height: 100%;
      width: 100%;
    }
  }

  .skill-name {
    ${font("S")};
    text-align: center;
    margin-top: ${spacing.S};
    font-weight: 300;
    letter-spacing: 0.1rem;
  }
`

const skillVariants = {
  start: {
    opacity: "0%",
    x: -20,
  },
  end: {
    opacity: "100%",
    x: 0,
  },
}

const skillTransition = {
  duration: 0.4,
  ease: "easeIn",
}

export default Skill
