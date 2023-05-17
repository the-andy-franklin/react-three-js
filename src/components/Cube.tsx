import { useRef, useMemo, useEffect } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);

  const texture = useMemo(() => new TextureLoader().load('andy copy.jpeg'), [])

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 16;
    }
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
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