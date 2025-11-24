// Question 1
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
  enlargeCircle() {
    this.radius *= 3;
    console.log("The circle is enlarged 3 times");
  }
  shrinkCircle() {
    this.radius /= 2;
    console.log("The circle is shrunk by half");
  }
}

// let circle1 = new Circle(2);
// const display = (circle, name) =>
//   console.log(
//     `Area of ${name} with radius ${circle.radius} is ${circle.getArea()} \n`
//   );

// display(circle1, "circle1");
// circle1.enlargeCircle();
// display(circle1, "circle1");
// circle1.shrinkCircle();
// display(circle1, "circle1");

// Question 2
class BankAccount {
  constructor(name, saving) {
    this.name = name;
    this.saving = saving;
  }
  getBalance() {
    return `${this.name} has $${this.saving}`;
  }
}

// let user1 = new BankAccount("Oliver", 1000);
// console.log(user1.getBalance());

// let user2 = new BankAccount("Richie Rich Bomjan", 100000);
// console.log(user2.getBalance());
// console.log("");

// Question 3
class Fan {
  constructor(speed, on = false) {
    this.speed = speed;
    this.on = on;
  }
  getState() {
    if (this.on) {
      let level = "";
      switch (this.speed) {
        case 1:
          level = "slow";
          break;
        case 2:
          level = "Medium";
          break;
        case 3:
          level = "fast";
          break;
        default:
          level = "unknown";
          break;
      }
      return `on at ${level} speed`;
    } else {
      return "off";
    }
  }
}
const describe = (name, fan) => console.log(`${name} is ${fan.getState()}`);

let fan1 = new Fan(1, true);
describe("Fan 1", fan1);

let fan2 = new Fan(3, true);
describe("Fan 2", fan2);

fan1.on = false;
describe("Fan 1", fan1);

fan2.speed = 2;
describe("Fan 2", fan2);
