

const generateCapcha = (n=6) => {
  const wordList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+<>?[]{}~';
  let capcha = '';
  for (let i = 0; i < n; i++){
    capcha += wordList[Math.floor(Math.random()*wordList.length)];
  }
  return capcha;
}
const level = [
  {'lv': 1, 'attempts': 50000, 'capcha': generateCapcha(6)} ,
  {'lv': 2, 'attempts': 9000,  'capcha': generateCapcha(9)} ,
  {'lv': 3, 'attempts': 5000,  'capcha': generateCapcha(12)},
]

const createPin = () => {
  const numbers = '0123456789';
  let pin = ''
  for (let i = 0; i < 6; i++){
    pin += numbers[Math.floor(Math.random() * numbers.length)]
  }
  return pin;
}
let mypass = createPin();

const checkPin = (pin, atckPin = createPin()) => {
  [pin, atckPin] = [pin.split(''), atckPin.split('')];
  let closeness = 0;
  const formula = (a, b) => 1-Math.abs(a -b)/9;
  for (let i in pin){
    closeness += formula(parseInt(pin[i]), parseInt(atckPin[i]));
  }
  return [100 * closeness/pin.length, atckPin.join('')];
}

const bruteForce = (lv, mypass) => {
  let data = level[lv-1];
  let avgAccuracy = 0
  let success = false;
  let pin = "Not Found!"
  let i = 0;
  for (; i < data.attempts; i++){
    let result = checkPin(mypass);
    if(i == data.attempts/2){
      console.log(data.capcha);
    }
    if (result[0] == 100){
      pin = result[1];
      success = true;
      break;
    }
    avgAccuracy += result[0];
  }
  return [avgAccuracy/i, i, success, pin, mypass];
}

const guessPin = (pin) => {
  if (pin.length == 6){
    let result = checkPin(pin);
    console.log(result, pin)
  } else {
    console.log("pin must be 6 digit long")
  }
}
console.log(bruteForce(1, mypass));