import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { useParallaxEffect } from "../../../hooks/useParallaxEffect";
import {
  animationWrapper,
  slideFontAnimation,
} from "../../../animations/variants";
import { IntroduceCanvas } from "./IntroduceCanvas.js/IntroduceCanvas";

const IntroduceSection = ({ changeCurrentPage }) => {
  const [introduceObserver, isIntroduceInView] = useInView({ threshold: 0.5 });
  const [canvasWrapper, canvasWrapperY] = useParallaxEffect([0, 0.2]);
  const [descriptionWrapper, descriptionWrapperControls] =
    useScrollAnimation(0.4);

  useLayoutEffect(() => {
    if (isIntroduceInView) {
      changeCurrentPage({ currentPage: "introduce" });
    }
  }, [isIntroduceInView, changeCurrentPage]);

  return (
    <Container ref={introduceObserver}>
      <CanvasContainer
        ref={canvasWrapper}
        style={{ y: canvasWrapperY, x: canvasWrapperY }}
      >
        <IntroduceCanvas />
      </CanvasContainer>
      <Description
        ref={descriptionWrapper}
        animate={descriptionWrapperControls}
        variants={animationWrapper}
      >
        <AnimationWrapper variants={slideFontAnimation}>
          <TitleSansSerifFont>안녕하세요</TitleSansSerifFont>
          <HeadFont>
            프론트엔드 개발자 정주형입니다. 서울에 거주하고 있습니다. 열심히
            일하고 열심히 배웁니다. 그 외의 시간에는 열심히 놉니다.
          </HeadFont>
        </AnimationWrapper>
      </Description>
      <Description
        ref={descriptionWrapper}
        animate={descriptionWrapperControls}
        variants={animationWrapper}
      >
        <AnimationWrapper variants={slideFontAnimation}>
          <TitleSerifFont>목표</TitleSerifFont>
          <MediumFont>
            살아있는 공간을 만들고 싶습니다. 즐거운 공간은 신뢰성 있는 코드
            위에서 이루어진다고 생각합니다.
          </MediumFont>
          <Blank />
          <MediumFont>
            좋은 코드를 위해 저는 이러한 부분에 신경을 쓰려고 노력하고 있습니다.
            가독성과 접근성, 재사용 가능한 코드와 명료한 디자인 패턴이
            그것입니다.
          </MediumFont>
        </AnimationWrapper>
      </Description>
      <Description
        ref={descriptionWrapper}
        animate={descriptionWrapperControls}
        variants={animationWrapper}
      >
        <AnimationWrapper variants={slideFontAnimation}>
          <TitleSansSerifFont>개발자</TitleSansSerifFont>
          <SecondFont>
            개발자로써 사용자 경험에 관심을 가지려고 노력하고 있습니다. 효율적인
            코드를 위해 로우한 부분까지 파고드는 것을 좋아합니다. 잘 만든 웹
            사이트들을 들어갈때마다 어떻게 이루어져 있는지 관찰하려고
            노력합니다.
          </SecondFont>
          <Blank />
          <SecondFont>
            UI와 UX가 기술적 요소만큼 중요하다고 생각하며 이를 위해 다양한
            분야의 경험을 하기 위해 노력하고 있습니다. 개발자를 하기 전 저의
            경력이 넓은 시야를 가지는데 도움을 줄 수 있을 거라고 생각합니다.
          </SecondFont>
        </AnimationWrapper>
      </Description>
    </Container>
  );
};

export { IntroduceSection };

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 150vh;
  background: #fff;
  padding: 20rem;
`;

const CanvasContainer = styled(motion.div)`
  position: absolute;
  top: 55%;
  left: 0%;
  width: 40rem;
  height: 40rem;
`;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 25%;
  margin-left: 10rem;
`;

const MediumFont = styled.span`
  font-family: "Noto Serif KR", serif;
  font-weight: 400;
  font-size: 2.6rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const SecondFont = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 200;
  font-size: 2.6rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const HeadFont = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 200;
  font-size: 2.6rem;
  text-align: left;

  color: #292929;
  z-index: 1;
`;

const TitleSansSerifFont = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 200;
  font-size: 2rem;
  text-align: left;

  color: #292929;
  z-index: 1;
  margin-bottom: 1rem;
`;

const Blank = styled.div`
  height: 1rem;
`;

const TitleSerifFont = styled.span`
  font-family: "Noto Serif KR", serif;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: left;

  color: #292929;
  z-index: 1;
  margin-bottom: 1rem;
`;
