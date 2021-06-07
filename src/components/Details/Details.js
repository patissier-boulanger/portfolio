import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import face from "../../asset/images/face2.jpg";
import { ReactComponent as Smile } from "../../asset/images/smile.svg";
import {
  UnderLineAnimtion,
  ArrowAnimation,
  Arrow2Animation,
  Arrow3Animation,
} from "../../animations/svgAnimations";
import {
  slideFontAnimation,
  fadeInFontAnimation,
  photoAnimation,
  animationWrapper,
} from "../../animations/variants";

import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useParallaxEffect } from "../../hooks/useParallaxEffect";

const Details = () => {
  const [descriptionWrapper, descriptionWrapperY] = useParallaxEffect([
    0, -0.4,
  ]);
  const [svgWrapper, svgWrapperY] = useParallaxEffect([0, 0.2]);
  // const [absoluteContainer, absoluteContainerY] = useParallaxEffect([0, 0.1]);

  const [upperFonts, upperFontsControls] = useScrollAnimation(0.5);
  const [arrowSvgs, arrowSvgsControls] = useScrollAnimation(0.7);
  const [photo, photoControls] = useScrollAnimation(0.7);
  const [textsWrapper, textsWrapperControls] = useScrollAnimation(0.2);

  return (
    <Container>
      <NameFont
        ref={upperFonts}
        animate={upperFontsControls}
        variants={slideFontAnimation}
      >
        Hi! I'm
      </NameFont>
      <NameFont
        ref={upperFonts}
        animate={upperFontsControls}
        variants={slideFontAnimation}
      >
        Juhyoung Jung
      </NameFont>
      <Blank />
      <Blank />
      <Blank />
      <PhotoWrapper>
        <ArrowAnimation attachRef={arrowSvgs} controls={arrowSvgsControls} />
        <Arrow2Animation attachRef={arrowSvgs} controls={arrowSvgsControls} />

        <SvgWrapper ref={svgWrapper} style={{ y: svgWrapperY, rotate: 15 }}>
          <Smile width={"160%"} />
        </SvgWrapper>
        <Photo
          src={face}
          ref={photo}
          animate={photoControls}
          variants={photoAnimation}
        />
        <DescriptionWrapper
          ref={descriptionWrapper}
          style={{ x: "-1rem", y: descriptionWrapperY }}
        >
          <MediumFont>Who am i?</MediumFont>
          <MediumFont>I'm creative developer</MediumFont>
          <MediumFont>live in Seoul, Korea</MediumFont>
          <Blank />
          <MediumFont>I'm hard-worker,</MediumFont>
          <MediumFont>passionate-learner</MediumFont>
          <MediumFont>and movie lover</MediumFont>
          <MediumFont>I swim sometimes</MediumFont>
          <MediumFont>And especialy</MediumFont>
          <Blank />
          <Blank />
          <MediumFont>...I am who</MediumFont>
        </DescriptionWrapper>
      </PhotoWrapper>
      <Blank />
      <TextsWrapper
        ref={textsWrapper}
        animate={textsWrapperControls}
        variants={animationWrapper}
      >
        <BigFont variants={fadeInFontAnimation}>Want to be a</BigFont>
        <AnimationWrapper>
          <BigFont variants={fadeInFontAnimation}>nice</BigFont>
          <UnderLineAnimtion />
        </AnimationWrapper>
        <BigFont variants={fadeInFontAnimation}>men and good </BigFont>
        <BigFont variants={fadeInFontAnimation}>developer</BigFont>
      </TextsWrapper>
      <Blank />
    </Container>
  );
};

export { Details };

const Container = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12rem;
  min-height: 100vh;
  background: #000;

  z-index: 1;
`;

const AbsoluteContainer = styled(motion.div)`
  position: absolute;
  top: 30%;
  left: 40%;
  height: 60vh;
  width: 45vw;

  color: #a7a7a7;
  background: radial-gradient(#fff 5px, transparent 5px),
    radial-gradient(#fff 5px, transparent 5px), transparent;
  background-position: 0 0, 60px 60px;
  background-size: 60px 60px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 80rem; */
  margin-bottom: 10rem;
`;

const Photo = styled(motion.img)`
  width: 60rem;
  height: 60rem;
  object-fit: contain;
`;

const SmallFont = styled(motion.span)`
  text-align: center;
  font-size: 3rem;
  font-family: "Roboto Mono", monospace;

  font-weight: 200;
  color: black;
`;

const NameFont = styled(motion.span)`
  font-family: "Roboto Slab", serif;
  font-size: 13.3rem;
  font-weight: 700;
  text-align: right;
  color: black;
  margin-bottom: -3rem;
  padding-right: 5rem;
`;

const MediumFont = styled.span`
  text-align: center;
  font-weight: 200;
  font-size: 5.3rem;

  font-family: "Roboto Mono", monospace;

  color: black;
  z-index: 1;
`;

const BigFont = styled(motion.span)`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 19.3rem;
  text-align: center;

  color: black;
  z-index: 1;
`;

const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 90rem;
  height: 100rem;
  top: 20rem;
  left: -20rem;
  background-color: #4dd0e1;
  z-index: 2;
`;

const SvgWrapper = styled(motion.div)`
  position: absolute;
  width: 15rem;
  height: 15rem;
  right: 5%;
  top: 75%;
  filter: drop-shadow(19rem 0px 0px #4dd0e1);
`;

const AnimationWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
`;

const TextsWrapper = styled(motion.div)`
  text-align: center;
`;

const Blank = styled.div`
  height: 8rem;
`;
