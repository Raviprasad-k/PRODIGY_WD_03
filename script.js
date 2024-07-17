let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boardCells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

function handleClick(index) {
  if (gameActive && board[index] === "") {
    board[index] = currentPlayer;
    boardCells[index].innerText = currentPlayer;
    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkResult() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      message.innerText = `${board[a]} wins!`;
      gameActive = false;
      return;
    }
  }
  if (!board.includes("")) {
    message.innerText = "Game tied!";
    gameActive = false;
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  message.innerText = "";
  boardCells.forEach((cell) => (cell.innerText = ""));
}
