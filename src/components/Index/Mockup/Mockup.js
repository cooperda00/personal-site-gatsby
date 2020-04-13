//Modules
import React, { useState } from "react"
import useInterval from "../../../hooks/useInterval"
//Styles
import styled from "styled-components"
//Animations
import Slideshow from "./Slideshow"
//Images
import mockup from "../../../images/desktop_mockup.png"
import omroom from "../../../images/omroom_desktop.png"
import mbs from "../../../images/mbsbkk_desktop.png"
import rp from "../../../images/rp_desktop.png"

const Mockup = () => {
  const [images, setImages] = useState([omroom, mbs, rp])

  useInterval(() => {
    const imagesCopy = [...images]
    const shifted = imagesCopy.shift()
    const updatedArray = [...imagesCopy, shifted]

    setImages(updatedArray)
  }, 3000)

  return (
    <StyledMockup>
      <img src={mockup} alt="Desktop Mockup" className="mockup" />
      <Slideshow image={images[0]} />
    </StyledMockup>
  )
}

const StyledMockup = styled.div`
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
