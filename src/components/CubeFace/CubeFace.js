import React from "react";
import "./CubeFace.css";
import SingleSquare from "../SingleSquare/SingleSquare.js";

export default function CubeFace({ squares, face }) {
  const elementSquares = [];
  for (let l = 0; l < squares.length; l++) {
    for (let c = 0; c < squares[0].length; c++) {
      elementSquares.push(
        <SingleSquare value={squares[l][c]} key={face * 9 + l * 3 + c} />
      );
    }
  }
  const className = `cube-face face-${face}`;
  return <div className={className}>{elementSquares}</div>;
}
