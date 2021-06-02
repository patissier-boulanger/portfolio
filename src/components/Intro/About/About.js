import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import face from "../../../asset/images/face2.jpg";
import { ReactComponent as Smile } from "../../../asset/images/smile.svg";

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

const ArrowAnimation = () => {
  return (
    <ArrowSvg
      viewBox="0 0 726 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        strokeWidth={5}
        d="M81.0958 122.376L64.7064 93.408L98.2162 107.949C129.131 119.823 161.118 129.011 193.584 136.166C255.385 149.992 319.001 156.242 382.351 154.305C445.65 152.315 508.779 142.548 569.535 124.545C627.565 107.244 689.612 84.4137 725.498 32.9467L710.127 16.8864C612.676 84.0371 493.598 113.965 376.194 116.065C316.243 117.06 256.303 110.947 197.917 97.1501C170.201 90.6188 143.053 82.2093 116.169 72.5782C98.4218 66.3308 80.6969 59.114 62.6888 52.8108C85.8065 48.3429 109.08 43.9298 130.524 34.3593C144.947 27.7956 138.939 2.70173 123.065 3.60642C85.7823 5.90101 51.0122 23.2876 14.5552 29.437L2.27152 49.7041C12.5116 84.1024 32.5162 114.077 55.4009 141.254C67.1953 155.185 90.1947 137.93 81.0958 122.376Z"
        stroke="#A7A7A7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </ArrowSvg>
  );
};

const Arrow2Animation = () => {
  return (
    <Arrow2Svg
      viewBox="0 0 623 598"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        strokeWidth={5}
        d="M67.5444 289.699L65.5831 281.716L54.6791 282.396L53.4641 281.106C42.2694 294.64 42.2796 314.683 40.0764 331.517C37.3009 352.337 35.5865 373.19 33.7236 394.133C32.6504 407.803 47.4731 420.442 60.178 411.102C85.7928 391.987 112.026 375.091 139.607 358.975L145.831 349.391L148.713 347.477L148.836 347.215L148.877 347.128L151.914 340.872L152.133 338.541L151.368 332.876L148.336 328.072L143.748 324.57L139.934 323.294L134.348 323.578L129.044 325.696L128.506 326.387L125.123 327.388L120.874 330.681L120.283 331.401L105.373 334.716C123.522 311.264 142.806 288.705 165.003 268.913C204.365 233.834 251.332 206.642 301.259 189.832C402.392 155.922 523.113 166.292 616.613 217.812L620.593 209.353C521.889 145.918 404.047 126.265 290.745 160.632C208.962 185.404 127.486 241.912 80.9635 317.048L67.5444 289.699Z"
        stroke="#A7A7A7"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Arrow2Svg>
  );
};

const About = () => {
  return (
    <Container>
      <Font>Hello! Welcome to my page</Font>
      <NameFont>Juhyoung Jung</NameFont>
      <PhotoWrapper>
        <ArrowAnimation />
        <Arrow2Animation />
        <SvgWrapper>
          <Smile width={"160%"} />
        </SvgWrapper>
        <Photo src={face} />
        <Circle>
          <MediumFont>Who am i?</MediumFont>
          <MediumFont>I'm hard-worker,</MediumFont>
          <MediumFont>passionate-learner</MediumFont>
          <MediumFont>and movie lover</MediumFont>
          <MediumFont>I swim sometimes</MediumFont>
          <MediumFont>And especialy</MediumFont>
          <MediumFont>I am who</MediumFont>
        </Circle>
      </PhotoWrapper>
      <Blank />
      <BigFont>
        Want to be a
        <AnimationWrapper>
          nice
          <UnderLineAnimtion />
        </AnimationWrapper>
      </BigFont>
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
  /* background: radial-gradient(#fff 0.7px, transparent 1px),
    radial-gradient(#fff 0.7px, transparent 1px), #292929; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px; */
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  margin-bottom: 15rem;
`;

const Photo = styled.img`
  width: 60rem;
  height: 60rem;
  object-fit: contain;
  transform: rotate(5deg);
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
  font-weight: 200;
  font-size: 6.3rem;
  text-align: center;

  color: white;
  z-index: 1;
`;

const NameFont = styled.span`
  margin-bottom: 10rem;

  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 17.3rem;
  text-align: center;

  color: white;
  z-index: 1;
`;

const BigFont = styled.span`
  font-family: "Roboto Slab", serif;
  font-weight: bold;
  font-size: 19.3rem;
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
  height: 95rem;
  top: 20rem;
  left: -20rem;
  /* border-radius: 50%; */
  background-color: #4dd0e1; //#ff69b4;

  /* background: radial-gradient(#292929 0.7px, transparent 1px),
    radial-gradient(#292929 0.7px, transparent 1px), #292929; //#4dd0e1;
  background-position: 0 0, 30px 30px;
  background-size: 60px 60px; */
`;

const SvgWrapper = styled.div`
  position: absolute;
  width: 15rem;
  height: 15rem;
  right: 5%;
  top: 65%;
  transform: rotate(14deg);
  filter: drop-shadow(19rem 0px 0px #4dd0e1);
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
