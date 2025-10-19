const sumAll = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

const addOnlyNums = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    typeof args[i] === 'number' ? (sum += args[i]) : null;
  }
  return sum;
}

const combineTwoArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const sumEveryOther = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i += 2) {
    sum += args[i];
  }
  return sum;
}

const onlyUniques = (...args) => {
  let unique = [];
  for (let i = 0; i < args.length; i++) {
    unique.includes(args[i]) ? null : unique.push(args[i]);
  }
  return unique;
}

const combineAllArrays = (...arrays) => {
  let combined = [];
  for (let i = 0; i < arrays.length; i++) {
    combined = [...combined, ...arrays[i]];
  }
  return combined;
}

const squareAndSum = (...nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] **2;
  }
  return sum;
}

// const calAreaTrapezium = (a, b, h) => (a + b)/2 * h;

// let a = Number(prompt("Enter first parallel length: "))
// let b = Number(prompt("Enter second parallel length: "))
// let h = Number(prompt("Enter height of the trapeziod: "))

// console.log(`The area of trapezoid is ${calAreaTrapezium(a, b, h)}`)

const dtb =(n) => {
  if (n == 0) return "0";
  if (n == 1) return "1";
  return dtb(Math.floor(n/2)) + (n%2);
}

console.log(dtb(10));