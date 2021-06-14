import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { slideAnimation } from "../../../animations/variants";

const MainSection = ({ currentProject }) => {
  const { mainImageLink, subImageLinks } = currentProject;

  return (
    <Container variants={slideAnimation}>
      <MainImageSection src={mainImageLink} />
      <SubImageWrapper>
        {subImageLinks?.map((subImageLink, index) => {
          return <SubImageSection src={subImageLink} key={index} />;
        })}
      </SubImageWrapper>
    </Container>
  );
};

export { MainSection };

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  left: 20%;
  width: 55%;

  overflow-y: scroll;
`;

const MainImageSection = styled(motion.img)`
  width: 100%;
  object-fit: contain;
  margin-bottom: 3rem;
`;

const SubImageSection = styled(motion.img)`
  width: 50%;
  object-fit: contain;
`;

const SubImageWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 30rem;
  margin-bottom: 5rem;
`;
