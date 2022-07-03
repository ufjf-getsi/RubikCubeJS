import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { doMove } from "./rubik.mjs";
import OpenedCube from "./components/OpenedCube/OpenedCube";
import LargeCube from "./components/LargeCube/LargeCube.js";
import "./App.css";

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
      <Canvas colormanagement>
        <OrbitControls />
        <Stars fade depth={1.2} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <LargeCube cube={cube} />
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
