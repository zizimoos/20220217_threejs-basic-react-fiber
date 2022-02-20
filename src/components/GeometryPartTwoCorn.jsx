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

const GeometryPartTwoCorn = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Two : coneGeometry</Title>
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
                <coneGeometry
                  attach="geometry"
                  args={[2, 3, 16, 2, false, 0, Math.PI * 2]}
                />
                <meshPhongMaterial attach="material" color="#0x515151" />
              </mesh>
              <mesh>
                <coneGeometry
                  attach="geometry"
                  args={[2, 3, 16, 2, false, 0, Math.PI * 2]}
                />
                <meshNormalMaterial wireframe />
              </mesh>
            </group>
            <Aniamtion thisBox={thisBox} />
            <PerspectiveCamera
              manual
              aspect={1200 / 600}
              far={1000}
              near={0.1}
              fov={75}
              position={[0, 100, 10]}
              lookAt={[0, 0, 0]}
              onUpdate={(c) => c.updateProjectionMatrix()}
            />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default GeometryPartTwoCorn;
