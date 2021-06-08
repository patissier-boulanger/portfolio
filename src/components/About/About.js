import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { AboutCanvas } from "./AboutCanvas/AboutCanvas";
import { AboutMeSection } from "./AboutMeSection/AboutMeSection";
import { PhotoSection } from "./PhotoSection/PhotoSection";
import { SkillSection } from "./SkillSection/SkillSection";
import { IntroduceSection } from "./IntroduceSection/IntroduceSection";
import { ContactSection } from "./ContactSection/ContactSection";

import { useParallaxEffect } from "../../hooks/useParallaxEffect";
import {
  slideFontAnimation,
  animationWrapper,
  enterPageAnimation,
  slideAnimation,
  expandAnimation,
} from "../../animations/variants";

const About = ({ aboutObserver }) => {
  const [canvasWrapper, canvasWrapperY] = useParallaxEffect([0, -0.2]);

  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      <RightProgressLine />
      <AbsoluteFrame ref={aboutObserver} variants={slideAnimation}>
        <NameTextWrapper>
          <LeftDescriptionFont>Hi.</LeftDescriptionFont>
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
      <AboutMeSection />
      <IntroduceSection />
      <PhotoSection />
      <SkillSection />
      <ContactSection />
    </Container>
  );
};

export { About };

const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: #fff;
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 70%;
  left: 0%;
  width: 70rem;
  height: 80rem;
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

const LeftDescriptionFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-size: 17.3rem;
  font-weight: 200;
  color: #fff;
  margin-bottom: -3rem;
  padding-right: 5rem;
`;

const RightDescriptionFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-size: 15.3rem;
  font-weight: 500;
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
