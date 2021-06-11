import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SiNotion, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

import { enterPageAnimation, slideAnimation } from "../../animations/variants";
import codeImagePath from "../../asset/images/code.gif";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      exit="exit"
      variants={enterPageAnimation}
      initial="hidden"
      animate="show"
    >
      <ImageSection src={codeImagePath} />
      <ContactSection variants={slideAnimation}>
        <BigFont>Contact</BigFont>
        <MediumFont>juhyoung.jung1992@gmail.com</MediumFont>
        <MediumFont>Mobile +82 010 7166 6895</MediumFont>
        <IconWrapper>
          <Link
            to={{
              pathname:
                "https://www.notion.so/Web-Dev-62d236b844964e6dbcbfc19f4ce6068e",
            }}
            target="_blank"
          >
            <SiNotion size={40} />
          </Link>
          <Link
            to={{
              pathname: "https://github.com/patissier-boulanger",
            }}
            target="_blank"
          >
            <SiGithub size={40} />
          </Link>
          <Link
            to={{
              pathname: "https://www.linkedin.com/in/juhyoung-jung-b57206214/",
            }}
            target="_blank"
          >
            <SiLinkedin size={40} />
          </Link>
        </IconWrapper>
      </ContactSection>
      <Source>Photo by Andreion de Castro</Source>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  background: rgb(15, 15, 15);
  background: linear-gradient(
    90deg,
    rgba(15, 15, 15, 1) 33%,
    rgba(0, 0, 0, 1) 58%
  );
`;

const ImageSection = styled(motion.img)`
  position: absolute;
  width: 75rem;
  height: 75rem;
  left: 50%;
  top: 10%;
  object-fit: contain;
  z-index: 2;
`;

const ContactSection = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;

  top: 20%;

  z-index: 1;
`;

const Source = styled.span`
  position: absolute;
  bottom: 2%;
  right: 2%;
  color: #fff;
  font-family: "Roboto Mono", monospace;
  z-index: 2;
`;

const MediumFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 2rem;
  text-align: center;
  color: #fff;
`;

const BigFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  font-size: 4.3rem;
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin-top: 15rem;
`;

export { Contact };
