//Modules
import React from "react"
//Styles
import styled from "styled-components"
import { flex, font, spacing } from "../../../Utilities"
//Animation
import { motion } from "framer-motion"

const variants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const transition = {
  duration: 0.5,
}

const Subtitle = () => (
  <StyledSubtitle variants={variants} initial="start" animate="end">
    <motion.h2
      variants={{
        start: {
          opacity: "0%",
          y: -100,
        },
        end: {
          opacity: "100%",
          y: 0,
        },
      }}
      transition={transition}
    >
      UX
    </motion.h2>

    <motion.h2
      variants={{
        start: {
          opacity: "0%",
          x: 100,
        },
        end: {
          opacity: "100%",
          x: 0,
        },
      }}
      transition={transition}
    >
      JavaScript{" "}
    </motion.h2>

    <motion.h2
      variants={{
        start: {
          opacity: "0%",
          x: -100,
        },
        end: {
          opacity: "100%",
          x: 0,
        },
      }}
      transition={transition}
    >
      UI{" "}
    </motion.h2>

    <motion.h2
      variants={{
        start: {
          opacity: "0%",
          y: 100,
        },
        end: {
          opacity: "100%",
          y: 0,
        },
      }}
      transition={transition}
    >
      React
    </motion.h2>
  </StyledSubtitle>
)

const StyledSubtitle = styled(motion.div)`
  ${flex("column")};
  letter-spacing: 0.4rem;
  position: relative;
  width: 17rem;
  margin-top: ${spacing.S};

  h2 {
    ${font("S")};
    font-weight: 300;
  }

  h2:nth-child(3),
  h2:nth-child(4) {
    align-self: flex-end;
  }

  h2:nth-child(1)::after,
  h2:nth-child(3)::before {
    content: "";
    position: absolute;
    width: 0.3rem;
    height: 1.5em;
    background: orange;
  }

  h2:nth-child(1) {
    &::after {
      margin-left: 1rem;
    }
  }

  h2:nth-child(3) {
    &::before {
      margin-left: -1rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;

    h2 {
      ${font("M")};
    }

    h2:nth-child(1) {
      &::after {
        margin-left: 2rem;
      }
    }

    h2:nth-child(3) {
      &::before {
        margin-left: -2rem;
      }
    }
  }
`

export default Subtitle
