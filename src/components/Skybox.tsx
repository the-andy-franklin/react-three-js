// Skybox.tsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, BackSide, Mesh } from 'three';

const Skybox: React.FC = () => {
  const mesh = useRef<Mesh>(null);
  const texture = useLoader(TextureLoader, '/Starscape.png');

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </mesh>
  );
};

export default Skybox;
