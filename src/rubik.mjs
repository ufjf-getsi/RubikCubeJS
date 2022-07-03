// import { exit } from "process";
// import readLine from "readline";

// const leitor = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Constants
const DI = 3; // cube dimensions

const FRONT = 0;
const LEFT = 1;
const RIGHT = 2;
const BACK = 3;
const TOP = 4;
const BOTTOM = 5;

/*
const GREEN = 0;
const ORANGE = 1;
const RED = 2;
const BLUE = 3;
const WHITE = 4;
const YELLOW = 5;

let COLORS = ['G', 'O', 'R', 'B', 'W', 'Y'];
*/

// async function main() {

//     let cube = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];

//     setFace(cube[FRONT], GREEN);
//     setFace(cube[LEFT], ORANGE);
//     setFace(cube[RIGHT], RED);
//     setFace(cube[BACK], BLUE);
//     setFace(cube[TOP], WHITE);
//     setFace(cube[BOTTOM], YELLOW);

//     //console.table(cube[FRONT]);
//     showCube(cube);
//     process.stdout.write("Move: ");
//     for await (const line of leitor) {
//         doMove(line, cube);
//         showCube(cube);
//         process.stdout.write("Move: ");
//     }
// }
//main();

export function doMove(move, cube) {
  switch (move.charAt(0)) {
    case "U": // U
      slideRow(0, cube[FRONT], cube[LEFT], cube[BACK], cube[RIGHT]);
      rotateFaceClockwise(cube[TOP]);
      break;

    case "u": // U'
      slideRowInverted(0, cube[FRONT], cube[LEFT], cube[BACK], cube[RIGHT]);
      rotateFaceCounterClockwise(cube[TOP]);
      break;

    case "D": // D
      slideRowInverted(2, cube[FRONT], cube[LEFT], cube[BACK], cube[RIGHT]);
      rotateFaceClockwise(cube[BOTTOM]);
      break;

    case "d": // D'
      slideRow(2, cube[FRONT], cube[LEFT], cube[BACK], cube[RIGHT]);
      rotateFaceCounterClockwise(cube[BOTTOM]);
      break;

    case "L": // L
      slideColInverted(0, cube[FRONT], cube[TOP], cube[BACK], cube[BOTTOM]);
      rotateFaceClockwise(cube[LEFT]);
      break;

    case "l": // L'
      slideCol(0, cube[FRONT], cube[TOP], cube[BACK], cube[BOTTOM]);
      rotateFaceCounterClockwise(cube[LEFT]);
      break;

    case "R": // R
      slideCol(2, cube[FRONT], cube[TOP], cube[BACK], cube[BOTTOM]);
      rotateFaceClockwise(cube[RIGHT]);
      break;

    case "r": // R'
      slideColInverted(2, cube[FRONT], cube[TOP], cube[BACK], cube[BOTTOM]);
      rotateFaceCounterClockwise(cube[RIGHT]);
      break;

    case "F": // F
      rotateFaceClockwise(cube[FRONT]);
      slideSideColInverted(0, cube[RIGHT], cube[TOP], cube[LEFT], cube[BOTTOM]);
      break;

    case "f": // F'
      rotateFaceCounterClockwise(cube[FRONT]);
      slideSideCol(0, cube[RIGHT], cube[TOP], cube[LEFT], cube[BOTTOM]);
      break;

    case "B": // B
      rotateFaceCounterClockwise(cube[BACK]);
      slideSideCol(2, cube[RIGHT], cube[TOP], cube[LEFT], cube[BOTTOM]);
      break;

    case "b": // B'
      rotateFaceClockwise(cube[BACK]);
      slideSideColInverted(2, cube[RIGHT], cube[TOP], cube[LEFT], cube[BOTTOM]);
      break;

    case "0": // Exit
      // exit();
      break;

    default:
      break;
  }
}

/*
function setFace(face, value) {
    for (let l = 0; l < DI; l++) {
        for (let c = 0; c < DI; c++) {
            face[l][c] = value;
        }
    }
}
*/

// function showRow(row, face) {
//     for (let i = 0; i < DI; i++) {
//         process.stdout.write(COLORS[face[row][i]]);
//     }
//     process.stdout.write(" ");
// }

// function showRowInverted(row, face) {
//     for (let i = DI - 1; i >= 0; i--) {
//         process.stdout.write(COLORS[face[row][i]]);
//     }
//     process.stdout.write(" ");

// }

// function showBlankRow() {
//     for (let i = 0; i <= DI; i++) {
//         process.stdout.write(" ");
//     }
// }

