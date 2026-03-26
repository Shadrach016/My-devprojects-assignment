const prompt = require("prompt-sync")();

let board = [1,2,3,4,5,6,7,8,9];
let currentPlayer = "X";

function printBoard() {
    console.log("\n");
    console.log(board[0] + " | " + board[1] + " | " + board[2]);
    console.log("--+---+--");
    console.log(board[3] + " | " + board[4] + " | " + board[5]);
    console.log("--+---+--");
    console.log(board[6] + " | " + board[7] + " | " + board[8]);
    console.log("\n");
}

while (true) {

    printBoard();

    let move = Number(prompt("Player " + currentPlayer + ", pick a number (1-9): "));

    if (move < 1 || move > 9) {
        console.log("Invalid input!");
        continue;
    }

    let index = move - 1;

    if (board[index] === "X" || board[index] === "O") {
        console.log("Already taken!");
        continue;
    }

    board[index] = currentPlayer;

    // switch player
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}