# JavaScript Basics - Complete Notes

## 1. Variables & Data Types
JavaScript is loosely typed, meaning you don't have to specify data types.

### Variable Declaration
- `let`: For variables that can change. Block-scoped.
- `const`: For variables that won't change. Block-scoped.
- `var`: Old way. Function-scoped. Avoid using this.

```javascript
let name = "Sundra";
const pi = 3.14;
```

## 2. Conditional Statements
Control the flow of your program based on conditions.

### If...Else
```javascript
let age = 18;

if (age >= 18) {
    console.log("You can vote!");
} else if (age >= 16) {
    console.log("You can drive!");
} else {
    console.log("Too young.");
}
```

### Switch Statement
Great for checking one value against multiple possibilities.
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is near");
        break;
    default:
        console.log("Just another day");
}
```

### Ternary Operator
A one-line if-else statement.
`condition ? valueIfTrue : valueIfFalse`

```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

## 3. Arrays (Lists)
Arrays are ordered lists of values. Indexing starts at **0**.

### Creating Arrays
```javascript
// Literal syntax (Recommended)
let fruits = ["Apple", "Banana", "Mango"];

// Constructor syntax
let numbers = new Array(10, 20, 30);
```

### Accessing & Modifying
```javascript
console.log(fruits[0]); // "Apple"
fruits[1] = "Grapes"; // Change "Banana" to "Grapes"
console.log(fruits.length); // Get number of items
```

### Common Methods
- `push(item)`: Add to end
- `pop()`: Remove from end
- `unshift(item)`: Add to start
- `shift()`: Remove from start
- `indexOf(item)`: Find index of item
- `includes(item)`: Check if item exists

### Iterating Arrays
```javascript
// For...of loop (Cleanest)
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach method
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

## 4. Functions
Functions are reusable blocks of code.

### Function Declaration
Hoisted (can be used before definition).
```javascript
function sayHello(name) {
    return `Hello, ${name}!`;
}
```

### Function Expression
Not hoisted.
```javascript
const add = function(x, y) {
    return x + y;
};
```

### Arrow Functions (ES6)
Concise syntax.
```javascript
const multiply = (a, b) => a * b;
const square = n => n * n; // Parentheses optional for single arg
```

### Default Parameters
```javascript
function greet(name = "Guest") {
    console.log(`Hi, ${name}`);
}
```

## 5. Loops & Control Flow
Automate repetitive tasks.

### For Loop
Best when you know how many times to loop.
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### While Loop
Best when you don't know when to stop (based on condition).
```javascript
let energy = 0;
while (energy < 100) {
    energy++;
}
```

### Do...While Loop
Runs at least once.
```javascript
do {
    console.log("Run once");
} while (false);
```

### Break & Continue
- `break`: Exit loop immediately.
- `continue`: Skip current iteration and go to next.

## 6. Objects
Key-value pairs to describe entities.

### Creating Objects
```javascript
const person = {
    name: "Sundra",
    age: 20,
    sayHi: function() {
        return "Hi!";
    }
};
```

### Accessing Properties
```javascript
// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);
```

### Object Methods
- `Object.keys(obj)`: Array of keys
- `Object.values(obj)`: Array of values
- `Object.entries(obj)`: Array of [key, value] pairs

### Destructuring
Extract values into variables.
```javascript
const { name, age } = person;
```
