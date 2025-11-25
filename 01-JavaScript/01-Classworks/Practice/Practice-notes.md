# JavaScript Practice & Problem Solving - Complete Notes

## 1. Exercise Logic
Understanding how to solve common problems.

### Profit and Loss
Calculate the difference between selling price and cost price.
```javascript
if (sellingPrice > costPrice) {
    console.log(`Profit: ${sellingPrice - costPrice}`);
} else {
    console.log(`Loss: ${costPrice - sellingPrice}`);
}
```

### Grading System
Using `else if` to check ranges of values.
```javascript
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
}
// ... and so on
```

### Weather Choice (Nested Ifs)
Checking multiple conditions inside each other.
```javascript
if (weather === "sunny") {
    if (temp > 30) {
        console.log("Hot and sunny");
    } else {
        console.log("Nice and sunny");
    }
}
```

## 2. Common Coding Patterns

### Accumulator Pattern
Used to calculate a single value from a list (e.g., sum, total).
```javascript
const sumAll = (...args) => {
    let sum = 0; // Accumulator
    for (let num of args) {
        sum += num;
    }
    return sum;
};
```

### Filtering Pattern
Used to create a new list with only items that match a condition.
```javascript
const onlyNumbers = (...args) => {
    let numbers = [];
    for (let item of args) {
        if (typeof item === 'number') {
            numbers.push(item);
        }
    }
    return numbers;
};
```

### Mapping Pattern
Used to transform every item in a list.
```javascript
const squareAll = (...nums) => {
    let squared = [];
    for (let num of nums) {
        squared.push(num * num);
    }
    return squared;
};
```

## 3. Recursion
A function that calls itself to solve a problem.

### Factorial Example
```javascript
const factorial = (n) => {
    if (n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
};
console.log(factorial(5)); // 120
```

### Decimal to Binary
```javascript
const dtb = (n) => {
    if (n === 0) return "0";
    if (n === 1) return "1";
    return dtb(Math.floor(n / 2)) + (n % 2);
};
```

## 4. Practical Examples

### Banking System Logic
Simple state management using functions.
```javascript
let balance = 1000;

const deposit = (amount) => {
    if (amount > 0) {
        balance += amount;
        console.log(`Deposited: ${amount}`);
    }
};

const withdraw = (amount) => {
    if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: ${amount}`);
    } else {
        console.log("Insufficient funds");
    }
};
```

### Calculator Logic
Using `switch` statements for cleaner control flow.
```javascript
const calculate = (a, b, operator) => {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : "Error";
        default: return "Invalid Operator";
    }
};
```

## 5. Advanced Array Techniques

### String Manipulation
Strings can be treated like arrays or converted to them.
```javascript
const str = "Hello";
const chars = str.split(""); // ['H', 'e', 'l', 'l', 'o']
const newStr = chars.join("-"); // "H-e-l-l-o"
```

### Matrix (2D Arrays)
Arrays inside arrays. Useful for grids.
```javascript
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing '5'
console.log(grid[1][1]);

// Looping through a matrix
for (let row of grid) {
    for (let num of row) {
        console.log(num);
    }
}
```

### Creating Arrays Fast
```javascript
// Create an array of 5 zeros
const zeros = new Array(5).fill(0);
```

## 6. Problem Solving Tips

1. **Break it down**: Don't try to solve the whole problem at once. Solve small parts.
2. **Check edge cases**: What if the input is 0? Negative? Empty?
3. **Use console.log**: Debug by printing values at different steps.
4. **Read error messages**: They tell you exactly what went wrong (usually).
