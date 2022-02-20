import * as THREE from "three";
import { OrbitControls, Tube } from "@react-three/drei";
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

class CutomSinCurve extends THREE.Curve {
  constructor(scale) {
    super();
    this.scale = scale;
  }
  getPoint(t) {
    const tx = t * 3 - 1.5;
    const ty = Math.sin(2 * Math.PI * t);
    const tz = 0;
    return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
  }
}
const path = new CutomSinCurve(1);

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

const GeometryPartThreeTube = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : Tube Geometry</Title>
        <Canvas camera={{ postion: [0, 0, 50] }}>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <group ref={thisBox}>
              <mesh>
                <Tube args={[path, 40, 0.3, 8, false]}>
                  <meshPhongMaterial attach="material" color="#f3f3f3" />
                </Tube>
                <Tube args={[path, 40, 0.3, 8, false]}>
                  <meshNormalMaterial wireframe />
                </Tube>
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

export default GeometryPartThreeTube;
