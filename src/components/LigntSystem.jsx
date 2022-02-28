import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";
import * as THREE from "three";

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
  // @media (min-width: 768px) {
  //   width: 50vw;
  // }
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
      clock.getElapsedTime() * ((10 * Math.PI) / 180);
  });
  return null;
};

const SsphereAniamtion = (props) => {
  useFrame(({ clock }) => {
    props.Ssphere.current.rotation.y =
      -clock.getElapsedTime() * ((100 * Math.PI) / 180);
  });
  return null;
};

const LigntSystem = () => {
  const thisBox = useRef();
  const EarthBox = useRef();
  const Ssphere = useRef();

  const Ground = () => {
    return (
      <>
        <group ref={thisBox} position={[0, 0, 0]}>
          <mesh rotation={[THREE.Math.degToRad(-90), 0, 0]}>
            <planeGeometry attach="geometry" args={[10, 10]} />
            <meshStandardMaterial
              attach="material"
              color="#2c3e50"
              roughness={0.5}
              metalness={0.5}
              side={THREE.DoubleSide}
            />
          </mesh>
          <Earth />
        </group>
        <Aniamtion thisBox={thisBox} />
      </>
    );
  };

  const Earth = () => {
    const torusArray = [];
    for (let i = 0; i < 8; i++) {
      torusArray.push(
        <group rotation={[0, (-Math.PI / 4) * i, 0]} key={i}>
          <TorusGeometry />
        </group>
      );
    }
    return (
      <>
        <group ref={EarthBox} position={[0, 0, 0]}>
          <mesh rotation={[THREE.Math.degToRad(-90), 0, 0]}>
            <sphereGeometry
              attach="geometry"
              args={[1.5, 32, 32, 0, Math.PI]}
            />
            <meshStandardMaterial
              attach="material"
              color="#ffffff"
              roughness={0.1}
              metalness={0.2}
            />
          </mesh>
          {torusArray.map((item) => item)}
          <group ref={Ssphere}>
            <SmallSphere />
          </group>
          <SsphereAniamtion Ssphere={Ssphere} />
        </group>
        <EarthAniamtion EarthBox={EarthBox} />
      </>
    );
  };

  const TorusGeometry = () => {
    return (
      <>
        <group position={[4, 0.5, 0]}>
          <mesh>
            <torusGeometry attach="geometry" args={[0.4, 0.1, 16, 100]} />
            <meshStandardMaterial
              attach="material"
              color="#9b59b6"
              roughness={0.5}
              metalness={0.9}
            />
          </mesh>
        </group>
      </>
    );
  };

  const SmallSphere = () => {
    return (
      <>
        <group position={[4, 0.5, 0]}>
          <mesh>
            <sphereGeometry attach="geometry" args={[0.3, 16, 16]} />
            <meshStandardMaterial
              attach="material"
              color="red"
              roughness={0.2}
              metalness={0.5}
            />
          </mesh>
        </group>
      </>
    );
  };

  return (
    <>
      <CanvasContainer>
        <Title>Light</Title>
        <Canvas camera={{ position: [-1, 5, 5] }}>
          <Suspense fallback={null}>
            <fog attach="fog" args={["white", 0, 40]} />
            <ambientLight intensity={0.4} />
            <directionalLight
              castShadow
              position={[2.5, 8, 5]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <rectAreaLight
              color="azure"
              intensity={10}
              position={[0, 5, 0]}
              rotation={[THREE.Math.degToRad(-90), 0, 0]}
              width={10}
              height={1}
            />

            <Ground />
            <Stars count={1000} factor={3} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default LigntSystem;
