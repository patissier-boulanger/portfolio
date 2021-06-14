import React, { Suspense, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { a, useTransition } from "@react-spring/three";
import { EffectComposer } from "@react-three/postprocessing";
import { Html } from "@react-three/drei";

import { IntroTitle } from "./IntroTitle";
import { LoadingSpinner } from "../../../animations/spinner";

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
  const [blackMap, mix1] = useLoader(THREE.TextureLoader, [
    "/texture/black1.png",
    "/texture/mix1.png",
  ]);

  const items = [
    {
      position: [-0.9, 0.5, 6],
      r: 0.4,
      geometry: new THREE.SphereBufferGeometry(0.7, 32, 32),
      material: new THREE.MeshNormalMaterial(),
    },
    {
      position: [0.5, -1.2, -6],
      r: 0.9,
      geometry: new THREE.SphereBufferGeometry(1.5, 32, 32),
      material: new THREE.MeshMatcapMaterial({ matcap: blackMap }),
      key: 2,
    },
    {
      position: [-0.5, 2.5, -2],
      r: 0.6,
      geometry: new THREE.IcosahedronBufferGeometry(2),
      material: new THREE.MeshNormalMaterial(),
    },

    {
      position: [1.5, 0.5, -2],
      r: 0.8,
      geometry: new THREE.OctahedronGeometry(2),
      material: new THREE.MeshMatcapMaterial({ matcap: mix1 }),
    },
    {
      position: [-1, -0.5, -6],
      r: 0.5,
      geometry: new THREE.BoxBufferGeometry(2, 2, 2),
      material: new THREE.MeshMatcapMaterial({ matcap: blackMap }),
    },
    {
      position: [1.8, -2.6, 1],
      r: 0.5,
      geometry: new THREE.BoxBufferGeometry(2.1, 2.1, 2.1),
      material: new THREE.MeshNormalMaterial(),
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

const IntroCanvas = () => {
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
      <Suspense
        fallback={
          <Html center>
            <LoadingSpinner />
          </Html>
        }
      >
        <Geometries />
        <IntroTitle />
        <EffectComposer multisampling={0}></EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
};

export { IntroCanvas };
