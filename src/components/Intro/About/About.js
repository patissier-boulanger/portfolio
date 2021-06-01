import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import face from "../../../asset/images/face2.jpg";

const UnderLineAnimtion = () => {
  return (
    <UnderLineSvg
      viewBox="0 0 572 225"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        strokeWidth={5}
        d="M118.273 222C195.968 222 273.958 198.858 348.232 172.064C386.444 158.279 425.469 142.241 461.148 120.047C471.268 113.752 484.392 102.743 489.659 89.7612C502.704 57.6029 467.78 37.4656 449.519 28.4967C415.051 11.5671 379.813 5.54054 342.793 3.99087C291.248 1.83319 239.517 2.95788 188.236 9.77054C137.962 16.4495 81.8618 27.9486 36.6813 57.6262C23.5748 66.2354 3.80279 83.9787 3.48172 104.557C3.28469 117.185 2.56662 125.423 10.2342 134.611C20.0968 146.43 35.5111 149.933 48.4981 152.875C65.3784 156.7 83.1731 156.145 100.267 157.499C126.586 159.583 152.873 159.58 179.233 159.58C255.303 159.58 329.828 153.391 405.253 140.853C448.945 133.591 491.963 122.938 535.425 114.729C546.885 112.565 557.837 111.002 569 107.563"
        stroke="#A7A7A7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </UnderLineSvg>
  );
};

const About = () => {
  return (
    <Container>
      <Font>Hello! Welcome to my page</Font>
      <BigFont>Juhyoung Jung</BigFont>

      <PhotoWrapper>
        <Photo src={face} />
        <Circle>
          <MediumFont>Who am i?</MediumFont>
          <MediumFont>I'm hard-worker</MediumFont>
          <MediumFont>and passionate-learner</MediumFont>
          <MediumFont>and I am who</MediumFont>
        </Circle>
      </PhotoWrapper>
      <BigFont>
        Want to be a
        <AnimationWrapper>
          nice
          <UnderLineAnimtion />
        </AnimationWrapper>
      </BigFont>
      <BigFont> men and good developper</BigFont>
    </Container>
  );
};

export { About };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12rem;
  min-height: 100vh;

  background: #292929;
  /* background: radial-gradient(#292929 0.7px, transparent 1px),
    radial-gradient(#292929 0.7px, transparent 1px), #292929; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px; */
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 80rem;
  height: 80rem;
`;

const Photo = styled.image`
  width: 80rem;
  height: 80rem;
`;

const Font = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: lighter;
  font-size: 3.2rem;
  text-align: center;
  color: white;
`;

const MediumFont = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: lighter;
  font-size: 7.3rem;
  text-align: center;

  color: white;
  z-index: 1;
`;

const BigFont = styled.span`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 17.3rem;
  text-align: center;

  color: white;
  z-index: 1;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 90rem;
  height: 90rem;
  top: 20rem;
  right: 10rem;
  /* border-radius: 50%; */
  background-color: #4dd0e1; //#ff69b4;

  /* background: radial-gradient(#292929 0.7px, transparent 1px),
    radial-gradient(#292929 0.7px, transparent 1px), #292929; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px; */
`;

const AnimationWrapper = styled.div`
  position: relative;
`;

const UnderLineSvg = styled.svg`
  position: absolute;
  left: 52%;
  top: 80%;
  transform: translate(-50%, -50%);
  width: 40%;
`;
