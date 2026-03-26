const prompt = require("prompt-sync")({ sigint: true });

let totalMiles = 0;
let totalGallons = 0;

let miles = parseInt(prompt("Enter miles driven (type 0 to quit): "));

while (miles !== 0) {
    let gallons = parseInt(prompt("Enter gallons used: "));

    let mpg = miles / gallons;
    console.log("Miles per gallon for this trip:", mpg);

    totalMiles += miles;
    totalGallons += gallons;

    let combinedMpg = totalMiles / totalGallons;
    console.log("Combined miles per gallon:", combinedMpg.toFixed(2));

    // Ask for the next trip
    miles = parseInt(prompt("\nEnter miles driven (type 0 to quit): "));
}

console.log("Thank you for using the Gas Mileage Calculator!");