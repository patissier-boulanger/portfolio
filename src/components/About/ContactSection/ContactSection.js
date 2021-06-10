import styled from "styled-components";
import { motion } from "framer-motion";
import { SiNotion, SiGithub, SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { animationWrapper } from "../../../animations/variants";
import { ContactCanvas } from "./ContactCanvas/ContactCanvas";

const ContactSection = () => {
  const backgroundColorAnimation = {
    hidden: { y: "60vh" },
    show: {
      y: 0,
      transition: { duration: 1.5 },
    },
  };

  const [container, containerControls] = useScrollAnimation(0.4);

  return (
    <Container
      ref={container}
      animate={containerControls}
      variants={animationWrapper}
    >
      <CanvasContainer variants={backgroundColorAnimation}>
        <ContactCanvas />
      </CanvasContainer>
      <AnimationWrapper variants={backgroundColorAnimation}>
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
        <Source>Photo by Michael Streckbein</Source>
      </AnimationWrapper>
    </Container>
  );
};

export { ContactSection };

const Container = styled(motion.div)`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Source = styled.span`
  position: absolute;
  bottom: 10%;
  right: 10%;
  color: #fff;
  font-family: "Roboto Mono", monospace;
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;
  width: 35%;
  height: 80%;
  top: 10%;
  left: 55%;
  z-index: 2;
`;

const AnimationWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  height: 60%;
  top: 40%;
  left: 15%;
  padding-top: 10rem;
  padding-left: 20rem;
  background: #0f0f0f;
  z-index: 1;
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
