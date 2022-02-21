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

const x = -2.5;
const y = -5;
shape.moveTo(x + 2.5, y + 2.5);
shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
shape.closePath();

// 	const settings = {
// 		steps: 4,
// 		depth: 4,
// 		bevelEnable: true,
// 		bevelThickness: 0.5,
// 		bevelSize: 0.3,
// 		bevelSegments: 5,
// 	};

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

const ShapeHeart = () => {
  const thisBox = useRef();
  return (
    <group ref={thisBox}>
      <mesh>
        <shapeBufferGeometry attach="geometry" args={[shape]} />
        <meshPhongMaterial attach="material" color="#0x515151" />
      </mesh>
      <mesh>
        <shapeBufferGeometry attach="geometry" args={[shape]} />
        <meshNormalMaterial wireframe />
      </mesh>
      <Aniamtion thisBox={thisBox} />
    </group>
  );
};

const GeometryPartThreeShapeHeart = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : ShapeHeart Geometry</Title>
        <Canvas camera={{ position: [-5, 2, 10] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={3}
          />
          <Suspense fallback={null}>
            <ShapeHeart />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default GeometryPartThreeShapeHeart;
