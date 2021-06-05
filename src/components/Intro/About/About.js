import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import face from "../../../asset/images/face2.jpg";
import { ReactComponent as Smile } from "../../../asset/images/smile.svg";
import {
  UnderLineAnimtion,
  ArrowAnimation,
  Arrow2Animation,
} from "../../../animations/svgAnimations";
import { basicFontAnimation } from "../../../animations/variants";
import { photoAnimation } from "../../../animations/variants";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useParallaxEffect } from "../../../hooks/useParallaxEffect";

const About = () => {
  const [descriptionWrapper, descriptionWrapperY] = useParallaxEffect([
    0, -0.3,
  ]);
  const [svgWrapper, svgWrapperY] = useParallaxEffect([0, 0.2]);
  // const [svgWrapper, svgWrapperY] = useParallaxEffect([0, 0.2]);

  const [upperFonts, upperFontsControls] = useScrollAnimation(0.5);
  const [arrowSvgs, arrowSvgsControls] = useScrollAnimation(0.7);
  const [photo, photoControls] = useScrollAnimation(0.7);

  return (
    <Container>
      <SmallFont
        ref={upperFonts}
        animate={upperFontsControls}
        variants={basicFontAnimation}
      >
        Hello! Welcome to my page
      </SmallFont>
      <NameFont
        ref={upperFonts}
        animate={upperFontsControls}
        variants={basicFontAnimation}
      >
        Juhyoung Jung
      </NameFont>
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
          <MediumFont>I'm hard-worker,</MediumFont>
          <MediumFont>passionate-learner</MediumFont>
          <MediumFont>and movie lover</MediumFont>
          <MediumFont>I swim sometimes</MediumFont>
          <MediumFont>And especialy</MediumFont>
          <MediumFont>I am who</MediumFont>
        </DescriptionWrapper>
      </PhotoWrapper>
      <Blank />
      <BigFont>Want to be a</BigFont>
      <AnimationWrapper>
        <BigFont>nice</BigFont>
        <UnderLineAnimtion />
      </AnimationWrapper>
      <BigFont> men and good developper</BigFont>
      <Blank />
    </Container>
  );
};

export { About };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12rem;
  min-height: 100vh;
  background: #292929;
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
  margin-bottom: -3rem;
  text-align: center;
  font-size: 4rem;
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  color: white;
`;

const NameFont = styled(motion.span)`
  margin-bottom: 20rem;
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 17.3rem;
  text-align: center;
  color: white;
  z-index: 1;
`;

const MediumFont = styled.span`
  text-align: center;
  font-weight: 200;
  font-size: 6.3rem;

  font-family: "Roboto Mono", monospace;

  color: white;
  z-index: 1;
`;

const BigFont = styled(motion.span)`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 19.3rem;
  text-align: center;

  color: white;
  z-index: 1;
`;

const DescriptionWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 90rem;
  height: 95rem;
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

const AnimationWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const UnderLineSvg = styled.svg`
  position: absolute;
  left: 52%;
  top: 80%;
  transform: translate(-50%, -50%);
  width: 40%;
`;

const ArrowSvg = styled.svg`
  position: absolute;
  right: 11%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 16%;
`;

const Arrow2Svg = styled.svg`
  position: absolute;
  right: 15%;
  top: 5%;
  transform: translate(-50%, -50%);
  width: 16%;
`;

const Blank = styled.div`
  height: 8rem;
`;
