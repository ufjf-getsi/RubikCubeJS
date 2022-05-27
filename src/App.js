import logo from "./logo.svg";
import "./App.css";
import CubeFace from "./components/CubeFace/CubeFace";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
              <CubeFace valor={"R"} />
      </header>
    </div>
  );
}

export default App;
