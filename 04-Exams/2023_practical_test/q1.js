class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  generateAccountNumber() {
    return Math.floor(Math.random() * 9999) + 1;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Invalid amount");
    }
  }
  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient amount");
    }
  }
  checkBalance() {
    return this.balance;
  }
}

let a1 = new Account(12, "Bomjan", 45112);
let a2 = new Account(12, "Bomjan", 188812);
let a3 = new Account(12, "Bomjan", 90002);
