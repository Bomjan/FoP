// ==========================================
// JavaScript Functions: The Building Blocks
// ==========================================
// Functions are like little machines. You give them something (input), they do something with it, and give you something back (output).

// 1. Function Declaration
// -----------------------
// The classic way to write a function. You can use these even before you define them in the code (it's called hoisting!).
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 2. Function Expression
// ----------------------
// Here, we put the function inside a variable. It's like giving the machine a specific label.
const add = function(a, b) {
    return a + b;
};
console.log("Sum:", add(5, 3));

// 3. Arrow Functions (Modern & Cool)
// ----------------------------------
// A shorter, cleaner way to write functions. Everyone loves these nowadays.
const multiply = (a, b) => a * b;
console.log("Product:", multiply(4, 2));

// If you only have one input, you can even skip the parentheses!
const square = x => x * x;
console.log("Square of 5:", square(5));

// 4. Default Parameters
// ---------------------
// What if someone forgets to give an input? We can set a backup value.
function welcome(user = "Guest") {
    console.log(`Welcome, ${user}`);
}
welcome(); // Uses "Guest" because we didn't say who
welcome("John"); // Uses "John"

// 5. Rest Parameters
// ------------------
// "Rest" lets you accept as many inputs as you want. They all get bundled into an array.
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of many:", sumAll(1, 2, 3, 4, 5));

// 6. Scope (Where variables live)
// -------------------------------
// Variables inside a function are stuck there. They can't get out.
// Variables outside can be seen by everyone.
let globalVar = "I am global (everyone sees me)";

function checkScope() {
    let localVar = "I am local (only this function sees me)";
    console.log(globalVar); // Works!
    console.log(localVar);  // Works!
}
// console.log(localVar); // Error! The computer doesn't know what 'localVar' is out here.
