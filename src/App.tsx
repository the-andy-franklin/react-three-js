import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import { Center, OrbitControls, Text3D } from '@react-three/drei';
import Skybox from './components/Skybox';

function App() {
  const frontMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const sideMaterail = new THREE.MeshBasicMaterial({ color: "grey" });
  
  return (
    <Canvas camera={{ position: [0, 0, 15], far: 2000 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Skybox />
      <Cube />
      <OrbitControls />
      <group position={[0, -3, 0]}>
        <Center top>
          <Text3D
            font={'/fonts/Roboto.typeface.json'}
            material={[frontMaterial, sideMaterail]}
          >
            Click-and-drag to rotate
          </Text3D>
        </Center>
      </group>
    </Canvas>
  );
}

export default App;
