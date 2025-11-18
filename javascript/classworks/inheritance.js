function myFun() {
  console.log("HI");
}

console.log(Object.getPrototypeOf(myFun) === Function.prototype);
console.log(Object.getPrototypeOf(myFun));
