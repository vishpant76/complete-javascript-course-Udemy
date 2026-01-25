/*
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 
 */

/*
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets 
 */

const ages = [5, 2, 4, 1, 15, 8, 3];
// const ages = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogAge) {
  const humanAges = ages
    .map(function (age) {
      if (age <= 2) return age * 2;
      else return 16 + age * 4;
    })
    .filter(age => age >= 18);
  const avgHumanAge =
    humanAges.reduce((acc, age) => acc + age) / humanAges.length;
  console.log(humanAges);
  console.log(avgHumanAge);
};

// console.log(calcAverageHumanAge(ages));
calcAverageHumanAge(ages);
