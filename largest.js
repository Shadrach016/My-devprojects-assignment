const prompt = require("prompt-sync")();

let num = Number(prompt("Enter any numbers: "));

 let largest = 0;

while(num > 0) {
 let digit = num % 10;
if(digit > largest){
              largest = digit;

  }           
 num = (num - digit) / 10;
}

console.log(largest);



        