
// Functions

function greet(name){
  console.log(`Hello ${name}`);
}

function myName(name, age){
  console.log(`Hello ${name}, you are ${age} years old`);
}

// let username = prompt("Enter name: ");
// let age = prompt("Enter age ");

// myName(username, age);

function sayHello(){
  let you = prompt("What's ya name? ");
  console.log(`Yo ${you}!, what's yo cookin' bro.`)
}


let displayFun =  function (){
  let dadAge = 50;
  let sonAge = 23;

  console.log(`Dad's age is ${dadAge} and son's age is ${sonAge} and the sum is ${dadAge + sonAge}`);

}

// displayFun();

function addNumbers(a, b){
  return a + b;
}

let x = 67;
let y = 90;

let sum1 = addNumbers(x, y);
let sum2 = addNumbers(12, 34);

console.log(sum1)
console.log(sum2)
