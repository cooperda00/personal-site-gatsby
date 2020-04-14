import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const Slideshow = ({ image }) => (
  <AnimatePresence initial={false}>
    <StyledSlideshow
      key={image}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 1,
      }}
    >
      <img src={image} alt="Website screenshot" />
    </StyledSlideshow>
  </AnimatePresence>
)

const StyledSlideshow = styled(motion.div)`
  position: absolute;
  height: 61.3%;
  width: 92.2%;
  top: 6.65%;
  left: 3.9%;

  @media (min-width: 950px) {
    height: 45%;
    top: 4.5%;
  }

  @media (min-width: 1100px) {
    height: 61.3%;
    top: 6.6%;
  }

  img {
    height: 100%;
    width: 100%;
  }
`

export default Slideshow
