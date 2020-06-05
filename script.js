// let table = [
//   ["", "", ""],
//   ["", "", ""],
//   ["", "", ""],
// ];

// const player = (name) => {
//   const getName = () => name;
// };

// const gamePlay = () => {};
let table = ["", "", "", "", "", "", "", "", ""];
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
      if (turn % 2 != 0) {
        element.innerHTML = "X";
        // getRowCellPosition(element, 1);
        table[element.id] = "X";
        turn++;
      } else {
        element.innerHTML = "O";
        // getRowCellPosition(element, 2);
        table[element.id] = "O";
        turn++;
      }
      gameOver();
    });
  });
}

function gameOver() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let a, b, c;
    a = table[winConditions[i][0]];
    b = table[winConditions[i][1]];
    c = table[winConditions[i][2]];

    if (a == b && a == c && a != this.empty) {
      console.log(a);
    }
  }
  // if (table[0] == winningSolution) {
  //   console.log("Player 1 wins!");
  // }
  //   const checkWinX = [];
  //   const checkWinO = [];
  //   for (let i = 0; i <= 8; i++) {
  //     if (table[i] == "X") {
  //       checkWinX.push(i);
  //     } else if (table[i] == "O") {
  //       checkWinO.push(i);
  //     }
  //   }
  //   // for (let i = 0; i < winConditions.length; i++) {
  //   //   if(winConditions[i] == )
  //   // }
  //   console.log("O: " + checkWinO);
  //   console.log("X: " + checkWinX);
  // }

  // function all(list) {
  //   for (let i = 0; i < list.length; i++) if (!list[i]) return false;

  //   return true;
  // }

  // function winning() {
  //   for (let i = 0; i < winCondition.length; i++) {
  //     for (let j = 0; j < winCondition[i].length; j++) {
  //       if (all(winCondition[i][j].map((index) => table[index] == "X")))
  //         alert("X wins");
  //     }
  //   }
  // }

  // winning();

  //   function playerWins(playerMark) {
  //     return winConditions.some(function (threeInARow) {
  //       return threeInARow.every(function (square) {
  //         return table[square] === playerMark;
  //       });
  //     });
  //   }

  //   var xWins = playerWins("X");

  //   xWins;
  // }

  // function winCheck() {
  //   if (
  //     (table[0] == table[1] && table[1] == table[2] && table[0] > 0) ||
  //     (table[3] == table[4] && table[4] == table[5] && table[3] > 0) ||
  //     (table[6] == table[7] && table[7] == table[8] && table[6] > 0) ||
  //     (table[0] == table[3] && table[3] == table[6] && table[0] > 0) ||
  //     (table[1] == table[4] && table[4] == table[7] && table[1] > 0) ||
  //     (table[2] == table[5] && table[5] == table[8] && table[2] > 0) ||
  //     (table[0] == table[4] && table[4] == table[8] && table[0] > 0) ||
  //     (table[2] == table[4] && table[4] == table[6] && table[2] > 0)
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

playButton.addEventListener("click", playGame);
