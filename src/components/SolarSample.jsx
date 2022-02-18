import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import planetData from "./planetData";
import "./styles.css";

export default function App() {
  return (
    <>
      <a
        href="https://medium.com/geekculture/build-3d-apps-with-react-animated-solar-system-part-2-1186a5c8bd1"
        className="article-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Step by step guide to how I build this
      </a>
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
    </>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  );
}

function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const planetRef = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}
