class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // This method is not chainable since we can't return both this and the #movements array at once. But if this method is last in the method chain, then it might work as long as the this object is returned on which this method will be called.
  get_movements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  // withdrawal(val) {
  //   this.movements.push(-val);
  // }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }

  static test() {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.deposit(200);
// acc1.withdrawal(50);
// acc1.deposit(300);
acc1.deposit(300).withdrawal(200).deposit(100);
console.log(acc1);
