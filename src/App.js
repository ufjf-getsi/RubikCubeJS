import logo from "./logo.svg";
import "./App.css";
import CubeeFace from "./components/CubeeFace/CubeeFace";

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
        <table>
          <tr>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
          </tr>
          <tr>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
          </tr>
          <tr>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
            <td>
              <CubeeFace valor={"R"} />
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
