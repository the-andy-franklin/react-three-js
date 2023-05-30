import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useScroll } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const MyTorus = () => {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();
  
  useFrame(() => {
    meshRef.current?.setRotationFromAxisAngle(new Vector3(1, 1, 0), scroll.offset * 6.25)
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[25, 2]} />
      <meshBasicMaterial color={0xff8c69} />
    </mesh>
  );
};

export default MyTorus;