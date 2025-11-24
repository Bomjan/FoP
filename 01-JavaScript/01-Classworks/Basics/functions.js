// ==========================================
// Functions: My Little Code Machines
// ==========================================
// Functions are awesome. I write code once, and I can use it a million times.
// Input -> [Function] -> Output. Simple.

// 1. The Normal Way (Declaration)
// -------------------------------
// I can call this function even before I write it. Magic (Hoisting).
function sayHello(name) {
    return `Hey there, ${name}!`;
}
console.log(sayHello("Buddy"));

// 2. The Variable Way (Expression)
// --------------------------------
// Putting a function inside a variable. 
const addNumbers = function(x, y) {
    return x + y;
};
console.log("5 + 3 =", addNumbers(5, 3));

// 3. Arrow Functions (The Cool Way)
// ---------------------------------
// This is the modern syntax. Less typing = I'm happy.
const multiply = (a, b) => a * b;
console.log("4 x 2 =", multiply(4, 2));

// If I only have one parameter, I don't even need parentheses!
const squareIt = num => num * num;
console.log("5 squared is:", squareIt(5));

// 4. Default Values
// -----------------
// If someone forgets to pass an argument, I use a backup value.
function orderPizza(topping = "Cheese") {
    console.log(`Ordering a ${topping} pizza...`);
}
orderPizza(); // I didn't choose, so it defaults to Cheese
orderPizza("Pepperoni"); // Now it's Pepperoni

// 5. Rest Parameters (The "..." thing)
// ------------------------------------
// When I don't know how many arguments I'll get.
// It bundles everything into an array.
function sumEverything(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}
console.log("Sum of a bunch of numbers:", sumEverything(10, 20, 30, 5));

// 6. Scope (Where variables live)
// -------------------------------
// This is important. Variables inside functions are TRAPPED there.
let outsideVar = "I'm free! (Global)";

function prison() {
    let insideVar = "I'm stuck in here! (Local)";
    console.log(outsideVar); // I can see the outside world
    console.log(insideVar);  // I exist in here
}

prison();
// console.log(insideVar); // This would crash because insideVar is locked up!
