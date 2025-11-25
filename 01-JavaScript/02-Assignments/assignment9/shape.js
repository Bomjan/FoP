// TODO Challenge 1
class Shape {
  // a
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  // b
  calcPerimeter() {
    return this.sides * this.sideLength;
  }
}

// c
// const square = new Shape("square", 4, 5);

// d
// console.log(square.calcPerimeter());

// e
// const triangle = new Shape("triangle", 3, 3);

// f
// console.log(triangle.calcPerimeter());

// TODO Challenge 2
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
  calcArea() {
    return this.sideLength ** 2;
  }
}

// const square = new Square(5);
// console.log(square.calcPerimeter());
// console.log(square.calcArea());

// TODO Challenge 3
// * Task 1
class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this._price = price;
  }

  get price() {
    return "$" + this._price;
  }

  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    } else {
      console.log("Invalid price");
    }
  }
}

const fop = new Course("Fundamentals of Programming", 14, 150000);
// console.log(fop);

const fed = new Course("Frontend Web Development", 16, 200000);
// console.log(fed);

// * Task 2
// fop.lengthPerPrice = function () {
//   return this.length / this.price;
// };
// fop.summarize = function () {
//   return `${this.title} is one of the best courses which is ${this.length} weeks long and it is only Nu.${this.price}`;
// };
// console.log(fop.lengthPerPrice());
// console.log(fop.summarize());

// * Task 3
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log("Papers are being published");
  }
}

const physics = new PracticalCourse(
  "Moment of Inertia and Angular Momentum",
  10,
  50000,
  30
);

console.log(`Old property: title => ${physics.title}`);
console.log(`New property: numOfExercises => ${physics.numOfExercises}`);

const biology = new TheoreticalCourse(
  "Genitically Modified Orgamisims",
  20,
  100000
);
biology.publish();
