import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { fadeInFontAnimation } from "../../../animations/variants";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const AboutMeSection = () => {
  return (
    <Container>
      <InvisibleWrapper />
      <TextWrapper variants={fadeInFontAnimation}>
        <MediumFont>Who am i?</MediumFont>
        <MediumFont>
          I'm creative <Highlight color={"#000000"}>developer</Highlight>
        </MediumFont>
        <MediumFont>live in Seoul, Korea</MediumFont>
        <MediumFont>I'm hard-worker,</MediumFont>
        <MediumFont>
          <Highlight color={"#000000"}>passionate</Highlight>-learner
        </MediumFont>
        <MediumFont>and movie lover</MediumFont>
        <MediumFont>I swim sometimes</MediumFont>
        <MediumFont>and</MediumFont>
        <MediumFont>i am who</MediumFont>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const InvisibleWrapper = styled.div`
  width: 40%;
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-right: 30rem;
  width: 60%;
  margin-top: 18rem;
`;

const Highlight = styled.span`
  color: ${(props) => props.color};
  font-weight: 500;
`;

const MediumFont = styled.span`
  text-align: right;
  font-weight: 200;
  font-size: 3.3rem;
  font-family: "Roboto Mono", monospace;
  color: #0f0f0f;
  z-index: 1;
`;

export { AboutMeSection };
