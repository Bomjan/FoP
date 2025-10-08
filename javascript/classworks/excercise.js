// * Conditional Statements

// * 1. Profit and Loss
// let sellingPrice = 300;
// let costPrice = 150;

// if (sellingPrice > costPrice) {
//     console.log(`You have generated Nu. ${sellingPrice - costPrice} profit`);
// } else {
//     console.log(`You lost Nu. ${ costPrice - sellingPrice}`);
// }

// * 2. Day Message
// const day = prompt("Enter the day: ");
// let message;
// if (day == "monday") {
//     message = "Coffee and Code"
// } else if (day == "tuesday") {
//     message = "Prepare lessons for OOP";
// } else if (day == "wednesday") {
//     message = "Lab Assesment";
// } else if (day == "thursday") {
//     message = "Lecture";
// } else if (day == "friday") {
//     message = "TGIF";
// } else if (day == "saturday" || day == "sunday") { 
//     message = "weekend!";
// }else{
//     message = 'Bro you entered Invalid day';
// }
// console.log(message);


// * 3. Grading System
// let grade = prompt("Enter your grade: ");
// if (grade >= 90 && grade <= 100) {
//     console.log("You got grade A");
// } else if (grade >= 80 && grade < 90 ) {
//     console.log("You got grade B");
// } else if (grade >= 70 && grade < 80) {
//     console.log("You got grade C");
// } else if (grade >= 60 && grade < 70) {
//     console.log("You got grade D");
// } else if (grade >= 50 && grade < 60) {
//     console.log("You got grade E");
// } else if (grade < 50 && grade >= 0) {
//     console.log("Failed, Better luck next time ☠️☠️");
// } else {
//     console.log("Invalid Grade, Are you even human?🤖");
// }

// * 4. Triangle Type
// const side1 = prompt("Enter side 1: ");
// const side2 = prompt("Enter side 2: ");
// const side3 = prompt("Enter side 3: ");

// if (side1 === side2 && side2 === side3) {
//     // !caution  side1 is equal to side 3, it will be a redundancy to check side1 === side3
//     console.log("Equilateral Triangle");
// } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     // side1 is equal to side2 or side2 is equal to side3 or side1 is equal to side3
//     console.log("Isosceles Triangle");
// } else {
//     console.log("Scalene Triangle");
// }

// * 5.  Weather Choice
//  Nested If-Else statements
// const choice = prompt("Enter the weather: ");
// const tempt = prompt("Enter the temperature: ");

// if (choice == "sunny"){
//     if (tempt < 85 ){
//         console.log("It's a nice and sunny day!");
//     } else {
//         console.log(`It's a burning hot with ${tempt} degree celcius outside!`);
//     }
// } else if (choice == "rainy") {
//     console.log("It's raining outside, take your umbrella!");
// } else if (choice == "snowy") {
//     console.log("It's snowy outside, wear warm clothes!");
// } else if (choice == "overcast") {
//     console.log("It may or maynot rain, take your umbrella just in case!");
// } else {
//     console.log("Invalid weather choice!");
// }

// * 6. Ternary Operation
// Syntax: condition ? exprIfTrue : exprIfFalse
// Example 
// let num = 5;
// let result = num % 2 == 0 ? "Even Number" : "Odd Number";
// console.log(result);

// let age = 16;
// let msg = age > 18 ? `You are eligible to drive` : `You must wait for ${18-age } years to drive`;
// console.log(msg);

// * 7. Switch Statements
// switch (expression){
//     case value1:
//         // run
//         break;
//     case value2:
//         // run
//         break;
//     default:
//         // like else
// }

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));

let operator = prompt("Enter the operator (+, -, *, /): ");
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator ☠️ Bro, you are cooked";
}
console.log(`The result: ${num1} ${operator} ${num2} = ${result}`);