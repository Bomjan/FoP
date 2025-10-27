let balance = 15000;

const checkBalance = () => {
  console.log(`Your Balance is: ${balance}`);
};

const withDraw = (amount) => {
  if (balance < amount) {
    console.log("Insufficient balance bro");
  } else if (amount <= 0) {
    console.log("PLease enter a valid amount to withdraw");
  } else {
    balance -= amount;
    console.log(`With drew ${amount}, Current balance is ${balance}`);
  }
};

const deposit = (amount) => {
  if (amount <= 0) {
    console.log("Please enter a valid amount to deposit");
  } else {
    balance += amount;
    console.log(`Deposited ${amount}, New balance is ${balance}`);
  }
};

checkBalance();
withDraw(2000);
deposit(8900);
