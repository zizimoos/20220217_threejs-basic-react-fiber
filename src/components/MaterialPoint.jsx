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

// const Box = () => {
//   return (
//     <mesh>
//       <meshStandardMaterial color="hotpink" />
//       <boxGeometry args={[1, 1, 1]} />
//     </mesh>
//   );
// };

const Particles = () => {
  const thisBox = useRef();

  const count = 5000;
  const colormap = useLoader(TextureLoader, texture);

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      sizes[i] = Math.random() < 0.03 ? 6 : 3;
    }

    return [positions, sizes];
  }, []);

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
          size={0.02}
          color="yellow"
          alphaTest={0.1}
          map={colormap}
        />
      </points>
      <Aniamtion thisBox={thisBox} />
    </group>
  );
};

const MaterialPoint = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Material Point</Title>
        <Canvas camera={{ position: [-5, 2, 5] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={3}
          />
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default MaterialPoint;
