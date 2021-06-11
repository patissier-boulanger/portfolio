import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { UnderLineAnimtion } from "../../../animations/svgAnimations";
import {
  fadeInFontAnimation,
  animationWrapper,
} from "../../../animations/variants";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useParallaxEffect } from "../../../hooks/useParallaxEffect";
import face from "../../../asset/images/face.png";

const PhotoSection = ({ changeCurrentPage }) => {
  const [photoObserver, isPhotoInView] = useInView({ threshold: 0.4 });
  const [textsWrapper, textsWrapperControls] = useScrollAnimation(0.2);
  const [photo, photoY] = useParallaxEffect([0, -0.07]);

  useLayoutEffect(() => {
    if (isPhotoInView) {
      changeCurrentPage({ currentPage: "photo" });
    }
  }, [isPhotoInView, changeCurrentPage]);

  return (
    <Container ref={photoObserver}>
      <Photo src={face} ref={photo} style={{ y: photoY }} />
      <TextsWrapper
        ref={textsWrapper}
        animate={textsWrapperControls}
        variants={animationWrapper}
      >
        <Font variants={fadeInFontAnimation}>Want to be a</Font>
        <AnimationWrapper>
          <Font variants={fadeInFontAnimation}>better</Font>
          <UnderLineAnimtion />
        </AnimationWrapper>
        <Font variants={fadeInFontAnimation}>men and good </Font>
        <Font variants={fadeInFontAnimation}>developer</Font>
      </TextsWrapper>
    </Container>
  );
};

export { PhotoSection };

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
`;

const Photo = styled(motion.img)`
  margin-left: 24rem;
  width: 75rem;
  height: 75rem;
  object-fit: contain;
`;

const Font = styled(motion.span)`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
  font-size: 15.3rem;
  text-align: center;

  color: #232323;
  z-index: 1;
`;

const AnimationWrapper = styled(motion.div)`
  position: relative;
  text-align: center;
`;

const TextsWrapper = styled(motion.div)`
  position: absolute;
  left: 30%;
  text-align: center;
`;
