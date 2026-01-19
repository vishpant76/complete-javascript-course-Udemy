const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = { ...jessica }; // spread operator
jessicaCopy.age = 29;
jessicaCopy.lastName = "Davis";

console.log(jessica);
console.log(jessicaCopy);
