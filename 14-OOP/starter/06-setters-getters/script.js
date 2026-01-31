// class expression
// const PersonCl = class {}

// class declaration

// ========================= setters and getters ====================================

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 700;
console.log(account.latest);
// console.log(account.movements);

// =========================================

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property.
  calcAge() {
    // console.log(2037 - this.birthYear);
  }

  greet() {
    // console.log(`Hey ${this.firstName}!`);
  }
  // getter
  get age() {
    return 2037 - this.birthYear;
  }

  // When setting a property that already exists.
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a fullName.`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica', 1993);
// console.log(jessica);

jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();
