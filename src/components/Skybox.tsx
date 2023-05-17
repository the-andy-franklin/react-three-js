// Skybox.tsx
import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CubeTextureLoader, Mesh } from 'three';

const Skybox: React.FC = () => {
  const mesh = useRef<Mesh>();
  const { scene } = useThree();

  // Load cubemap texture
  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape_Nebula.png'
    ]);

    scene.background = texture;
  }, [scene]);

  // Rotate skybox over time
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0005;
    }
  });

  return null; // no need to return anything as we're directly manipulating the scene's background
};

export default Skybox;
