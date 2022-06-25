import React, { useRef } from "react";

export default function SingleCube({ position, value }) {
  const mesh = useRef();

  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach={`material-${value}`} color="red" />
      <meshLambertMaterial attach={`material-${value}`} color="darkOrange" />
      <meshLambertMaterial attach={`material-${value}`} color="white" />
      <meshLambertMaterial attach={`material-${value}`} color="yellow" />
      <meshLambertMaterial attach={`material-${value}`} color="green" />
      <meshLambertMaterial attach={`material-${value}`} color="blue" />
    </mesh>
  );
}