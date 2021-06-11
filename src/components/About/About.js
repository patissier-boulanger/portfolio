import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Title } from "./TitleSection/Title";

import { PhotoSection } from "./PhotoSection/PhotoSection";
import { SkillSection } from "./SkillSection/SkillSection";
import { IntroduceSection } from "./IntroduceSection/IntroduceSection";
import { ContactSection } from "./ContactSection/ContactSection";

import { enterPageAnimation } from "../../animations/variants";

const About = ({ changeCurrentPage }) => {
  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      <RightProgressLine />
      <Title changeCurrentPage={changeCurrentPage} />
      <InvisibleFrame />
      <IntroduceSection changeCurrentPage={changeCurrentPage} />
      <PhotoSection changeCurrentPage={changeCurrentPage} />
      <SkillSection changeCurrentPage={changeCurrentPage} />
      <ContactSection changeCurrentPage={changeCurrentPage} />
    </Container>
  );
};

export { About };

const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: #fff;
`;

const InvisibleFrame = styled.div`
  min-height: 100vh;
  background: transparent;
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
