import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CubeTextureLoader, Object3D } from 'three';
import { useScroll } from '@react-three/drei';

const Skybox: React.FC = () => {
  const { scene, camera } = useThree();
  const pivot = useRef<Object3D>();
  const data = useScroll();
  let previousOffset = 0;

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
    scene.rotateY(data.delta * 0.1);

    const currentOffset = data.offset;
    if (currentOffset > previousOffset) {
      if (data.delta > 0) {
        camera.translateZ(data.delta * 128)
      }
    } else if (currentOffset < previousOffset) {
      if (data.delta > 0) {
        if (camera.position.z > 10) {
          camera.translateZ(data.delta * -128)
        }
      }
    }
    previousOffset = currentOffset;
  });

  return null; 
};

export default Skybox;
