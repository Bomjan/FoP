// ==========================================
// Classes: The Blueprint Factory
// ==========================================
// Okay, imagine I want to build 100 cars. I'm not going to write the code for each one manually.
// I'll make a Blueprint (Class) and then just copy-paste (Instantiate) it!

class Car {
  // The Constructor is like the setup function. It runs when I say "new Car()".
  constructor(brand, model, year) {
    this.brand = brand; // 'this' means THIS specific car I'm making right now.
    this.model = model;
    this.year = year;
  }

  // This is a method. It's something the car can DO.
  showOff() {
    console.log(`Check out my ${this.year} ${this.brand} ${this.model}!`);
  }

  // Calculating the age of the car
  howOldIsIt(currentYear) {
    let age = currentYear - this.year;
    console.log(`It's ${age} years old.`);
  }
}

// Now let's use the blueprint to make some actual cars.
let myDreamCar = new Car("Lamborghini", "Urus", 2019);
let myOtherCar = new Car("Bugatti", "Chiron", 2022);

console.log("--- Dream Car ---");
myDreamCar.showOff();
myDreamCar.howOldIsIt(2025);

console.log("\n--- Other Car ---");
myOtherCar.showOff();
myOtherCar.howOldIsIt(2025);

// ==========================================
// Inheritance: Copying Homework
// ==========================================
// Sometimes I want a new class that's mostly the same as an old one.
// I can just "extend" it.

class Shape {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(`I am a ${this.name}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle"); // Call the parent's constructor
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

let myRect = new Rectangle(10, 5);
console.log("\n--- Inheritance Test ---");
myRect.sayName(); // It inherited this from Shape!
console.log("Area:", myRect.getArea());
