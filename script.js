let table = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// const player = (name) => {
//   const getName = () => name;
// };

// const gamePlay = () => {};

const gameBoard = document.querySelectorAll(".square");
const playButton = document.getElementById("startGame");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let turn = 1;

function playGame() {
  gameBoard.forEach((element) => {
    element.addEventListener("click", (event) => {
      function getRowCellPosition(cell, move) {
        row = cell.parentNode.rowIndex;
        cell = cell.cellIndex;
        table[row][cell] = move;
      }
      if (turn % 2 == 0) {
        element.innerHTML = "X";
        getRowCellPosition(element, "X");
        turn++;
      } else {
        element.innerHTML = "O";
        getRowCellPosition(element, "O");
        turn++;
      }
    });
  });
}

playButton.addEventListener("click", playGame);
