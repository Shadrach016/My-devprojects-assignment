const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number:", (input) => {
const num = Number(input.trim());

   const result = (num % 2 === 0) ? "even" : "odd";

   console.log(result);
rl.close();