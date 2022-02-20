import React from "react";
import { OrbitControls, Text } from "@react-three/drei";
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

const GeometryPartThreeText = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : TextGeometry</Title>
        <Canvas camera={{ postion: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <group ref={thisBox}>
              <mesh>
                <Text scale={[10, 10, 10]}>HELLO WORLD</Text>
                <meshNormalMaterial wireframe />
              </mesh>
            </group>
            <Aniamtion thisBox={thisBox} />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default GeometryPartThreeText;
