import React, { useRef } from "react";

export default function SingleCube({ position, colors }) {
  const mesh = useRef();
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach={`material-0`} color={colors[0]} />
      <meshLambertMaterial attach={`material-1`} color={colors[1]} />
      <meshLambertMaterial attach={`material-2`} color={colors[2]} />
      <meshLambertMaterial attach={`material-3`} color={colors[3]} />
      <meshLambertMaterial attach={`material-4`} color={colors[4]} />
      <meshLambertMaterial attach={`material-5`} color={colors[5]} />
    </mesh>
  );
}