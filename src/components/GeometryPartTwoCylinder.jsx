import { OrbitControls } from "@react-three/drei";
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
  background-color: white;
  // @media (min-width: 768px) {
  //   width: 50vw;
  // }
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

const SampleCylinder = () => {
  const thisBox = useRef();

  return (
    <group ref={thisBox}>
      <mesh>
        <cylinderGeometry attach="geometry" args={[1, 1, 3, 16, 6, true]} />
        <meshPhongMaterial attach="material" color="#0x515151" />
      </mesh>
      <mesh>
        <cylinderGeometry attach="geometry" args={[1, 1, 3, 16, 6, true]} />
        <meshNormalMaterial wireframe />
      </mesh>
      <Aniamtion thisBox={thisBox} />
    </group>
  );
};

const GeometryPartTwoCylinder = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Two : cylinderGeometry</Title>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <SampleCylinder />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default GeometryPartTwoCylinder;
