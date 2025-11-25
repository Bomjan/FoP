# JavaScript Advanced Concepts - Complete Notes

## 1. Classes
Classes are blueprints for creating objects (instances). They encapsulate data and behavior.

### Basic Syntax
```javascript
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    // Method
    displayInfo() {
        console.log(`${this.brand} (${this.year})`);
    }
}

// Creating an instance
const myCar = new Car("Toyota", 2022);
myCar.displayInfo();
```

### Inheritance
Classes can inherit properties and methods from other classes using `extends`.
```javascript
class ElectricCar extends Car {
    constructor(brand, year, batteryLife) {
        super(brand, year); // Call parent constructor
        this.batteryLife = batteryLife;
    }
}
```

## 2. Constructors
Before ES6 classes, we used constructor functions to create objects.

### Constructor Function
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods via prototype (memory efficient)
Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const person1 = new Person("Sundra", 20);
```

## 3. Maps
Maps are collections of key-value pairs where keys can be of **any type** (objects, functions, primitives).

### Creating and Using Maps
```javascript
const myMap = new Map();

// Adding values
myMap.set("name", "Sundra");
myMap.set(1, "One");
myMap.set(true, "Yes");

// Getting values
console.log(myMap.get("name")); // "Sundra"

// Checking existence
console.log(myMap.has(1)); // true

// Deleting
myMap.delete(true);

// Size
console.log(myMap.size);
```

### Iterating Maps
```javascript
// Loop through entries
for (let [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}

// Loop through keys or values
for (let key of myMap.keys()) {}
for (let value of myMap.values()) {}
```

## 4. Sets
Sets are collections of **unique** values. No duplicates allowed.

### Creating and Using Sets
```javascript
const mySet = new Set([1, 2, 3, 3, 4]); // Duplicates removed automatically
console.log(mySet); // Set { 1, 2, 3, 4 }

// Adding values
mySet.add(5);
mySet.add(1); // Ignored (already exists)

// Checking existence
console.log(mySet.has(2)); // true

// Removing values
mySet.delete(3);
```

### Converting Set to Array
Useful for removing duplicates from an array.
```javascript
const numbers = [1, 2, 2, 3, 4, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // [1, 2, 3, 4]
```
