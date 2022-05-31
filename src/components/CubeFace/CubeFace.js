import React from "react";
import "./CubeFace.css";
import SingleSquare from "../SingleSquare/SingleSquare.js";

export default function CubeFace({ valores }) {

  let linhas = [];

  for (let i = 0; i < 3; i++) {
    let elemLin = [];

    for (let j = i * 3; j < (i * 3) + 3; j++) {
      elemLin.push(<td key={j}><SingleSquare valor={valores[j]} key={j} /></td>);
    }

    linhas.push(<tr key={i}>{elemLin}</tr>);
  }

  return (
    <div className="CubeFace">
      <table>
        <tbody>
          {linhas}
        </tbody>
      </table>
    </div>
  );
}
