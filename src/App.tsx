// App.tsx
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import { OrbitControls } from '@react-three/drei';
import Skybox from './components/Skybox';
import Text3D from './components/Text3D';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Skybox />
      <Cube />
      <OrbitControls />
      <Text3D y={-2}>
        Click-and-drag to rotate
      </Text3D>
      <Text3D y={-3}>
        Scroll to zoom
      </Text3D>
    </Canvas>
  );
}

export default App;
