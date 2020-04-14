//Modules
import React, { useState } from "react"
import useInterval from "../../../hooks/useInterval"
//Styles
import styled from "styled-components"
//Componets
import Slideshow from "./Slideshow"
//Animations
import { motion } from "framer-motion"
//Images
import mockup from "../../../images/desktop_mockup-min.webp"
import omroom from "../../../images/omroom_desktop-min.webp"
import mbs from "../../../images/mbsbkk_desktop-min.webp"
import rp from "../../../images/rp_desktop-min.webp"

const Mockup = () => {
  const [images, setImages] = useState([omroom, mbs, rp])

  useInterval(() => {
    const imagesCopy = [...images]
    const shifted = imagesCopy.shift()
    const updatedArray = [...imagesCopy, shifted]

    setImages(updatedArray)
  }, 4000)

  return (
    <StyledMockup
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
    >
      <img src={mockup} alt="Desktop Mockup" className="mockup" />
      <Slideshow image={images[0]} />
    </StyledMockup>
  )
}

const StyledMockup = styled(motion.div)`
  height: 100%;
  width: 80%;
  z-index: 1000;
  position: relative;

  .mockup {
    width: 100%;
    object-fit: cover;
  }
`

export default Mockup
