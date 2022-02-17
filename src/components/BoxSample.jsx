import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Title = styled.h1`
  padding: 10px;
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

const BoxSample = () => {
  const thisBox = useRef();

  return (
    <>
      <CanvasContainer>
        <Title>Box sample</Title>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight
              position={[10, 10, 10]}
              color="#fffffff"
              intensity={3}
            />
            <mesh ref={thisBox}>
              <boxGeometry attach="geometry" args={[2.5, 2.5, 2.5]} />
              <meshPhongMaterial attach="material" color="darkblue" />
            </mesh>
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

export default BoxSample;
