import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { slideAnimation } from "../../../animations/variants";

const DescriptionSection = ({ currentProject }) => {
  const { title, description, githubLink, stacks } = currentProject;

  return (
    <Container variants={slideAnimation}>
      <TitleSection>
        <TitleFont>{title}</TitleFont>
        <DescriptionFont>{description}</DescriptionFont>
        <DescriptionFont>
          <Link
            to={{
              pathname: `${githubLink}`,
            }}
            target="_blank"
          >
            {githubLink}
          </Link>
        </DescriptionFont>
      </TitleSection>
      <StackSection>
        {stacks.map((stack, index) => {
          return <StackFont key={index}>{stack}</StackFont>;
        })}
      </StackSection>
    </Container>
  );
};

export { DescriptionSection };

const Container = styled(motion.div)`
  position: Sticky;
  display: flex;
  flex-direction: column;
  width: 27%;

  z-index: 1;
  margin-right: 2rem;
`;

const TitleSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  word-break: break-all;
  width: 100%;
`;

const StackSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  width: 100%;
`;

const StackFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: left;

  color: #292929;
`;

const TitleFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-size: 5rem;
  font-weight: 400;
  margin-bottom: 2rem;

  color: #000;
`;

const DescriptionFont = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: left;
  margin-bottom: 5rem;

  color: #292929;
`;
