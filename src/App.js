import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Color } from "three";

function Box() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });
  const texture_1 = useLoader(TextureLoader, "textures/dice_1.jpg");
  const texture_2 = useLoader(TextureLoader, "textures/dice_2.jpg");
  const texture_3 = useLoader(TextureLoader, "textures/dice_3.jpg");
  const texture_4 = useLoader(TextureLoader, "textures/dice_4.jpg");
  const texture_5 = useLoader(TextureLoader, "textures/dice_5.jpg");
  const texture_6 = useLoader(TextureLoader, "textures/dice_6.jpg");

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial map={texture_1} attachArray="material" />
      <meshStandardMaterial map={texture_2} attachArray="material" />
      <meshStandardMaterial map={texture_3} attachArray="material" />
      <meshStandardMaterial map={texture_4} attachArray="material" />
      <meshStandardMaterial map={texture_5} attachArray="material" />
      <meshStandardMaterial map={texture_6} attachArray="material" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas colorManagement>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
}
