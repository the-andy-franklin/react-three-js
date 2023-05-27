import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CubeTextureLoader, Object3D } from 'three';

const Skybox: React.FC = () => {
  const { scene, camera } = useThree();
  const pivot = useRef<Object3D>();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape_Nebula.png'
    ]);

    scene.background = texture;

    const pivotObject = new Object3D();
    pivot.current = pivotObject;
    pivotObject.add(camera);
    scene.add(pivotObject);
  }, [camera, scene]);

  useFrame(() => {
    scene.rotateY(0.001);
  });

  return null; 
};

export default Skybox;
