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

    // Create a pivot object and add the camera to it.
    const pivotObject = new Object3D();
    pivot.current = pivotObject;
    pivotObject.add(camera);

    // Add the pivot object to the scene. Now when the pivot object is rotated,
    // the camera will rotate around the pivot point.
    scene.add(pivotObject);
  }, [camera, scene]);

  // Rotate pivot over time
  useFrame(() => {
    if (scene) {
      scene.rotateY(0.001);
    }
  });

  return null; // No need to return anything as we're directly manipulating the scene
};

export default Skybox;
