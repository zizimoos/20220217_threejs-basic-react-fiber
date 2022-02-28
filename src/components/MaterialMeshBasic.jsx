import * as THREE from "three";
import React, { useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../texture/disc.png";

const CanvasContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Title = styled.h1`
  padding: 10px;
  color: white;
`;
const Aniamtion = (props) => {
  useFrame(({ clock }) => {
    props.thisBox.current.rotation.x =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
    props.thisBox.current.rotation.z =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
  });
  return null;
};

const MaterialLine = () => {
  return (
    <>
      <CanvasContainer>
        <Title>meshBasicMaterial : 광원에 영향을 받지 않음</Title>
        <Canvas camera={{ position: [-5, 2, 5] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={3}
          />
          <Suspense fallback={null}>
            <mesh position={[-1, 0, 0]}>
              <boxGeometry attach="geometry" args={[1, 1, 1]} />
              <meshBasicMaterial
                attach="material"
                color="yellow"
                visible={true}
                transparent={true}
                opacity={0.5}
                depthTest={true}
                depthWrite={true}
                side={THREE.FrontSide}
                wireframe
              />
            </mesh>
            <mesh position={[1, 0, 0]}>
              <sphereGeometry attach="geometry" args={[0.7, 16, 16]} />
              <meshBasicMaterial attach="material" color="yellow" />
            </mesh>
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default MaterialLine;
