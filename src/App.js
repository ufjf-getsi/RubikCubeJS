import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { doMove } from "./rubik.mjs";
import OpenedCube from "./components/OpenedCube/OpenedCube";
import LargeCube from "./components/LargeCube/LargeCube.js";
import "./App.css";

export default function App() {
  const [cube, setCube] = useState(setCubeInitialValues());
  const [moveHistory, setMoveHistory] = useState([]);
  const [moveHistoryIndex, setMoveHistoryIndex] = useState(-1);

  function doCubeMove(move) {
    doMove(move, cube);
    setCube([...cube]);
    if (moveHistory.length === moveHistoryIndex + 1) moveHistory.push(move);
    else moveHistory[moveHistoryIndex + 1] = move;
    setMoveHistory([...moveHistory]);
    setMoveHistoryIndex(moveHistoryIndex + 1);
  }
  const reset = (
    <button
      className="reset-button"
      key={"reset"}
      onClick={function click() {
        setCube([...setCubeInitialValues()]);
      }}
    >
      {"Reset"}
    </button>
  );
  const undo = (
    <button
      className="undo-button"
      key={"undo"}
      onClick={function click() {
        undoMove();
      }}
    >
      {"Undo"}
    </button>
  );
  const redo = (
    <button
      className="redo-button"
      key={"redo"}
      onClick={function click() {
        redoMove();
      }}
    >
      {"Redo"}
    </button>
  );
  function redoMove() {
    if (moveHistoryIndex > moveHistory.length - 2) return;
    const nextMove = moveHistory[moveHistoryIndex + 1];
    doMove(nextMove, cube);
    setCube([...cube]);
    setMoveHistoryIndex(moveHistoryIndex + 1);
  }
  function undoMove() {
    if (moveHistoryIndex < 0) return;
    else if (moveHistoryIndex == 0) {
      setCube([...setCubeInitialValues()]);
    } else {
      const lastMove = moveHistory[moveHistoryIndex];
      if (lastMove == lastMove.toLowerCase()) {
        doMove(lastMove.toUpperCase(), cube);
        setCube([...cube]);
      } else {
        doMove(lastMove.toLowerCase(), cube);
        setCube([...cube]);
      }
    }
    setMoveHistoryIndex(moveHistoryIndex - 1);
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
      <div className="cube3d">
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
      </div>
      <OpenedCube cube={cube} />

      <div className="controls">
        {reset}
        <div className="move-buttons">{elementButtons}</div>
        {undo}
        {redo}
      </div>
      <div className="chat">
        <input type="text" /> <button> enviar </button>
      </div>
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
