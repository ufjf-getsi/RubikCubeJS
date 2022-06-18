import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function SingleCube({ position, faces }) {
  const mesh = useRef();
  return (
    <Canvas colormanagement>
      <OrbitControls />
      <gridHelper />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <mesh position={position} ref={mesh}>
          <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
          <meshLambertMaterial attach={`material-0`} color="red" />
          <meshLambertMaterial attach={`material-1`} color="darkOrange" />
          <meshLambertMaterial attach={`material-2`} color="white" />
          <meshLambertMaterial attach={`material-3`} color="yellow" />
          <meshLambertMaterial attach={`material-4`} color="green" />
          <meshLambertMaterial attach={`material-5`} color="blue" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}
