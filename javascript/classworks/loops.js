// let n = 20;
// for (let i = 1; i <= n; i += 2) {
//     console.log(i);
// }

// for (let i = 20; i >= 0; i--) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// let sum = 0;
// let number = 5;
// for(let i = 1; i <= number; i++){
//     sum += i;
// }
// console.log(sum);

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }


// * 0 to 20 odd numbers
// let i = 0;
// while (i < 20) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// * 20 to 0 even numbers
// let n = 20;
// while (n >= 0) {
//   if (n % 2 == 0) {
//     console.log(n);
//   }
//   n--;
// }

// let n = 0;
// while (n < 40) {
//   console.log(n);
//   if (n === 5){
//     break;
//   }
//   n++;
// }

// let n = 1;
// let sum = 0;
// while (n <= 5) {
//   sum += n;
//   n++;
//   console.log(sum);
// }

// let num = 10;
// do {
//   console.log(num);
//   num--;
// } while(num >= 1);

// let num ;
// do{
//     num = prompt("Enter a number between 0 and  100: ");  
// } while (!(num >= 0 && num <= 100));

// let n = 0;
// do {
//     if (n % 2 !== 0) {
//         console.log(n);
//     }
//     n++;
// } while (n <= 10); 

// let n = 10;
// do {
//   console.log(n%2 == 0 ? n : "Pizza")
//   n--;
// } while(n >= 0);

// for (let i = 0; i <=5; i++){
//   console.log(`${i} is ${i%2 == 0? "Even" : "Odd"}`);
// }


// let sum = 0;
// while (n < 25){
//   if (n%3 == 0 || n%5 == 0){
//     sum += n;
//     console.log(`The sum is: ${sum}`);
//   }
//   n++;
// }

// do {
//   if (n==6){
//     console.log("The number is " + n);
//     break;
//   }
//   console.log(n%2 == 0? "EVEN": "ODD");
//   n++;
// }while (n<10)


// let n = 1;
// * for loop 
// for (; n<=12; n++){
//   console.log(`7 x ${n} = ${7*n}`)
// }

// * while loop
// while (n <= 10){
//   console.log(`7 x ${n} = ${7*n}`);
//   n++;
// }

// * do while loop
// do{
//   console.log(`7 x ${n} = ${7*n}`);
//   n++;
// } while (n<=10)

for(let i = 1; i<=8; i++){
  let stars = "";
  for(let j =0; j<i; j++){
    stars += "* "
  }
  console.log(stars)
}