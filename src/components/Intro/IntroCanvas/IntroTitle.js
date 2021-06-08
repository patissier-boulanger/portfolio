import React from "react";
import { Text } from "@react-three/drei";
import { a, useTransition } from "@react-spring/three";

const TextImplentation = ({ text, position, font, ...props }) => {
  const AnimatedText = a(Text);

  return (
    <AnimatedText
      color="black"
      anchorX="center"
      anchorY="middle"
      fontSize={5}
      position={position}
      font={font}
      {...props}
    >
      {text}
    </AnimatedText>
  );
};

const IntroTitle = () => {
  const texts = [
    {
      text: "Passion",
      position: [0, 5, 0],
      font: "/font/RobotoMono-Regular.ttf",
    },
    {
      text: "Creative",
      position: [0, 0, 0],
      font: "/font/RobotoMono-Regular.ttf",
    },
    {
      text: "Developer",
      position: [0, -5, 0],
      font: "/font/RockSalt-Regular.ttf",
    },
  ];

  const transition = useTransition(texts, {
    from: { scale: [0, 0, 0] },
    enter: ({ r }) => ({ scale: [1, 1, 1] }),
    leave: { scale: [0.1, 0.1, 0.1] },
    config: { mass: 5, tension: 1000, friction: 200 },
    trail: 200,
    keys: (item) => item.key,
  });

  return transition((props, { text, font, position }) => {
    return (
      <TextImplentation
        text={text}
        font={font}
        position={position}
        {...props}
      />
    );
  });
};

export { IntroTitle };
