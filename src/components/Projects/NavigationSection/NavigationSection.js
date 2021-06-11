import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { slideAnimation } from "../../../animations/variants";

const NavigationSection = ({ projects, setCurrentProject }) => {
  const handleOnClick = (projectOrder) => {
    setCurrentProject(projects[projectOrder]);
  };

  return (
    <Container variants={slideAnimation}>
      {projects.map((project, index) => {
        return (
          <Image
            key={index}
            src={project.thumbnail}
            onClick={() => handleOnClick(index)}
          />
        );
      })}
    </Container>
  );
};

export { NavigationSection };

const Container = styled(motion.div)`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 15%;
  margin-left: 1rem;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  margin-bottom: 1rem;
  cursor: pointer;
`;
