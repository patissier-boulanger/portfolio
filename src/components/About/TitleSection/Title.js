import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  slideFontAnimation,
  animationWrapper,
  slideAnimation,
} from "../../../animations/variants";

const Title = ({ changeCurrentPage }) => {
  const [titleObserver, isTitleInView] = useInView({ threshold: 1 });

  useEffect(() => {
    if (isTitleInView) {
      changeCurrentPage({ currentPage: "title" });
    }
  }, [isTitleInView, changeCurrentPage]);

  return (
    <AboutSection ref={titleObserver} variants={slideAnimation}>
      <NameTextWrapper>
        <LeftDescriptionFont>Hi.</LeftDescriptionFont>
      </NameTextWrapper>
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
    </AboutSection>
  );
};

export { Title };

const AboutSection = styled(motion.div)`
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
  font-weight: 400;
  color: #fff;
  margin-bottom: -5rem;
`;
