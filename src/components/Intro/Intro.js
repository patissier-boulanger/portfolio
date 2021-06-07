import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";

import { IntroCanvas } from "./IntroCanvas/IntroCanvas";
import { Header } from "../Header/Header";
import { About } from "./About/About";
import { Skills } from "./Skills/Skills";
import { Works } from "./Works/Works";
import { End } from "./End/End";

import { pageAnimation, sliderAnimation } from "../../animations/variants";
import { enterPageAnimation } from "../../animations/variants";

const Intro = () => {
  const controls = useAnimation();
  const history = useHistory();

  const handleOnclick = async () => {
    await controlAnimation();
    navigate();
  };

  const navigate = () => {
    history.push("/details");
  };

  const controlAnimation = async () => {
    await controls.start("show");
  };

  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      {/* <Header handleOnclick={handleOnclick} /> */}
      <IntroCanvas />
      {/* <About />
      <Skills />
      <Works />
      <End /> */}
      {/* <FrameWrapper
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </FrameWrapper> */}
    </Container>
  );
};

// const FrameWrapper = styled(motion.div)``;

// const Frame1 = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: #000;
//   z-index: 2;
// `;

// const Frame2 = styled(Frame1)`
//   background: #c7e5f4;
// `;

// const Frame3 = styled(Frame1)`
//   background: #ff69b4;
// `;

// const Frame4 = styled(Frame1)`
//   background: #fff;
// `;

const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
`;

export { Intro };
