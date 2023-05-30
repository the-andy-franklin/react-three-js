import React, { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import { useScroll } from '@react-three/drei';

const Skybox: React.FC = () => {
  const { scene, camera } = useThree();
  const scroll = useScroll();
  let previousOffset = 0; // intentionally not using useState here

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape.png',
      '/Starscape.png', '/Starscape_Nebula.png'
    ]);

    scene.background = texture;
  }, [camera, scene]);

  useFrame(() => {
    if (scroll.delta > 0) {
      if (scroll.offset > previousOffset) camera.translateZ(scroll.delta * 128);
      if (scroll.offset < previousOffset && camera.position.z > 10) camera.translateZ(scroll.delta * -128);
      previousOffset = scroll.offset;
    }
  });

  return null; 
};

export default Skybox;
