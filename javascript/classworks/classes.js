class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`This car is a ${this.year} ${this.brand} ${this.model}.`);
  }
  age(currentYear) {
    console.log(`The car is ${currentYear - this.year} years in use`);
  }
}

// let car1 = new Car("Lamborghini", "Urus", 2019);
// let car2 = new Car("Bugatti", "Chiron", 2022);

// console.log("Car 1");
// car1.displayInfo();
// car1.age(2025);

// console.log("\nCar 2");
// car2.displayInfo();
// car2.age(2025);

while (true) {
  console.clear();
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let mils = new Date().getMilliseconds();
  setTimeout(() => console.log(`${hour} : ${min} : ${seconds} : ${mils}`), 1);
}

// class Rectangle {
//   constructor(w, h) {
//     this.width = w;
//     this.height = h;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return 2 * (this.height + this.width);
//   }
// }

// let shape = new Rectangle(12, 10);
// console.log(shape.getArea());
// console.log(shape.getPerimeter());
