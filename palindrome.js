const prompt = require("prompt-sync")();

let num = Number(prompt("Enter any numbers: "));

let original = num;
let reversed = 0;

while(num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = (num - digit) / 10;
}

let palindrome = (reversed === original) ? "is a" : "is not a";

console.log("The number", original, palindrome, "palindrome");