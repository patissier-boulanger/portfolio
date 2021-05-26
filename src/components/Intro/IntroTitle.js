import React, { useRef } from "react";
import styled from "styled-components";
import { Text } from "@react-three/drei";

const IntroTitle = () => {
  return (
    <>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={6}
        font={"/font/RobotoMono-Regular.ttf"}
      >
        Creative
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={6}
        font={"/font/RobotoMono-Regular.ttf"}
        position={[0, 5, 0]}
      >
        Passion
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={6}
        font={"/font/RobotoMono-Regular.ttf"}
      >
        Creative
      </Text>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        fontSize={6}
        font={"/font/RockSalt-Regular.ttf"}
        position={[0, -5, 0]}
      >
        Developper
      </Text>
    </>
  );
};

export { IntroTitle };
