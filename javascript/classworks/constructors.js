// function Book(title, author, page) {
//   this.title = title;
//   this.author = author;
//   this.page = page;
// }

// const myBook = new Book("Last November", "Bomjan", 123);

// console.log(myBook);

// const Car = function (carModel, color) {
//   this.model = carModel;
//   this.color = color;
// };

// const car1 = new Car("M4 Competition BMW", "white");
// const car2 = new Car("SJV Aventador Lamborghini", "Red");

// console.log(car1);
// console.log(car2);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old`
//     );
//   }
// }

// let p1 = new Person("Bomjan", 100);
// let p2 = new Person("Sujal", 300);

// p1.greet();
// p2.greet();

// class Car {
//   constructor(model, color) {
//     this.model = model;
//     this.color = color;
//   }
//   describe() {
//     console.log(
//       `The color of my car is ${this.color} and it is ${this.model} model`
//     );
//   }
// }

// let car1 = new Car("La-Ferrari Ferrari Limited Edition 2023", "Red");
// let car2 = new Car("Bugatti Chiron 2024", "Black-White");

// car1.describe();
// car2.describe();

class Person {
  constructor(firstName, lastName) {
    this.fName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hello, ${this.fName} ${this.lastName}`);
  }
}

let p1 = new Person("Sujal", "Rai");
let p2 = new Person("Anyone", "Yeah");

p1.greet();
p2.greet();
