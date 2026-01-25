// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const jessicaCopy = { ...jessica }; // spread operator
// jessicaCopy.age = 29;
// jessicaCopy.lastName = "Davis";

// console.log(jessica);
// console.log(jessicaCopy);

arr = [2, 5, 4, 3, 6, 8];

// const avgAge = arr.reduce((avg, age) => (avg + age) / 2, arr[0]);
const avgAge = arr.reduce((avg, age) => avg + age, 0) / arr.length;

console.log(avgAge);
