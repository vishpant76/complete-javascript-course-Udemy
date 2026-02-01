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

  get_movements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }
  // withdrawal(val) {
  //   this.movements.push(-val);
  // }
  withdrawal(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
  }

  static test() {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
acc1.deposit(200);
acc1.withdrawal(50);
acc1.deposit(300);

// ========================================== Encapsulation =========================================
// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// 5. static version of these four

Account.test();
