'use strict';
///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

/////////////////////////////////////////////////////////
// Object References in Practice - Shallow vs Deep Copy
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Sarah', 'John'],
};

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPerson(jessica, 'Davis');

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log(jessica);
// console.log(marriedJessica);

// Shallow Copy
const jessicaCopy = { ...jessica }; // spread operator
jessicaCopy.age = 29;
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Alice');
jessicaCopy.family.push('Bob');

console.log(jessica);
console.log(jessicaCopy);

// Deep Copy
const jessicaClone = structuredClone(jessica);
console.log(jessicaClone);
console.log(jessica);
jessicaClone.family.pop();
jessicaClone.family.push('Vishal');
console.log(jessica);
console.log(jessicaClone);