// function showCube(cube) {
//     console.log("=== CUBE ===");
//     // upper section
//     for (let i = 0; i < DI; i++) {
//         showBlankRow();
//         showRow(i, cube[TOP]);
//         console.log();
//     }
//     // middle section
//     for (let i = 0; i < DI; i++) {
//         showRow(i, cube[LEFT]);
//         showRow(i, cube[FRONT]);
//         showRow(i, cube[RIGHT]);
//         showRowInverted(i, cube[BACK]);
//         console.log();
//     }
//     // lower section
//     for (let i = 0; i < DI; i++) {
//         showBlankRow();
//         showRow(i, cube[BOTTOM]);
//         console.log();
//     }
// }

function slideRow(row, face1, face2, face3, face4) {
  let newRow2 = [];
  let newRow3 = [];
  for (let c = 0; c < DI; c++) {
    newRow2[c] = face1[row][c];
  }
  for (let c = 0; c < DI; c++) {
    face1[row][c] = face4[row][c];
    face4[row][c] = face3[row][DI - 1 - c];
    newRow3[c] = face2[row][DI - 1 - c];
  }
  for (let c = 0; c < DI; c++) {
    face2[row][c] = newRow2[c];
    face3[row][c] = newRow3[c];
  }
}

function slideRowInverted(row, face1, face2, face3, face4) {
  let newRow4 = [];
  let newRow3 = [];
  for (let c = 0; c < DI; c++) {
    newRow4[c] = face1[row][c];
  }
  for (let c = 0; c < DI; c++) {
    face1[row][c] = face2[row][c];
    face2[row][c] = face3[row][DI - 1 - c];
    newRow3[c] = face4[row][DI - 1 - c];
  }
  for (let c = 0; c < DI; c++) {
    face4[row][c] = newRow4[c];
    face3[row][c] = newRow3[c];
  }
}

function slideCol(col, face1, face2, face3, face4) {
  let newCol2 = [];
  let newCol3 = [];
  for (let r = 0; r < DI; r++) {
    newCol2[r] = face1[r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = face4[r][col];
    face4[r][col] = face3[DI - 1 - r][col];
    newCol3[r] = face2[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face2[r][col] = newCol2[r];
    face3[r][col] = newCol3[r];
  }
}

function slideColInverted(col, face1, face2, face3, face4) {
  let newCol4 = [];
  let newCol3 = [];
  for (let r = 0; r < DI; r++) {
    newCol4[r] = face1[r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = face2[r][col];
    face2[r][col] = face3[DI - 1 - r][col];
    newCol3[r] = face4[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face4[r][col] = newCol4[r];
    face3[r][col] = newCol3[r];
  }
}

function slideSideCol(col, face1, face2, face3, face4) {
  let newCol1 = [];
  let newCol2 = [];
  let newCol3 = [];
  let newCol4 = [];
  for (let r = 0; r < DI; r++) {
    newCol1[r] = face4[col][DI - 1 - r];
    newCol2[r] = face1[r][col];
    newCol3[r] = face2[DI - 1 - col][DI - 1 - r];
    newCol4[r] = face3[r][DI - 1 - col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = newCol1[r];
    face2[DI - 1 - col][r] = newCol2[r];
    face3[r][DI - 1 - col] = newCol3[r];
    face4[col][r] = newCol4[r];
  }
}

function slideSideColInverted(col, face1, face2, face3, face4) {
  let newCol1 = [];
  let newCol2 = [];
  let newCol3 = [];
  let newCol4 = [];
  for (let r = 0; r < DI; r++) {
    newCol1[r] = face2[DI - 1 - col][r];
    newCol2[r] = face3[DI - 1 - r][DI - 1 - col];
    newCol3[r] = face4[col][r];
    newCol4[r] = face1[DI - 1 - r][col];
  }
  for (let r = 0; r < DI; r++) {
    face1[r][col] = newCol1[r];
    face2[DI - 1 - col][r] = newCol2[r];
    face3[r][DI - 1 - col] = newCol3[r];
    face4[col][r] = newCol4[r];
  }
}

function rotateFaceClockwise(face) {
  let newFace = [[], [], []];
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      newFace[r][c] = face[DI - 1 - c][r];
    }
  }
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      face[r][c] = newFace[r][c];
    }
  }
}

function rotateFaceCounterClockwise(face) {
  let newFace = [[], [], []];
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      newFace[r][c] = face[c][DI - 1 - r];
    }
  }
  for (let r = 0; r < DI; r++) {
    for (let c = 0; c < DI; c++) {
      face[r][c] = newFace[r][c];
    }
  }
}
