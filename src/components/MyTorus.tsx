import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useScroll } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const MyTorus = () => {
  const meshRef = useRef<Mesh>(null);
  const data = useScroll();
  let previousOffset = 0;
  
  useFrame(() => {
    if (meshRef.current && data.delta > 0) {
      const currentOffset = data.offset;
      if (currentOffset > previousOffset) {
        meshRef.current.rotateOnAxis(new Vector3(1, 1, 0), data.delta * 6.25)
      } else if (currentOffset < previousOffset) {
        meshRef.current.rotateOnAxis(new Vector3(1, 1, 0), data.delta * -6.25)
      }
      previousOffset = currentOffset;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[25, 2]} />
      <meshBasicMaterial color={0xff8c69} />
    </mesh>
  );
};

export default MyTorus;