import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useScroll } from '@react-three/drei';
import { useFrame } from 'react-three-fiber';

const MyTorus = () => {
  const meshRef = useRef<Mesh>(null);
  const scroll = useScroll();
  let previousOffset = 0;
  
  useFrame(() => {
    if (meshRef.current) {
      if (scroll.delta > 0) {
        if (scroll.offset > previousOffset) {
          meshRef.current.rotateOnAxis(new Vector3(1, 1, 0), scroll.delta * 6.25)
        } else if (scroll.offset < previousOffset) {
          meshRef.current.rotateOnAxis(new Vector3(1, 1, 0), scroll.delta * -6.25)
        }
        previousOffset = scroll.offset;
      }

      if (scroll.delta === 0) {
        if (meshRef.current.rotation.x !== 0) meshRef.current.rotateX(-meshRef.current.rotation.x / 24)
        if (meshRef.current.rotation.y !== 0) meshRef.current.rotateY(-meshRef.current.rotation.y / 24)
        if (meshRef.current.rotation.z !== 0) meshRef.current.rotateZ(-meshRef.current.rotation.z / 24)
      }

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