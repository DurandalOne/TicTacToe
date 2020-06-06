const players = ((name, symbol) => {
  return { name, symbol };
})();

const display = (() => {
  let table = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelectorAll(".square");
  const playButton = document.getElementById("startGame");
  const resetButton = document.getElementById("reset");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  return { table, gameBoard, playButton, resetButton, player1, player2 };
})();

const game = (() => {
  display.playButton.addEventListener("click", playGame);
  display.resetButton.addEventListener("click", resetBoard);
  let turn = 1;
  let gameWon = false;

  function playGame() {
    display.gameBoard.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (!gameWon) {
          oneTurn(element);
          checkWin();
        }
      });
    });
  }

  function oneTurn(element) {
    if (turn % 2 != 0) {
      element.innerHTML = "X";
      display.table[element.id] = "X";
      turn++;
    } else {
      element.innerHTML = "O";
      display.table[element.id] = "O";
      turn++;
    }
  }

  function checkWin() {
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
      a = display.table[winConditions[i][0]];
      b = display.table[winConditions[i][1]];
      c = display.table[winConditions[i][2]];

      if (a == b && a == c && a != "") {
        const elementList = [
          `${winConditions[i][0]}`,
          `${winConditions[i][1]}`,
          `${winConditions[i][2]}`,
        ];

        elementList.forEach((e) => {
          document.getElementById(e).style.backgroundColor = "green";
        });

        gameOver(a);
      }
    }
  }

  function gameOver(win) {
    document.getElementById("winner").innerHTML = `The winner is ${win}!`;
    gameWon = true;
  }

  function resetBoard() {
    display.gameBoard.forEach((e) => {
      e.innerHTML = " ";
      e.style.backgroundColor = "white";
    });
    display.table = ["", "", "", "", "", "", "", "", ""];
    turn = 1;
    gameWon = false;
  }
})();
