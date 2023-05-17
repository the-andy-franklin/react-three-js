// App.tsx
import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import { OrbitControls } from '@react-three/drei';
import Skybox from './components/Skybox';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Skybox />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
