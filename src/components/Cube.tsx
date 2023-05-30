import { useRef, useMemo, useEffect } from 'react';
import { Mesh, TextureLoader } from 'three';
import andy from '/andy copy.jpeg'
import { useScroll } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const texture = useMemo(() => new TextureLoader().load(andy), []);
  const scroll = useScroll();

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.PI / 16;
    }
  }, []);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = scroll.offset * 6.25;
      meshRef.current.rotation.y = scroll.offset * 6.25;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Cube;