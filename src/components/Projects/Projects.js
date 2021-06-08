import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { enterPageAnimation } from "../../animations/variants";

const Projects = () => {
  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    ></Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  height: 100vh;
`;

export { Projects };
