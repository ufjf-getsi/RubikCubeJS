import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import OpenedCube from "./components/OpenedCube/OpenedCube";
import { doMove } from "./rubik.mjs";
import "./App.css";

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
  //const cube =  setCubeInitialValues();
  const [cube, setCube] = useState(setCubeInitialValues());

  function doCubeMove(move) {
    doMove(move, cube);
    setCube([...cube]);
  }
  const commands = ["L", "R", "U", "D", "F", "B", "l", "r", "u", "d", "f", "b"];
  const elementButtons = [];
  for (let b = 0; b < commands.length; b++) {
    let character = commands[b];
    if (character === character.toLowerCase()) {
      character = character.toUpperCase();
      character += "'";
    }
    elementButtons.push(
      <button
        className="move-button"
        key={b}
        onClick={function click() {
          doCubeMove(commands[b]);
        }}
      >
        {character}
      </button>
    );
  }

  return (
    <div className="App">
      <h1 className="title">Rubik's Cube</h1>
      <Canvas colorManagement>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>

      <OpenedCube cube={cube} />

      <div className="buttons">{elementButtons}</div>
    </div>
  );
}

function setCubeInitialValues() {
  let cube = [];
  for (let i = 0; i < 6; i++) {
    cube.push([
      [i, i, i],
      [i, i, i],
      [i, i, i],
    ]);
  }
  return cube;
}
