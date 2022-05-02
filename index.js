const readLine = require("readline");
const doMove = require("./doMove");

const leitor = readLine.createInterface({
  input: process.stdin, 
  output: process.stdout
});
const GREEN  = 0;
const RED  = 1;
const YELLOW  = 2;
const TOP = 0;
let cube = [];
cube[TOP] = [[],[],[]];
setFace(cube[TOP], GREEN);
console.table(cube[TOP]);


async function main(){
  for await (const line of leitor) {
    console.log(line)
    doMove(line);
  }
}
main();

function setFace(face, value){
  for(let l=0;l<3;l++){
    for(let c=0;c<3;c++){
      face[l][c] = value;
    }
  }
}

