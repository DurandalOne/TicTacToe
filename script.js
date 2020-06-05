const display = (() => {
  let table = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelectorAll(".square");
  const playButton = document.getElementById("startGame");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");
  playButton.addEventListener("click", playGame);

  return { table, gameBoard, playButton, player1, player2 };
})();

function playGame() {
  let turn = 1;
  display.gameBoard.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (turn % 2 != 0) {
        element.innerHTML = "X";
        display.table[element.id] = "X";
        turn++;
      } else {
        element.innerHTML = "O";
        display.table[element.id] = "O";
        turn++;
      }
      checkWin();
    });
  });
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
      gameOver(a);
    }
  }
}

function gameOver(win) {
  console.log(win);
  document.getElementById("winner").innerHTML = `The winner is ${win}!`;
  display.gameBoard.forEach((e) => (e.innerHTML = " "));
  display.table = ["", "", "", "", "", "", "", "", ""];
}
