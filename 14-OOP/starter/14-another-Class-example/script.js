class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }
  // withdrawal(val) {
  //   this.movements.push(-val);
  // }
  withdrawal(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(200);
acc1.deposit(700);
acc1.deposit(900);
acc1.deposit(500);
acc1.withdrawal(300);
acc1.withdrawal(500);
