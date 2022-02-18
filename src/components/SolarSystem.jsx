import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";

const Title = styled.h1`
  padding: 10px;
`;

const CanvasContainer = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Aniamtion = (props) => {
  useFrame(({ clock }) => {
    props.thisBox.current.rotation.y =
      clock.getElapsedTime() * ((20 * Math.PI) / 180);
  });
  return null;
};

const SolarSystem = () => {
  const thisBox = useRef();

  const Sun = () => {
    return (
      <>
        <group ref={thisBox} position={[0, 0, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshPhongMaterial attach="material" color="orangered" />
          </mesh>
          <mesh>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshNormalMaterial wireframe />
          </mesh>
        </group>
        <Aniamtion thisBox={thisBox} />
      </>
    );
  };

  const Earth = () => {
    return (
      <>
        <group position={[3, 0, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.3, 16, 16]} />
            <meshPhongMaterial attach="material" color="darkgreen" />
          </mesh>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.3, 16, 16]} />
            <meshNormalMaterial wireframe />
          </mesh>
        </group>
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Title>Scene Graph : Solar System</Title>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <Sun />
            <Earth />

            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default SolarSystem;
