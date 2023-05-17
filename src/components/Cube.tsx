import { useRef, useMemo } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);

  const texture = useMemo(() => new TextureLoader().load('andy copy.jpeg'), [])

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Cube;