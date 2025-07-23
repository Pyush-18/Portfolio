'use client';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

export default function Scene() {
  return (
    <Canvas className='absolute inset-0 z-0' camera={{ position: [0, 0, 5], fov: 30 }}>
      <ambientLight />
      <Sparkles
        count={100}
        speed={1.5}
        opacity={0.8}
        color="#ffffff"
        size={2}
        scale={[6, 6, 6]}
        noise={[1, 1, 1]}
      />
    </Canvas>
  );
}
