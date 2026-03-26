const prompt = require("prompt-sync")();

// create empty board
let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

let currentPlayer = "X";
let gameRunning = true;

// display board
function printBoard() {
    console.log("\n");
    console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log("--+---+--");
    console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log("--+---+--");
    console.log(board[6] + " | " + board[7] + " | " + board[8]);
    console.log("\n");
}

// check winner manually
function checkWinner() {

    // rows
    if (board[0] === currentPlayer && board[1] === currentPlayer && board[2] === currentPlayer) return true;
    if (board[3] === currentPlayer && board[4] === currentPlayer && board[5] === currentPlayer) return true;
    if (board[6] === currentPlayer && board[7] === currentPlayer && board[8] === currentPlayer) return true;

    // columns
    if (board[0] === currentPlayer && board[3] === currentPlayer && board[6] === currentPlayer) return true;
    if (board[1] === currentPlayer && board[4] === currentPlayer && board[7] === currentPlayer) return true;
    if (board[2] === currentPlayer && board[5] === currentPlayer && board[8] === currentPlayer) return true;

    // diagonals
    if (board[0] === currentPlayer && board[4] === currentPlayer && board[8] === currentPlayer) return true;
    if (board[2] === currentPlayer && board[4] === currentPlayer && board[6] === currentPlayer) return true;

    return false;
}

// check draw WITHOUT includes()
function checkDraw() {
    for (let i = 0; i < 9; i++) {
        if (board[i] === " ") {
            return false;
        }
    }
    return true;
}

// switch player WITHOUT fancy syntax
function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

// game loop
while (gameRunning) {

    printBoard();

    let move = Number(prompt("Player " + currentPlayer + ", enter position (1-9): "));

    // validate input manually
    if (move < 1 || move > 9) {
        console.log("Invalid position!");
        continue;
    }

    let index = move - 1;

    if (board[index] !== " ") {
        console.log("Spot already taken!");
        continue;
    }

    board[index] = currentPlayer;

    if (checkWinner()) {
        printBoard();
        console.log("Player " + currentPlayer + " wins!");
        gameRunning = false;
        break;
    }

    if (checkDraw()) {
        printBoard();
        console.log("It's a draw!");
        gameRunning = false;
        break;
    }

    switchPlayer();
}