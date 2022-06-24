import React, { useRef } from "react";

export default function SingleCube({ position, value }) {
  const mesh = useRef();
  const className = `singeFaceColor${value}`;
  return (
    <mesh position={position} className={className} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
      <meshLambertMaterial attach={`singeFaceColor${value}`} />
    </mesh>
  );
}