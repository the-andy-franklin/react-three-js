import * as THREE from 'three'
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import { Center, Scroll, ScrollControls, Text3D } from '@react-three/drei';
import Skybox from './components/Skybox';
import MyTorus from './components/MyTorus';

function App() {
  const frontMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const sideMaterail = new THREE.MeshBasicMaterial({ color: "grey" });
  
  return (
    <Canvas camera={{ position: [0, 0, 10], far: 2000,  }}>
      <ScrollControls distance={10}>
        <Scroll>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Skybox />
          <Cube />
          <group position={[0, -3, 0]}>
            <Center top>
              <Text3D
                font={'/fonts/Roboto.typeface.json'}
                material={[frontMaterial, sideMaterail]}
              >
                Scroll to animate
              </Text3D>
            </Center>
          </group>
          <MyTorus />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
