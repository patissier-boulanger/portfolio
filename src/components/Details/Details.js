import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import face from "../../asset/images/face2.jpg";
import { ReactComponent as Smile } from "../../asset/images/smile.svg";
import {
  UnderLineAnimtion,
  ArrowAnimation,
  Arrow2Animation,
  Arrow3Animation,
} from "../../animations/svgAnimations";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useParallaxEffect } from "../../hooks/useParallaxEffect";
import {
  slideFontAnimation,
  animationWrapper,
  enterPageAnimation,
  slideAnimation,
  expandAnimation,
} from "../../animations/variants";
import { AboutCanvas } from "./AboutCanvas/AboutCanvas";
import { SecondFrame } from "./SecondFrame/SecondFrame";
import { ThirdFrame } from "./ThirdFrame/ThirdFrame";
import { FourthFrame } from "./FourthFrame/FourthFrame";
import { FifthFrame } from "./FifthFrame/FifthFrame";

const Details = () => {
  const [canvasWrapper, canvasWrapperY] = useParallaxEffect([0, -0.2]);

  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      <RightProgressLine />
      <AbsoluteFrame variants={slideAnimation}>
        <NameTextWrapper>
          <LeftDescriptionFont>Hi!</LeftDescriptionFont>
        </NameTextWrapper>
        <CanvasContainer
          ref={canvasWrapper}
          style={{ y: canvasWrapperY }}
          variants={expandAnimation}
        >
          <AboutCanvas />
        </CanvasContainer>
        <DescriptionTextWrapper variants={animationWrapper}>
          <RightDescriptionFont variants={slideFontAnimation}>
            I'm
          </RightDescriptionFont>
          <RightDescriptionFont variants={slideFontAnimation}>
            Juhyoung
          </RightDescriptionFont>
          <RightDescriptionFont variants={slideFontAnimation}>
            JUNG
          </RightDescriptionFont>
        </DescriptionTextWrapper>
      </AbsoluteFrame>
      <InvisibleFrame />
      <SecondFrame />
      <ThirdFrame />
      <FourthFrame />
      <FifthFrame />
    </Container>
  );
};

export { Details };

const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;

  background: #fff;
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;

  width: 70rem;
  height: 80rem;

  top: 70%;
  left: 0%;
  background: rgb(84, 84, 84);
  background: linear-gradient(
    90deg,
    rgba(84, 84, 84, 1) 28%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 2;
`;

const AbsoluteFrame = styled(motion.div)`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: #0f0f0f;
  z-index: 1;
`;

const NameTextWrapper = styled(motion.div)`
  position: absolute;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  top: 20%;
  left: -3%;
  width: 60rem;
  height: 60rem;

  z-index: 2;
`;

const DescriptionTextWrapper = styled(motion.div)`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  top: 25%;
  left: -10%;

  width: 180rem;
  height: 40rem;
`;

const InvisibleFrame = styled.div`
  min-height: 100vh;
  background: transparent;
`;

// const SecondFrame = styled.div`
//   min-height: 100vh;
// `;

const LeftDescriptionFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-size: 17.3rem;
  font-weight: 500;

  color: #fff;
  margin-bottom: -3rem;
  padding-right: 5rem;
`;

const RightDescriptionFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-size: 15.3rem;
  font-weight: 900;

  color: #fff;
  margin-bottom: -5rem;
`;

const RightProgressLine = styled(motion.div)`
  position: fixed;

  top: 50%;
  right: 7%;

  width: 0.1%;
  height: 10%;

  background: #fff;
  z-index: 3;
`;

const LeftProgressLine = styled(motion.div)`
  position: fixed;

  top: 50%;
  left: 7%;

  width: 0.1%;
  height: 10%;

  background: #0f0f0f;
  z-index: 3;
`;

const AbsoluteContainer = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 40%;
  height: 60vh;
  width: 45vw;

  color: #a7a7a7;
  background: radial-gradient(#fff 5px, transparent 5px),
    radial-gradient(#fff 5px, transparent 5px), transparent;
  background-position: 0 0, 60px 60px;
  background-size: 60px 60px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 80rem; */
  margin-bottom: 10rem;
`;

const Photo = styled(motion.img)`
  width: 60rem;
  height: 60rem;
  object-fit: contain;
`;

const SmallFont = styled(motion.span)`
  text-align: center;
  font-size: 3rem;
  font-family: "Roboto Mono", monospace;

  font-weight: 200;
  color: black;
`;

const MediumFont = styled.span`
  text-align: center;
  font-weight: 200;
  font-size: 5.3rem;

  font-family: "Roboto Mono", monospace;

  color: black;
  z-index: 1;
`;

const BigFont = styled(motion.span)`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 19.3rem;
  text-align: center;

  color: black;
  z-index: 1;
`;

const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 90rem;
  height: 100rem;
  top: 20rem;
  left: -20rem;
  background-color: #4dd0e1;
  z-index: 2;
`;

const SvgWrapper = styled(motion.div)`
  position: absolute;
  width: 15rem;
  height: 15rem;
  right: 5%;
  top: 75%;
  filter: drop-shadow(19rem 0px 0px #4dd0e1);
`;

const AnimationWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
`;

const TextsWrapper = styled(motion.div)`
  text-align: center;
`;

const Blank = styled.div`
  height: 8rem;
`;
