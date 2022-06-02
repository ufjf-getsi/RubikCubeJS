import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import CubeFace from "./components/CubeFace/CubeFace";
import MoveButton from './components/MoveButton/MoveButton';
import OpenedCube from './components/OpenedCube/OpenedCube';

// Constant
const DI = 3; // cube dimensions
const FRONT = 0;
const LEFT = 1;
const RIGHT = 2;
const BACK = 3;
const TOP = 4;
const BOTTOM = 5;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cube: setCubeInitialValues(),
    };
    //const [cube, setCube] = useState(setCubeInitialValues());
  }

  handleClick(val) {
    let cube = this.state.cube;
    switch (val) {
      case "l":
        slideCol(0, cube[FRONT], cube[TOP], cube[BACK], cube[BOTTOM]);
        rotateFaceCounterClockwise(cube[LEFT]);
        console.log(cube[FRONT]);
        this.state = {
          cube: cube,
        }
        break;

      default:
        break;
    }
  }

  renderCube(val) {
    return (
      <CubeFace squares={this.state.cube[val]} />
    );
  }

  renderButton(val) {
    return (
      <td><MoveButton value={val} onClick={() => this.handleClick(val)} /></td>
    );
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">

          <OpenedCube cube={this.state.cube}/>

          <hr />
         
          <table className="buttonTable">
            <tbody>
              <tr>
                {this.renderButton("L")}
                {this.renderButton("R")}
                {this.renderButton("U")}
                {this.renderButton("D")}
                {this.renderButton("F")}
                {this.renderButton("B")}
              </tr>
              <tr>
                {this.renderButton("l")}
                {this.renderButton("r")}
                {this.renderButton("u")}
                {this.renderButton("d")}
                {this.renderButton("f")}
                {this.renderButton("b")}
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;

function setCubeInitialValues() {
  let cube = [];
  for (let i = 0; i < 6; i++) {
    cube.push([[i, i, i], [i, i, i], [i, i, i]]);
  }
  return cube;
}

function slideRow(row, face1, face2, face3, face4) {
  let newRow2 = [];
  let newRow3 = [];
  for (let c = 0; c < DI; c++) {
    newRow2[c] = face1[row][c];
  }
  for (let c = 0; c < DI; c++) {
    face1[row][c] = face4[row][c];
    face4[row][c] = face3[row][DI - 1 - c];
    newRow3[c] = face2[row][DI - 1 - c];
  }
  for (let c = 0; c < DI; c++) {
    face2[row][c] = newRow2[c];
    face3[row][c] = newRow3[c];
  }
}

function slideRowInverted(row, face1, face2, face3, face4) {
  let newRow4 = [];
  let newRow3 = [];
  for (let c = 0; c < DI; c++) {
    newRow4[c] = face1[row][c];
  }
  for (let c = 0; c < DI; c++) {
    face1[row][c] = face2[row][c];
    face2[row][c] = face3[row][DI - 1 - c];
    newRow3[c] = face4[row][DI - 1 - c];
  }
  for (let c = 0; c < DI; c++) {
    face4[row][c] = newRow4[c];
    face3[row][c] = newRow3[c];
  }
}

function slideCol(col, face1, face2, face3, face4) {
  let newCol2 = [];
  let newCol3 = [];
  for (let r = 0; r < DI; r++) {
    newCol2[r] = face1[r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = face4[r][col];
    face4[r][col] = face3[DI - 1 - r][col];
    newCol3[r] = face2[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face2[r][col] = newCol2[r];
    face3[r][col] = newCol3[r];
  }
}

function slideColInverted(col, face1, face2, face3, face4) {
  let newCol4 = [];
  let newCol3 = [];
  for (let r = 0; r < DI; r++) {
    newCol4[r] = face1[r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = face2[r][col];
    face2[r][col] = face3[DI - 1 - r][col];
    newCol3[r] = face4[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face4[r][col] = newCol4[r];
    face3[r][col] = newCol3[r];
  }
}

function slideSideCol(col, face1, face2, face3, face4) {
  let newCol1 = [];
  let newCol2 = [];
  let newCol3 = [];
  let newCol4 = [];
  for (let r = 0; r < DI; r++) {
    newCol1[r] = face4[col][DI - 1 - r];
    newCol2[r] = face1[r][col];
    newCol3[r] = face2[DI - 1 - col][DI - 1 - r];
    newCol4[r] = face3[r][DI - 1 - col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = newCol1[r];
    face2[DI - 1 - col][r] = newCol2[r];
    face3[r][DI - 1 - col] = newCol3[r];
    face4[col][r] = newCol4[r];
  }
}

function slideSideColInverted(col, face1, face2, face3, face4) {
  let newCol1 = [];
  let newCol2 = [];
  let newCol3 = [];
  let newCol4 = [];
  for (let r = 0; r < DI; r++) {
    newCol1[r] = face2[DI - 1 - col][r];
    newCol2[r] = face3[DI - 1 - r][DI - 1 - col];
    newCol3[r] = face4[col][r];
    newCol4[r] = face1[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = newCol1[r];
    face2[DI - 1 - col][r] = newCol2[r];
    face3[r][DI - 1 - col] = newCol3[r];
    face4[col][r] = newCol4[r];
  }
}

function rotateFaceClockwise(face) {
  let newFace = [[], [], []];
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      newFace[r][c] = face[DI - 1 - c][r];
    }
  }
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      face[r][c] = newFace[r][c];
    }
  }
}

function rotateFaceCounterClockwise(face) {
  let newFace = [[], [], []];
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      newFace[r][c] = face[c][DI - 1 - r];
    }
  }
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      face[r][c] = newFace[r][c];
    }
  }
}