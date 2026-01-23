'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// ===================================== REST PATTERN ==============================================

// SPREAD operator - when ... on Right side of =
const arr = [1, 2, ...[4, 5]];
// console.log(arr);

// Rest pattern - when ... on left side of =?
const [a, b, ...c] = [1, 2, 5, 7, 9];
// console.log(a, b, c);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// Functions and Rest
const add = function (...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
};

// console.log(add(2, 3));
// console.log(add(3, 5, 7, 9));
// console.log(add(1, 4, 8, 11, 13));

const x = [23, 5, 7];

console.log(add(...x));
