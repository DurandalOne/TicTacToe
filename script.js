const player = ((name) => {
  return { name };
})();

const display = (() => {
  let table = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelectorAll(".square");
  const playButton = document.getElementById("startGame");
  const resetButton = document.getElementById("reset");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  const winner = document.getElementById("winner");

  return {
    table,
    gameBoard,
    playButton,
    resetButton,
    player1,
    player2,
    winner,
  };
})();

const game = (() => {
  display.playButton.addEventListener("click", playGame);
  display.resetButton.addEventListener("click", resetBoard);
  let playerMove = "X";
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

  //enters the current player's symbol in the board, rotates current player value
  function oneTurn(element) {
    if (turn % 2 != 0) {
      element.innerHTML = "X";
      display.table[element.id] = "X";
      turn++;
      playerMove = "O";
    } else {
      element.innerHTML = "O";
      display.table[element.id] = "O";
      turn++;
      playerMove = "X";
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

    // checks through current table array for any matches to winConditions
    for (let i = 0; i < winConditions.length; i++) {
      let a, b, c;
      a = display.table[winConditions[i][0]];
      b = display.table[winConditions[i][1]];
      c = display.table[winConditions[i][2]];

      if (a == b && a == c && a != "") {
        //returns the indexes of table where the winning values are
        const elementList = [
          `${winConditions[i][0]}`,
          `${winConditions[i][1]}`,
          `${winConditions[i][2]}`,
        ];

        elementList.forEach((e) => {
          document.getElementById(e).style.backgroundColor = "green";
        });
        gameOver(playerMoveName(elementList[0]));
      } else if (display.table.every(checkArray)) {
        display.gameBoard.forEach((e) => {
          document.getElementById(e.id).style.backgroundColor = "orange";
          gameOver("nobody");
        });
      }
    }
  }

  //checks the array for any index that has a value of X or O
  function checkArray(e) {
    return e == "X" || e == "O";
  }

  function playerMoveName(e) {
    let p1 = display.player1.value;
    let p2 = display.player2.value;
    return playerMove == "X" ? p2 : p1;
  }

  function gameOver(win) {
    if (win == "nobody") {
      display.winner.innerHTML = "It's a tie! Click reset to play again!";
    } else {
      display.winner.innerHTML = `The winner is ${win}! Click reset to play again!`;
    }
    gameWon = true;
  }

  //removes any win or tie color, clears the table back to blank values and game values to default
  function resetBoard() {
    display.gameBoard.forEach((e) => {
      e.innerHTML = " ";
      e.style.backgroundColor = "";
    });
    display.table = ["", "", "", "", "", "", "", "", ""];
    turn = 1;
    gameWon = false;
    display.winner.innerHTML = "";
  }
})();
