import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import img1 from "../../../../asset/images/wall.jpg";
import img2 from "../../../../asset/images/wall2.jpg";
import disp from "../../../../asset/images/displacement2.jpg";

import "./ImageShader";

const FadingImage = () => {
  const ref = useRef();
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [
    img1,
    img2,
    disp,
  ]);
  const [hovered, setHover] = useState(false);
  useFrame(
    () =>
      (ref.current.dispFactor = THREE.MathUtils.lerp(
        ref.current.dispFactor,
        !!hovered,
        0.1,
      )),
  );
  return (
    <mesh
      onPointerMove={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <planeGeometry args={[3, 3, 3]} />
      <imageFadeMaterial
        ref={ref}
        tex={texture1}
        tex2={texture2}
        disp={dispTexture}
      />
    </mesh>
  );
};

const ContactCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <Suspense fallback={null}>
        <FadingImage />
      </Suspense>
    </Canvas>
  );
};

export { ContactCanvas };
