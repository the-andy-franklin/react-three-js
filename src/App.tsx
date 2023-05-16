import { Canvas } from '@react-three/fiber';
import Cube from './components/Cube';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
}

export default App;