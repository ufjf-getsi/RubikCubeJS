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
  
  function doCubeMove(move){
    doMove(move, cube);
    setCube([...cube]);
  }
  const comandos = ['L','R','U','D','F','B','l','r','u','d','f','b'];
  const elementButtons = [];
  for (let b = 0; b < comandos.length; b++) {
    elementButtons.push(
      <button onClick={function click() { doCubeMove(comandos[b]); }}>{comandos[b]}</button>
    );    
  }

  return (
    <div className="App" >
      <header className="App-header">

        <OpenedCube cube={cube} />

        <hr />
        <div className='buttons'>
          {elementButtons}
        </div>

      </header>
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

