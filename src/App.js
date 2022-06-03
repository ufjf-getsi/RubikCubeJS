import React, { useState } from 'react';
import "./App.css";
import OpenedCube from './components/OpenedCube/OpenedCube';
import { doMove } from './rubik.mjs';

// Constant
const DI = 3; // cube dimensions
const FRONT = 0;
const LEFT = 1;
const RIGHT = 2;
const BACK = 3;
const TOP = 4;
const BOTTOM = 5;


export default function App() {
  //const cube =  setCubeInitialValues();
  const [cube, setCube] = useState(setCubeInitialValues());

  function doCubeMove(move) {
    doMove(move, cube);
    setCube([...cube]);
  }
  const commands = ['L', 'R', 'U', 'D', 'F', 'B', 'l', 'r', 'u', 'd', 'f', 'b'];
  const elementButtons = [];
  for (let b = 0; b < commands.length; b++) {
    let character = commands[b];
    if (character === character.toLowerCase()) {
      character = character.toUpperCase();
      character += "'";
    }
    elementButtons.push(
      <button className="move-button" onClick={function click() { doCubeMove(character); }}>{character}</button>
    );
  }

  return (
    <div className="App" >
      <h1 className="title">Rubik's Cube</h1>

      <OpenedCube cube={cube} />

      <div className='buttons'>
        {elementButtons}
      </div>

    </div>
  );
}

function setCubeInitialValues() {
  let cube = [];
  for (let i = 0; i < 6; i++) {
    cube.push([[i, i, i], [i, i, i], [i, i, i]]);
  }
  return cube;
}

