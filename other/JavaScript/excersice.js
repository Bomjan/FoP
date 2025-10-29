let num = 2;

switch (num + "2") {
  case 22:
    console.log("A");
    break;
  case "22":
    console.log("B");
  default:
    console.log("C");
}
