const app = () => {
  let a = 12;
  let b = 0;
  let operator = "*";

  // we gotta take a, b, and operator from prompt and dont like that haha

  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  const multiply = (x, y) => x * y;
  const divide = (x, y) => {
    if (y == 0) {
      console.log("Division by zero error");
      return NaN;
    } else {
      return x / y;
    }
  };

  switch (operator) {
    case "+":
      console.log(`${a} + ${b} = ${add(a, b)}`);
      break;
    case "-":
      console.log(`${a} - ${b} = ${subtract(a, b)}`);
      break;
    case "*":
      console.log(`${a} x ${b} = ${multiply(a, b)}`);
      break;
    case "/":
      console.log(`${a} / ${b} = ${divide(a, b)}`);
      break;
    default:
      console.log("Invalid operator");
  }
};
app();
