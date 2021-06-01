import styled from "styled-components";
import { motion } from "framer-motion";

const pageAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0, when: "beforeChildren", staggerChildren: 0.3 },
  },
};

const sliderAnimation = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      ease: "easeOut",
      when: "beforeChildren",
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Details = () => {
  return <h1>hi</h1>;
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #4dd0e1;
`;

const Frame2 = styled(Frame1)`
  background: #c7e5f4;
`;

const Frame3 = styled(Frame1)`
  background: #ff69b4;
`;

const Frame4 = styled(Frame1)`
  background: #d7bffb;
`;

export { Details };
