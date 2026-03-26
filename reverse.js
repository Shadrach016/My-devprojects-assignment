const prompt = require("prompt-sync")();

let num = prompt("Enter any numbers: ");
  
let reversed = 0

while(num > 0) {
 let digit = num % 10;
reversed = reversed * 10 + digit;
 num = (num - digit) / 10;
}

console.log(reversed)



       