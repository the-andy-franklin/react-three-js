import { useRef, useMemo, useEffect } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame } from '@react-three/fiber';
import andy from '/andy copy.jpeg'

const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const texture = useMemo(() => new TextureLoader().load(andy), [])

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 16;
    }
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = meshRef.current.rotation.x += 0.01;
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