'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function like this. It's only for demo purpose.
  /*   this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }; */
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//1. Using the `new` keyword creates a new {} empty object.
// 2. function is called and the `this` is set to {}
// 3. {} is linked to Prototype
// 4. function automatically returns the object {}
const matilda = new Person('Matilda', 2013);
const jack = new Person('Jack', 2000);

// console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  // console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

//.prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// ========================== Prototypal inheritance of built in objects ===========================
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 7, 1, 7, 1, 6, 1, 3, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Adding new method to prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
