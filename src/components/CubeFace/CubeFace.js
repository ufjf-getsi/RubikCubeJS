import React from "react";
import "./CubeFace.css";
import SingleSquare from "../SingleSquare/SingleSquare.js";

export default function CubeFace({ values }) {
  let rows = [];

  for (let i = 0; i < 3; i++) {
    let elemRow = [];

    for (let j = 0; j < 3; j++) {
      elemRow.push(<td key={j}><SingleSquare value={values[i][j]} key={j} /></td>);
    }

    rows.push(<tr key={i}>{elemRow}</tr>);
  }

  return (
    <div className="CubeFace">
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
