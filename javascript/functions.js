function addNumbers(a, b){
  return a + b;
}

let x = 67;
let y = 90;

let sum1 = addNumbers(x, y);
let sum2 = addNumbers(12, 34);


function a(x, y){
  console.log(x + y);
  return "ok";
}

let addTwoNumbers = function(x, y){
  return x + y;
}

let resultArray = [];
for (let i = 0; i < 5; i++){
  let result = addTwoNumbers(i, 2 * i);
  resultArray.push(result);
}

const hello = uName => {
  let fName = uName + " deki";
  console.log(fName)
}

// hello("Sundra");
const addNnum = (x, y) => x + y;
let result = addNnum(12, 22);
// console.log(result)

let uName = "Sangay";
let age = 18;
let gender = 'female';

const summariseUser = (userName, userAge, userGender) => {
  return `${userName} is ${userAge} year old ${userGender}`;
}

// console.log(summariseUser(uName, age, gender));

const calfahrenheit = (cel) => 32 + cel*9/5;
// console.log(calfahrenheit(0));


const to_meter = h_cm => h_cm / 100;
const BMI = (weight, height) => weight / (to_meter(height) * to_meter(height));

let w = 50;
let h = 160;
// let w = Number(prompt("Enter your weight: "))
// let h = Number(prompt("Enter your height: "))


let bmi = BMI(w, h);
// console.log(`Your BMI is ${bmi}`);

function calculateBMI(w, h){
  return w / (h*h);
}

// let nums = [1, 5, 0, 3, 5, 76];
// console.log(...nums)

let jsarr = ['fundamentals', 'of', 'programming'];
let jsdes = ['Javascript', 'is', 'a', ...jsarr, 'module'];

// console.log(...jsdes)

const techCompany = (param1, ...param2) => console.log(param1, ...param2);

