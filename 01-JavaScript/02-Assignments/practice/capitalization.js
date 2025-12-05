// Write a function that capitalizes the first letter of each word:
let str = "hello world from javascript";

const cap = (text) => {
  return text
    .split(" ")
    .map((val) => {
      ini = val[0].toUpperCase();
      return ini + val.slice(1);
    })
    .join(" ");
};
console.log(cap(str));
