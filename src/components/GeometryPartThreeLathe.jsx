import * as THREE from "three";
import { Lathe, OrbitControls } from "@react-three/drei";
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

const points = [];
for (let i = 0; i < 10; i++) {
  points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * 0.8));
  // const x = i * 0.1;
  // const y = Math.sin(x);
  // const z = Math.cos(x);
  // points.push(new THREE.Vector3(x, y, z));
}

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

const GeometryPartThreeLathe = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : Lathe Geometry</Title>
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
                <Lathe args={[points]}>
                  <meshPhongMaterial attach="material" color="#f3f3f3" />
                </Lathe>
                <Lathe args={[points]}>
                  <meshNormalMaterial wireframe />
                </Lathe>
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

export default GeometryPartThreeLathe;
