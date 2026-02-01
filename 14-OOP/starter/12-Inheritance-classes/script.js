class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}!`);
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
// ========================================= Inheritance using Classes================================

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super call always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log('This is the calcAge method in the StudentCl.');
  }
}

// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
