import React from "react";
import * as THREE from "three";
import { Extrude, OrbitControls } from "@react-three/drei";
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

const GeometryPartThreeExtrude = () => {
  const thisBox = useRef();
  const extrudeSettings = React.useMemo(
    () => ({
      steps: 2,
      depth: 6,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
      bevelOffset: 0,
      bevelSegments: 1,
    }),
    []
  );

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : ExtrudeGeometry</Title>
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
                <Extrude args={[shape, extrudeSettings]} />
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

export default GeometryPartThreeExtrude;
