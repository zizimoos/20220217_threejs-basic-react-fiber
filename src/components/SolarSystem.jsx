import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
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

const EarthAniamtion = (props) => {
  useFrame(({ clock }) => {
    props.EarthBox.current.rotation.y =
      clock.getElapsedTime() * ((100 * Math.PI) / 180);
  });
  return null;
};

const MoonAniamtion = (props) => {
  useFrame(({ clock }) => {
    props.MoonBox.current.rotation.y =
      clock.getElapsedTime() * ((200 * Math.PI) / 180);
  });
  return null;
};

const SolarSystem = () => {
  const thisBox = useRef();
  const EarthBox = useRef();
  const MoonBox = useRef();

  const Sun = () => {
    return (
      <>
        <group ref={thisBox} position={[0, 0, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[1, 16, 16]} />
            <meshPhongMaterial attach="material" color="orangered" />
            <Earth />
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
        <group ref={EarthBox} position={[3, 0, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.3, 16, 16]} />
            <meshPhongMaterial attach="material" color="darkgreen" />
            <Moon />
          </mesh>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.3, 16, 16]} />
            <meshNormalMaterial wireframe />
          </mesh>
        </group>
        <EarthAniamtion EarthBox={EarthBox} />
      </>
    );
  };

  const Moon = () => {
    return (
      <>
        <group ref={MoonBox} position={[0.5, 0, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.05, 16, 16]} />
            <meshPhongMaterial attach="material" color="honeydew" />
          </mesh>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.1, 16, 16]} />
            <meshNormalMaterial wireframe />
          </mesh>
        </group>
        <MoonAniamtion MoonBox={MoonBox} />
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Title>Scene Graph : Solar System</Title>
        <Canvas camera={{ position: [-1, 5, 5] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <Sun />
            <Stars count={1000} factor={3} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default SolarSystem;
