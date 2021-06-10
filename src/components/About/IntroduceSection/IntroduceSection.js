import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import {
  animationWrapper,
  slideFontAnimation,
} from "../../../animations/variants";

const IntroduceSection = ({ changeCurrentPage }) => {
  const [introduceObserver, isIntroduceInView] = useInView({ threshold: 0.5 });
  const [descriptionWrapper, descriptionWrapperControls] =
    useScrollAnimation(0.4);

  useLayoutEffect(() => {
    if (isIntroduceInView) {
      changeCurrentPage({ currentPage: "introduce" });
    }
  }, [isIntroduceInView, changeCurrentPage]);

  return (
    <Container ref={introduceObserver}>
      <Description
        ref={descriptionWrapper}
        animate={descriptionWrapperControls}
        variants={animationWrapper}
      >
        <AnimationWrapper variants={slideFontAnimation}>
          <SecondFont>
            As an artist I have a keen interest in illustration, street art, and
            music. I'm currently exploring new media art technologies ranging
            from 3DCG, generative art, and audio-reactive visuals. Additionally
            to music videos and video art.
          </SecondFont>
        </AnimationWrapper>
      </Description>
      <Description
        ref={descriptionWrapper}
        animate={descriptionWrapperControls}
        variants={animationWrapper}
      >
        <AnimationWrapper variants={slideFontAnimation}>
          <MediumFont>I care about </MediumFont>
          <MediumFont>Readability</MediumFont>
          <MediumFont>Accessibility</MediumFont>
          <MediumFont>Reusable code</MediumFont>
          <MediumFont>Design pattern.</MediumFont>
          <MediumFont>
            I'm interested in creating interactive experiences and functional
            interfaces.
          </MediumFont>
        </AnimationWrapper>
      </Description>
    </Container>
  );
};

export { IntroduceSection };

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: #fff;
  padding: 10rem;
  margin-bottom: 10rem;
`;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 15%;
  margin-left: 10rem;
`;

const MediumFont = styled.span`
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  font-size: 3rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const SecondFont = styled.span`
  font-family: "Roboto Slab", serif;
  font-weight: 200;
  font-size: 2.8rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;
