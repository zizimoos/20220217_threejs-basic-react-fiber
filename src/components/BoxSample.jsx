import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";

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

const SampleBox = () => {
  const thisBox = useRef();
  return (
    <>
      <mesh ref={thisBox}>
        <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
        <meshNormalMaterial attach="material" />
      </mesh>
      <Aniamtion thisBox={thisBox} />
    </>
  );
};

const BoxSample = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Box sample</Title>
        <Canvas camera={{ position: [-5, 2, 5] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={3}
          />
          <Suspense fallback={null}>
            <SampleBox />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default BoxSample;
