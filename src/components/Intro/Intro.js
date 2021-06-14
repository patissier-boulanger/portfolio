import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { IntroCanvas } from "./IntroCanvas/IntroCanvas";
import { enterPageAnimation } from "../../animations/variants";

const Intro = () => {
  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      <IntroCanvas />
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
`;

export default Intro;
