import React, { useRef } from "react";
import SingleCube from "../SingleCube/SingleCube";

// constantes de cores
const FRONT = 0;
const LEFT = 1;
const RIGHT = 2;
const BACK = 3;
const TOP = 4;
const BOTTOM = 5;

//constantes de posição
/*
  right 0
  left 1
  top 2
  bottom 3
  front 4
  back 5
*/

function searchColor(value) {
  switch (value) {
    case 0:
      return "#2ECC71";

    case 1:
      return "#E67E22";

    case 2:
      return "#C0392B";

    case 3:
      return "#3498DB";

    case 4:
      return "#ECF0F1";

    case 5:
      return "#F1C40F";

    default:
      break;
  }
}

export default function LargeCube({ cube }) {
  const mesh = useRef();
  const colorArray = [
    [
      "#000000",
      searchColor(cube[LEFT][0][2]),
      searchColor(cube[TOP][2][0]),
      "#000000",
      searchColor(cube[FRONT][0][0]),
      "#000000",
    ],
    [
      "#000000",
      "#000000",
      searchColor(cube[TOP][2][1]),
      "#000000",
      searchColor(cube[FRONT][0][1]),
      "#000000",
    ],
    [
      searchColor(cube[RIGHT][0][0]),
      "#000000",
      searchColor(cube[TOP][2][2]),
      "#000000",
      searchColor(cube[FRONT][0][2]),
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][1][2]),
      "#000000",
      "#000000",
      searchColor(cube[FRONT][1][0]),
      "#000000",
    ],
    [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[FRONT][1][1]),
      "#000000",
    ],
    [
      searchColor(cube[RIGHT][1][0]),
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[FRONT][1][2]),
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][2][2]),
      "#000000",
      searchColor(cube[BOTTOM][0][0]),
      searchColor(cube[FRONT][2][0]),
      "#000000",
    ],
    [
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][0][1]),
      searchColor(cube[FRONT][2][1]),
      "#000000",
    ],
    [
      searchColor(cube[RIGHT][2][0]),
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][0][2]),
      searchColor(cube[FRONT][2][2]),
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][0][1]),
      searchColor(cube[TOP][1][0]),
      "#000000",
      "#000000",
      "#000000",
    ],
    [
      "#000000",
      "#000000",
      searchColor(cube[TOP][1][1]),
      "#000000",
      "#000000",
      "#000000",
    ],
    [
      searchColor(cube[RIGHT][0][1]),
      "#000000",
      searchColor(cube[TOP][1][2]),
      "#000000",
      "#000000",
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][1][1]),
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
    ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
    [
      searchColor(cube[RIGHT][1][1]),
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][2][1]),
      "#000000",
      searchColor(cube[BOTTOM][1][0]),
      "#000000",
      "#000000",
    ],
    [
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][1][1]),
      "#000000",
      "#000000",
    ],
    [
      searchColor(cube[RIGHT][2][1]),
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][1][2]),
      "#000000",
      "#000000",
    ],
    [
      "#000000",
      searchColor(cube[LEFT][0][0]),
      searchColor(cube[TOP][0][0]),
      "#000000",
      "#000000",
      searchColor(cube[BACK][0][0]),
    ],
    [
      "#000000",
      "#000000",
      searchColor(cube[TOP][0][1]),
      "#000000",
      "#000000",
      searchColor(cube[BACK][0][1]),
    ],
    [
      searchColor(cube[RIGHT][0][2]),
      "#000000",
      searchColor(cube[TOP][0][2]),
      "#000000",
      "#000000",
      searchColor(cube[BACK][0][2]),
    ],
    [
      "#000000",
      searchColor(cube[LEFT][1][0]),
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BACK][1][0]),
    ],
    [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BACK][1][1]),
    ],
    [
      searchColor(cube[RIGHT][1][2]),
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BACK][1][2]),
    ],
    [
      "#000000",
      searchColor(cube[LEFT][2][0]),
      "#000000",
      searchColor(cube[BOTTOM][2][0]),
      "#000000",
      searchColor(cube[BACK][2][0]),
    ],
    [
      "#000000",
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][2][1]),
      "#000000",
      searchColor(cube[BACK][2][1]),
    ],
    [
      searchColor(cube[RIGHT][2][2]),
      "#000000",
      "#000000",
      searchColor(cube[BOTTOM][2][2]),
      "#000000",
      searchColor(cube[BACK][2][2]),
    ],
  ];
  const cubesArray = [];
  let colorArrayIndex = 0;
  for (let l = 1; l > -2; l--) {
    for (let c = 1; c > -2; c--) {
      for (let a = -1; a < 2; a++) {
        cubesArray.push(
          <SingleCube
            position={[a, c, l]}
            colors={colorArray[colorArrayIndex]}
          />
        );
        colorArrayIndex++;
      }
    }
  }
  return <mesh ref={mesh}>{cubesArray} </mesh>;
}
