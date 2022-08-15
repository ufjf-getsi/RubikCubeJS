import React, { useRef } from "react";

export default function SingleCube({ faces }) {
  const mesh = useRef();

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach={`material-0`} color="red" />
      <meshLambertMaterial attach={`material-1`} color="darkOrange" />
      <meshLambertMaterial attach={`material-2`} color="white" />
      <meshLambertMaterial attach={`material-3`} color="yellow" />
      <meshLambertMaterial attach={`material-4`} color="green" />
      <meshLambertMaterial attach={`material-5`} color="blue" />
    </mesh>
  );
}
