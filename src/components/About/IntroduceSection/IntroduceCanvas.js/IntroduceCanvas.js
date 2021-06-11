import React, { Suspense, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { a, useTransition } from "@react-spring/three";
import {
  EffectComposer,
  SSAO,
  SMAA,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { EdgeDetectionMode } from "postprocessing";

const Geometry = ({ r, position, ...props }) => {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        0.004 * r;
    ref.current.position.y =
      position[1] +
      Math[r > 0.5 ? "cos" : "sin"](state.clock.getElapsedTime() * r) * r;
  });
  return (
    <group position={position} ref={ref}>
      <a.mesh {...props} />
    </group>
  );
};

const Geometries = () => {
  const [
    blackMap,
    blackMap2,
    blackMap3,
    blackMap4,
    blackMap5,
    chrome1,
    pink1,
    white1,
    mix1,
    green1,
  ] = useLoader(THREE.TextureLoader, [
    "/texture/black1.png",
    "/texture/black2.png",
    "/texture/black3.png",
    "/texture/black4.png",
    "/texture/black5.png",
    "/texture/chrome1.png",
    "/texture/pink1.png",
    "/texture/white1.png",
    "/texture/mix1.png",
    "/texture/green1.png",
  ]);

  const items = [
    {
      position: [0, 0, 0],
      r: 0.2,
      geometry: new THREE.BoxBufferGeometry(8, 8, 8),
      material: new THREE.MeshMatcapMaterial({ matcap: blackMap }),
    },
  ];

  const transition = useTransition(items, {
    from: { scale: [0, 0, 0], rotation: [0, 0, 0] },
    enter: ({ r }) => ({ scale: [1, 1, 1], rotation: [r * 3, r * 3, r * 3] }),
    leave: { scale: [0.1, 0.1, 0.1], rotation: [0, 0, 0] },
    config: { mass: 5, tension: 1000, friction: 100 },
    trail: 100,
    keys: (item) => item.key,
  });

  //style, item 순서
  return transition((props, { position: [x, y, z], r, geometry, material }) => {
    return (
      <Geometry
        position={[x * 3, y * 3, z]}
        material={material}
        geometry={geometry}
        r={r}
        {...props}
      />
    );
  });
};

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 2, mouse.y * 1, camera.position.z),
      0.02,
    ),
  );
};

const IntroduceCanvas = () => {
  return (
    <Canvas
      concurrent
      gl={{
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: false,
      }}
      pixelRatio={2}
      camera={{ position: [0, 0, 15], near: 5, far: 40 }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight castShadow position={[2.5, 12, 12]} intensity={4} />
      <pointLight position={[20, 20, 20]} />
      <pointLight position={[-20, -20, -20]} intensity={5} />
      <Suspense fallback={null}>
        <Geometries />
        <EffectComposer multisampling={0}>
          <SSAO
            samples={25}
            intensity={4}
            luminanceInfluence={0.5}
            radius={10}
            scale={0.5}
            bias={0.5}
          />
          <SMAA edgeDetectionMode={EdgeDetectionMode.DEPTH} />
        </EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
};

export { IntroduceCanvas };
