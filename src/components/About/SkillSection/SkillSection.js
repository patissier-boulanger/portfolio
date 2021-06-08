import styled from "styled-components";

import { motion } from "framer-motion";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import {
  animationWrapper,
  lineAnimation,
  fadeInFontAnimation,
  slideFontAnimation,
} from "../../../animations/variants";

const SkillSection = () => {
  const [textsWrapper, textsWrapperControls] = useScrollAnimation(0.4);
  const [descriptionWrapper, descriptionWrapperControls] =
    useScrollAnimation(0.4);

  return (
    <Container>
      <Wrapper>
        <Texts
          ref={textsWrapper}
          animate={textsWrapperControls}
          variants={animationWrapper}
        >
          <MediumFont>:Skills</MediumFont>
          <Line variants={lineAnimation} />
          <BigFont variants={slideFontAnimation}>HTML / CSS</BigFont>
          <BigFont variants={slideFontAnimation}>Javascript</BigFont>
          <BigFont variants={slideFontAnimation}>React</BigFont>
          <BigFont variants={slideFontAnimation}>NodeJs</BigFont>
          <BigFont variants={slideFontAnimation}>Express</BigFont>
          <BigFont variants={slideFontAnimation}>MongoDB</BigFont>
        </Texts>
        <Description
          ref={descriptionWrapper}
          animate={descriptionWrapperControls}
          variants={animationWrapper}
        >
          <MediumFont>:Interest</MediumFont>
          <Line variants={lineAnimation} />
          <AnimationWrapper variants={slideFontAnimation}>
            <MediumFont>I care about </MediumFont>
            <MediumFont>Readability</MediumFont>
            <MediumFont>Accessibility</MediumFont>
            <MediumFont>Reusable code</MediumFont>
            <MediumFont>Design pattern.</MediumFont>
            <Blank />
            <MediumFont>
              I'm interested in creating interactive experiences and functional
              interfaces.
            </MediumFont>
            <Button variants={slideFontAnimation}>
              <ButtonFont>| More</ButtonFont>
            </Button>
          </AnimationWrapper>
          <Blank />
          <Blank />
        </Description>
      </Wrapper>
    </Container>
  );
};

export { SkillSection };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13rem;
  min-height: 100vh;

  background: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  min-height: 80vh;
`;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Texts = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;

  padding-left: 25rem;
`;

const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Button = styled(motion.button)`
  margin-top: 5rem;
  background-color: #4dd0e1;
  width: 10rem;
  height: 8rem;
  box-shadow: 8px 8px 0px 4px #292929;
`;

const MediumFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  font-size: 2.5rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const ButtonFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 2rem;
  text-align: left;

  color: #fff;
`;

const BigFont = styled(motion.span)`
  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 6.3rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const Line = styled(motion.div)`
  width: 80%;
  border-bottom: 1px solid #292929;
  margin-bottom: 5rem;
`;

const Blank = styled.div`
  height: 2rem;
`;
