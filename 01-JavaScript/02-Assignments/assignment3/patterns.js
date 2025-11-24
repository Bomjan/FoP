//  Submitted By, Sundra Bomjan, SOC C, Patterns

// DESIGN 1
let n = 8;
// console.log("Design 1:");
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// DESIGN 2
// console.log("Design 2:");
// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   console.log(line);
// }

// DESIGN 3
// console.log("Design 3:");
// for (let i = 1; i <= n; i++) {
//   let line = "";
//   for (let space = 0; space < n - i; space++) {
//     line += " ";
//   }
//   for (let star = 0; star < i; star++) {
//     line += "*";
//   }
//   console.log(line);
// }


// DESIGN 4
// console.log("Design 4:");
// for (let i = n; i >= 1; i--) {
//   let line = "";
//   for (let space = 0; space < n - i; space++) {
//     line += " ";
//   }
//   for (let star = 0; star < i; star++) {
//     line += "*";
//   }
//   console.log(line);
// }

//  DESIGN 5
console.log("Design 5:");
for (let i = 1; i <= n; i++) {
  let line = "";

  for (let space = 0; space < n - i; space++) {
    line += " ";
  }
  for (let star = 0; star < (2 * i - 1); star++) {
    line += "*";
  }
  console.log(line);
}
for (let i = n - 1; i >= 1; i--) {
  let line = "";
  for (let space = 0; space < n - i; space++) {
    line += " ";
  }
  for (let star = 0; star < (2 * i - 1); star++) {
    line += "*";
  }
  console.log(line);
}