const prompt = require("prompt-sync")({ sigint: true });

let number = parseInt(prompt("Enter miles driven (type 0 to quit): "));

let gallons = parseInt(prompt("Enter gallons used: "));
       
while (number !== 0) {
  
    console.log("You entered:", number);
     }
    number = parseInt(prompt("Enter another number (type 0 to quit): "));


