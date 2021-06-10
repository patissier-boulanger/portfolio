import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const AboutMeSection = ({ changeCurrentPage }) => {
  const [aboutMeObserver, isAboutMeInView] = useInView({ threshold: 1 });
  const [textsWrapper, textsWrapperControls] = useScrollAnimation(0.2);

  useLayoutEffect(() => {
    if (isAboutMeInView) {
      changeCurrentPage({ currentPage: "aboutMe" });
    }
  }, [isAboutMeInView, changeCurrentPage]);

  const slideYAnimation = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Container ref={aboutMeObserver}>
      <TextWrapper
        ref={textsWrapper}
        animate={textsWrapperControls}
        variants={slideYAnimation}
      >
        <MediumFont>Who am i?</MediumFont>
        <MediumFont>I'm creative developer</MediumFont>
        <MediumFont>live in Seoul, Korea</MediumFont>
        <MediumFont>I'm hard-worker,</MediumFont>
        <MediumFont>passionate-learner</MediumFont>
        <MediumFont>and movie lover</MediumFont>
        <MediumFont>I swim sometimes</MediumFont>
        <MediumFont>and</MediumFont>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 80vh;
`;

const TextWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;

  left: 55%;
  padding-right: 50rem;
  width: 45%;
  margin-top: 18rem;
`;

const MediumFont = styled.span`
  font-family: "Roboto Mono", monospace;
  text-align: right;
  font-weight: 200;
  font-size: 3rem;
  color: #0f0f0f;
  z-index: 1;
`;

export { AboutMeSection };
