import React, { useRef } from "react";
import SingleCube from "../SingleCube/SingleCube";


export default function LargeCube({ faces }) {
    const mesh = useRef();
    return (
      <mesh ref={mesh}>
        <SingleCube position={[-1, 1, 1]} />
          <SingleCube position={[0, 1, 1]} />
          <SingleCube position={[1, 1, 1]} />

          <SingleCube position={[-1, 0, 1]} />
          <SingleCube position={[0, 0, 1]} />
          <SingleCube position={[1, 0, 1]} />

          <SingleCube position={[-1, -1, 1]} />
          <SingleCube position={[0, -1, 1]} />
          <SingleCube position={[1, -1, 1]} />

          <SingleCube position={[-1, 1, 0]} />
          <SingleCube position={[0, 1, 0]} />
          <SingleCube position={[1, 1, 0]} />

          <SingleCube position={[-1, 0, 0]} />
          <SingleCube position={[0, 0, 0]} />
          <SingleCube position={[1, 0, 0]} />

          <SingleCube position={[-1, -1, 0]} />
          <SingleCube position={[0, -1, 0]} />
          <SingleCube position={[1, -1, 0]} />

          <SingleCube position={[-1, 1, -1]} />
          <SingleCube position={[0, 1, -1]} />
          <SingleCube position={[1, 1, -1]} />

          <SingleCube position={[-1, 0, -1]} />
          <SingleCube position={[0, 0, -1]} />
          <SingleCube position={[1, 0, -1]} />

          <SingleCube position={[-1, -1, -1]} />
          <SingleCube position={[0, -1, -1]} />
          <SingleCube position={[1, -1, -1]} />
      </mesh>
    );
  }