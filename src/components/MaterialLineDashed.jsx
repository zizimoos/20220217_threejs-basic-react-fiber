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

const Line = () => {
  const thisBox = useRef();

  const count = 5000;
  const colormap = useLoader(TextureLoader, texture);

  const vertices = [-1, 1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0];

  const [positions] = useMemo(() => {
    const positions = new Float32Array(vertices, 3);
    // const sizes = new Float32Array(count * 3);

    return [positions];
  }, [vertices]);

  return (
    <group ref={thisBox}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.2}
          color="yellow"
          alphaTest={0.1}
          map={colormap}
        />
      </points>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={positions.length / 3}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <lineDashedMaterial
          color="yellow"
          dashSize={0.2}
          gapSize={1}
          scale={1}
          computeLineDistances={true}
        />
      </line>
      <Aniamtion thisBox={thisBox} />
    </group>
  );
};

const MaterialLineDashed = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Material LineDashed</Title>
        <Canvas camera={{ position: [-5, 2, 5] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={3}
          />
          <Suspense fallback={null}>
            <Line />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default MaterialLineDashed;
