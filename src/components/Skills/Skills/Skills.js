//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex } from "../../../Utilities"
import { StyledSubHeading } from "../../../Elements"
//Components
import Skill from "./Skill"
//Animation
import { motion } from "framer-motion"

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const Skills = ({ skills }) => {
  return (
    <StyledSkills>
      <div className="grid-container">
        <StyledSubHeading>Front-End</StyledSubHeading>
        <motion.div
          className="grid"
          variants={containerVariants}
          initial="start"
          animate="end"
        >
          {skills.frontend.map(skill => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="grid-container"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        <StyledSubHeading>Back-End</StyledSubHeading>
        <div className="grid">
          {skills.backend.map(skill => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </div>
      </motion.div>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  ${flex("column", "flex-start", "flex-start")};
  width: 100%;
  max-width: 1024px;

  .grid-container {
    ${flex("column", "flex-start", "center")};
    margin-top: 3rem;

    @media (min-width: 768px) {
      ${flex("column", "flex-start", "flex-start")};
    }
  }

  .grid {
    ${flex("row", "center", "center")};
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 768px) {
      ${flex("row", "flex-start", "center")};
    }
  }
`

export default Skills
