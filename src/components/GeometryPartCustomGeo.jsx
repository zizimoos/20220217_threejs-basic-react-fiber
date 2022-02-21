import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "../texture/uv_grid_opengl.jpg";
import { BoxHelper } from "three";

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

const CustomGeo = () => {
  const thisBox = useRef();

  const colormap = useLoader(TextureLoader, texture);
  useHelper(thisBox, BoxHelper, "cyan");

  return (
    <>
      <group ref={thisBox}>
        <mesh>
          <boxGeometry attach="geometry" args={[3, 3, 3]} />
          <meshStandardMaterial map={colormap} />
        </mesh>
        <Aniamtion thisBox={thisBox} />
      </group>
    </>
  );
};

const GeometryPartCustomGeo = () => {
  return (
    <>
      <CanvasContainer>
        <Title>Geomeometry Part Three : Custom Geometry</Title>
        <Canvas camera={{ position: [-5, 2, 5] }}>
          <ambientLight />
          <directionalLight
            position={[10, 10, 10]}
            color="white"
            intensity={0.5}
          />
          <Suspense fallback={null}>
            <CustomGeo />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </CanvasContainer>
    </>
  );
};

export default GeometryPartCustomGeo;
