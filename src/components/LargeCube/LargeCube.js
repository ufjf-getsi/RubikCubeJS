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
  console.log(searchColor(cube[LEFT][0][0]));
  const colorArray = [
    [
      "#ffffff",
      searchColor(cube[LEFT][0][2]),
      searchColor(cube[TOP][2][0]),
      "#ffffff",
      searchColor(cube[FRONT][0][0]),
      "#ffffff",
    ],
    [
      "#ffffff",
      "#ffffff",
      searchColor(cube[TOP][2][1]),
      "#ffffff",
      searchColor(cube[FRONT][0][1]),
      "#ffffff",
    ],
    [
      searchColor(cube[RIGHT][0][0]),
      "#ffffff",
      searchColor(cube[TOP][2][2]),
      "#ffffff",
      searchColor(cube[FRONT][0][2]),
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][1][2]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[FRONT][1][0]),
      "#ffffff",
    ],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[FRONT][1][1]),
      "#ffffff",
    ],
    [
      searchColor(cube[RIGHT][1][0]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[FRONT][1][2]),
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][2][2]),
      "#ffffff",
      searchColor(cube[BOTTOM][0][0]),
      searchColor(cube[FRONT][2][0]),
      "#ffffff",
    ],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][0][1]),
      searchColor(cube[FRONT][2][1]),
      "#ffffff",
    ],
    [
      searchColor(cube[RIGHT][2][0]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][0][2]),
      searchColor(cube[FRONT][2][2]),
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][0][1]),
      searchColor(cube[TOP][1][0]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ],
    [
      "#ffffff",
      "#ffffff",
      searchColor(cube[TOP][1][1]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ],
    [
      searchColor(cube[RIGHT][0][1]),
      "#ffffff",
      searchColor(cube[TOP][1][2]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][1][1]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ],
    ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
    [
      searchColor(cube[RIGHT][1][1]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][2][1]),
      "#ffffff",
      searchColor(cube[BOTTOM][1][0]),
      "#ffffff",
      "#ffffff",
    ],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][1][1]),
      "#ffffff",
      "#ffffff",
    ],
    [
      searchColor(cube[RIGHT][2][1]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][1][2]),
      "#ffffff",
      "#ffffff",
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][0][0]),
      searchColor(cube[TOP][0][0]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][0][0]),
    ],
    [
      "#ffffff",
      "#ffffff",
      searchColor(cube[TOP][0][1]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][0][1]),
    ],
    [
      searchColor(cube[RIGHT][0][2]),
      "#ffffff",
      searchColor(cube[TOP][0][2]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][0][2]),
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][1][0]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][1][0]),
    ],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][1][1]),
    ],
    [
      searchColor(cube[RIGHT][1][2]),
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BACK][1][2]),
    ],
    [
      "#ffffff",
      searchColor(cube[LEFT][2][0]),
      "#ffffff",
      searchColor(cube[BOTTOM][2][0]),
      "#ffffff",
      searchColor(cube[BACK][2][0]),
    ],
    [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][2][1]),
      "#ffffff",
      searchColor(cube[BACK][2][1]),
    ],
    [
      searchColor(cube[RIGHT][2][2]),
      "#ffffff",
      "#ffffff",
      searchColor(cube[BOTTOM][2][2]),
      "#ffffff",
      searchColor(cube[BACK][2][2]),
    ],
  ];

  return (
    <mesh ref={mesh}>
      <SingleCube position={[-1, 1, 1]} colors={colorArray[0]} />
      <SingleCube position={[0, 1, 1]} colors={colorArray[1]} />
      <SingleCube position={[1, 1, 1]} colors={colorArray[2]} />

      <SingleCube position={[-1, 0, 1]} colors={colorArray[3]} />
      <SingleCube position={[0, 0, 1]} colors={colorArray[4]} />
      <SingleCube position={[1, 0, 1]} colors={colorArray[5]} />

      <SingleCube position={[-1, -1, 1]} colors={colorArray[6]} />
      <SingleCube position={[0, -1, 1]} colors={colorArray[7]} />
      <SingleCube position={[1, -1, 1]} colors={colorArray[8]} />

      <SingleCube position={[-1, 1, 0]} colors={colorArray[9]} />
      <SingleCube position={[0, 1, 0]} colors={colorArray[10]} />
      <SingleCube position={[1, 1, 0]} colors={colorArray[11]} />

      <SingleCube position={[-1, 0, 0]} colors={colorArray[12]} />
      <SingleCube position={[0, 0, 0]} colors={colorArray[13]} />
      <SingleCube position={[1, 0, 0]} colors={colorArray[14]} />

      <SingleCube position={[-1, -1, 0]} colors={colorArray[15]} />
      <SingleCube position={[0, -1, 0]} colors={colorArray[16]} />
      <SingleCube position={[1, -1, 0]} colors={colorArray[17]} />

      <SingleCube position={[-1, 1, -1]} colors={colorArray[18]} />
      <SingleCube position={[0, 1, -1]} colors={colorArray[19]} />
      <SingleCube position={[1, 1, -1]} colors={colorArray[20]} />

      <SingleCube position={[-1, 0, -1]} colors={colorArray[21]} />
      <SingleCube position={[0, 0, -1]} colors={colorArray[22]} />
      <SingleCube position={[1, 0, -1]} colors={colorArray[23]} />

      <SingleCube position={[-1, -1, -1]} colors={colorArray[24]} />
      <SingleCube position={[0, -1, -1]} colors={colorArray[25]} />
      <SingleCube position={[1, -1, -1]} colors={colorArray[26]} />
    </mesh>
  );
}
