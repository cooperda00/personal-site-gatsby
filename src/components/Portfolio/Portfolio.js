//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, spacing } from "../../Utilities"
import { StyledSubHeading } from "../../Elements"
//Components
import Card from "./Card"
//Icons
import { TiArrowLeftOutline } from "react-icons/ti"
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

const Portfolio = ({ professionalProjects, personalProjects }) => {
  return (
    <StyledPortfolio>
      <StyledSubHeading>
        Professional Work <TiArrowLeftOutline />
      </StyledSubHeading>
      <motion.div
        className="horizontal-scroller"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {professionalProjects.edges.map(item => (
          <Card item={item} />
        ))}
      </motion.div>

      <StyledSubHeading>
        Personal Projects <TiArrowLeftOutline />
      </StyledSubHeading>
      <motion.div
        className="horizontal-scroller"
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {personalProjects.edges.map(item => (
          <Card item={item} />
        ))}
      </motion.div>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  ${flex("column", "flex-start", "center")};
  width: 100%;
  margin-top: ${spacing.M};

  @media (min-width: 768px) {
    ${flex("column", "flex-start", "flex-start")};
  }

  .horizontal-scroller {
    ${flex("column", "flex-start", "center")};

    width: 100%;
    margin-bottom: ${spacing.M};

    @media (min-width: 768px) {
      ${flex("row", "flex-start", "center")};
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
`

export default Portfolio
