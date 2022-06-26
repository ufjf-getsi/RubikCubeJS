import React from "react";
import SingleSquare from "../SingleCube/SingleCube";

export default function CubeFace({ cubes, face }) {
  const elementCubes = [];
  for (let l = 0; l < cubes.length; l++) {
    for (let c = 0; c < cubes[0].length; c++) {
      elementCubes.push(<SingleCubes value={cubes[l][c]} key={face * 9 + l * 3 + c} />);
    }
  }
  const className = `cube-face face-${face}`;
  return (<div className={className}>{elementSquares}</div>);
}
