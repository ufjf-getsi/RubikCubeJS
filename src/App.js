import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import CubeFace from "./components/CubeFace/CubeFace";

function App() {
  let valores = ["R", "R", "R", "R", "R", "Y", "R", "R", "R"];
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
        <CubeFace valores={valores} />
      </header>
    </div>
  );
}

export default App;
