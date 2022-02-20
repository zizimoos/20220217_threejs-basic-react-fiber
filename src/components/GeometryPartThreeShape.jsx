import * as THREE from "three";
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

const shape = new THREE.Shape();
shape.moveTo(1, 1);
shape.lineTo(1, -1);
shape.lineTo(-1, -1);
shape.lineTo(-1, 1);
shape.closePath();

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

const GeometryPartThreeShape = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : ShapeGeometry</Title>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <group ref={thisBox}>
              <mesh>
                <shapeBufferGeometry attach="geometry" args={[shape]} />
                <meshPhongMaterial attach="material" color="#0x515151" />
              </mesh>
              <mesh>
                <shapeBufferGeometry attach="geometry" args={[shape]} />
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

export default GeometryPartThreeShape;
