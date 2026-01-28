'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function like this. It's only for demo purpose.
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//1. Using the `new` keyword creates a new {} empty object.
// 2. function is called and the `this` is set to {}
// 3. {} is linked to Prototype
// 4. function automatically returns the object {}
const matilda = new Person('Matilda', 2013);
const jack = new Person('Jack', 2000);

console.log(jonas instanceof Person);
