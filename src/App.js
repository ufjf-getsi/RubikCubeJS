import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import CubeFace from "./components/CubeFace/CubeFace";
import MoveButton from './components/MoveButton/MoveButton';

function App() {
  const FRONT = 0;
  const LEFT = 1;
  const RIGHT = 2;
  const BACK = 3;
  const TOP = 4;
  const BOTTOM = 5;

  let cube = setCubeInitialValues();
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */}
        <table>
          <tbody>
            <tr>
              <td colSpan="2" className="toRight">
                <CubeFace values={cube[TOP]} />
              </td>
            </tr>
            <tr>
              <td>
                <CubeFace values={cube[LEFT]} />
              </td><td>
                <CubeFace values={cube[FRONT]} />
              </td>
              <td>
                <CubeFace values={cube[RIGHT]} />
              </td>
              <td>
                <CubeFace values={cube[BACK]} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="toRight">
                <CubeFace values={cube[BOTTOM]} />
              </td>
            </tr>
          </tbody>
        </table>
        <table className="buttonTable">
          <tbody>
            <tr>
              <td><MoveButton value="L" /></td>
              <td><MoveButton value="R" /></td>
              <td><MoveButton value="U" /></td>
              <td><MoveButton value="D" /></td>
              <td><MoveButton value="F" /></td>
              <td><MoveButton value="B" /></td>
            </tr>
            <tr>
              <td><MoveButton value="l" /></td>
              <td><MoveButton value="r" /></td>
              <td><MoveButton value="u" /></td>
              <td><MoveButton value="d" /></td>
              <td><MoveButton value="f" /></td>
              <td><MoveButton value="b" /></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

function setCubeInitialValues() {
  let cube = [];
  for (let i = 0; i < 6; i++) {
    cube.push([i, i, i, i, i, i, i, i, i]);
  }
  return cube;
}