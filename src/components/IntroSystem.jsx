import { OrbitControls, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { Suspense, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { CameraHelper } from "three";

const Title = styled.h1`
  padding: 10px;
`;

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  aspects: window.innerWidth / window.innerHeight,
};

const Plane = () => {
  return (
    <group>
      <mesh rotation={[0, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[20, 20]} />
        <gridHelper args={[20, 20]} rotation={[0, 0, 0]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          side="doubleSide"
          visible={false}
        />

        <axesHelper args={[100]} />
      </mesh>
    </group>
  );
};

const Box = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { scale } = useSpring({
    scale: isClicked ? 1.5 : 1,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <animated.mesh
      scale={scale}
      onClick={() => setIsClicked(!isClicked)}
      position={[0, 1, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" visible={true} />
    </animated.mesh>
  );
};

function IntroSystem() {
  const BoxRef = useRef();
  const cameraRef = useRef();

  const [ref, camera] = useResource();

  return (
    <Canvas shadows>
      <group position={[0, -2, 0]}>
        <PerspectiveCamera
          ref={cameraRef}
          position={[0, 5, 1]}
          fov={75}
          aspect={sizes.aspects}
          near={0.1}
          far={1000}
        >
          <meshBasicMaterial />
        </PerspectiveCamera>

        <Box />
        <mesh ref={BoxRef} position={[0, 0, -3]}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color="red" visible={true} />
        </mesh>
        <Plane />
      </group>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <OrbitControls />
    </Canvas>
  );
}

export default IntroSystem;
