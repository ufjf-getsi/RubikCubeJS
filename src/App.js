import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import CubeFace from "./components/CubeFace/CubeFace";

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
                <CubeFace valores={cube[TOP]} />
              </td>
            </tr>
            <tr>
              <td>
                <CubeFace valores={cube[LEFT]} />
              </td><td>
                <CubeFace valores={cube[FRONT]} />
              </td>
              <td>
                <CubeFace valores={cube[RIGHT]} />
              </td>
              <td>
                <CubeFace valores={cube[BACK]} />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="toRight">
                <CubeFace valores={cube[BOTTOM]} />
              </td>
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