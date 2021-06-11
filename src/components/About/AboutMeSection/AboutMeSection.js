import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

const AboutMeSection = ({ changeCurrentPage }) => {
  const [aboutMeObserver, isAboutMeInView] = useInView({ threshold: 1 });
  const [textsWrapper, textsWrapperControls] = useScrollAnimation(0.2);

  useLayoutEffect(() => {
    if (isAboutMeInView) {
      changeCurrentPage({ currentPage: "aboutMe" });
    }
  }, [isAboutMeInView, changeCurrentPage]);

  const slideYAnimation = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <Container ref={aboutMeObserver}>
      <TextWrapper
        ref={textsWrapper}
        animate={textsWrapperControls}
        variants={slideYAnimation}
      >
        <MediumFont>안녕하세요.</MediumFont>
        <MediumFont>프론트엔드 개발자 정주형입니다.</MediumFont>

        <MediumFont>서울에 거주하고 있습니다.</MediumFont>
        <MediumFont>열심히 일하고 열심히 배웁니다.</MediumFont>
        <MediumFont>그 외의 시간에는 열심히 놉니다.</MediumFont>
        <MediumFont>수영하는 것을 좋아합니다.</MediumFont>
        <MediumFont>새로운 전자제품을 </MediumFont>
        <MediumFont>가지고 노는 것도 좋아합니다.</MediumFont>
      </TextWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 80vh;
`;

const TextWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;

  left: 55%;
  padding-right: 50rem;
  width: 55%;
  margin-top: 18rem;
`;

const MediumFont = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  text-align: left;
  font-weight: 300;
  font-size: 2.8rem;
  color: #0f0f0f;
  z-index: 1;
`;

export { AboutMeSection };
