import { Text } from '@react-three/drei';

const Text3D: React.FC<{ children: React.ReactNode, y: number }> = ({ children, y }) => {
  return (
    <Text
      color="white"
      anchorX="center"
      anchorY="middle"
      fontSize={1}
      position={[0, y, 0]}
    >
      {children}
    </Text>
  );
};

export default Text3D;