import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { rapideEnterPageAnimation } from "../../animations/variants";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      exit="exit"
      variants={rapideEnterPageAnimation}
      initial="hidden"
      animate="show"
    >
      112321312
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;

  padding-top: 10rem;
`;

export { Contact };
