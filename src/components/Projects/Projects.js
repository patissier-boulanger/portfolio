import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { DescriptionSection } from "./DescriptionSection/DescriptionSection";
import { MainSection } from "./MainSection/MainSection";
import { NavigationSection } from "./NavigationSection/NavigationSection";

import { rapideEnterPageAnimation } from "../../animations/variants";
import { projects } from "../../constants/projects";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

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
      <DescriptionSection currentProject={currentProject} />
      <MainSection currentProject={currentProject} />
      <NavigationSection
        projects={projects}
        setCurrentProject={setCurrentProject}
      />
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

export { Projects };
