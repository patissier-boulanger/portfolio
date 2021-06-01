import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";

import { IntroCanvas } from "./IntroCanvas/IntroCanvas";
import { Header } from "./Header/Header";
import { About } from "./About/About";

const Intro = () => {
  const controls = useAnimation();
  const history = useHistory();

  const handleOnclick = async () => {
    console.log("1");
    await controlAnimation();
    navigate();
  };

  const navigate = () => {
    console.log("4");
    history.push("/details");
  };

  const controlAnimation = async () => {
    console.log("2");
    await controls.start("show");
    console.log("3");
  };

  const pageAnimation = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { duration: 0, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const sliderAnimation = {
    hidden: { x: "-250%", skew: "45deg" },
    show: {
      x: "0%",
      skew: "0deg",
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  return (
    <>
      <Header handleOnclick={handleOnclick} />
      <IntroCanvas />
      <About />
      <FrameWrapper
        variants={pageAnimation}
        initial="hidden"
        animate={controls}
        exit="exit"
      >
        <Frame1 variants={sliderAnimation} />
        <Frame2 variants={sliderAnimation} />
        <Frame3 variants={sliderAnimation} />
        <Frame4 variants={sliderAnimation} />
      </FrameWrapper>
    </>
  );
};

const FrameWrapper = styled(motion.div)``;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #4dd0e1;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #c7e5f4;
`;

const Frame3 = styled(Frame1)`
  background: #ff69b4;
`;

const Frame4 = styled(Frame1)`
  background: white;
`;

export { Intro };
