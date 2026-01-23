const openingHours = {
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
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

// console.log(question);

// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// console.log(question.get('question'));

const answer = 3;
// console.log(question.get(question.get('correct') === answer));

const quesKeys = [...question.keys()];
const ansValues = [...question.values()];

console.log(quesKeys);
console.log(ansValues);
