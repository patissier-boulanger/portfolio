import React, { Suspense, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { a, useTransition } from "@react-spring/three";
import { EffectComposer } from "@react-three/postprocessing";

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
  const [blackMap] = useLoader(THREE.TextureLoader, ["/texture/black1.png"]);

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
        <EffectComposer multisampling={0}></EffectComposer>
      </Suspense>
      <Rig />
    </Canvas>
  );
};

export { IntroduceCanvas };
