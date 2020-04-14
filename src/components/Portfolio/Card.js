//Module
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
//Styles
import styled from "styled-components"
import { spacing, boxShadow } from "../../Utilities"
//Animation
import { motion } from "framer-motion"

const skillVariants = {
  start: {
    opacity: "0%",
    x: -50,
  },
  end: {
    opacity: "100%",
    x: 0,
  },
}

const skillTransition = {
  duration: 1,
  ease: "easeIn",
}

const Card = ({ item: { node } }) => {
  const {
    desktopImage: { fluid },
    title,
    path,
  } = node

  return (
    <motion.div variants={skillVariants} transition={skillTransition}>
      <Link to={`/portfolio${path}`} aria-label={`Learn more about ${title}`}>
        <StyledCard>
          <div className="image-container">
            <Image fluid={fluid} className="image" alt={title} />
          </div>
        </StyledCard>
      </Link>
    </motion.div>
  )
}

const StyledCard = styled.article`
  width: 20rem;
  height: 10rem;
  border-radius: 10px;
  margin: ${spacing.SM} ${spacing.XS} ${spacing.SM} ${spacing.XS};
  box-shadow: ${boxShadow.dark};
  flex: none;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9));

  @media (min-width: 500px) {
    width: 30rem;
    height: 15rem;
  }

  @media (min-width: 768px) {
    width: 50rem;
    height: 25rem;
    margin: ${spacing.SM};
  }

  .image-container {
    width: 100%;
    height: 100%;
    border-radius: 10px;

    .image {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
`

export default Card
