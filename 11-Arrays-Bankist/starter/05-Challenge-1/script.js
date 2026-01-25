/*
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
 */
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // console.log(dogsJuliaCorrected);

  dogsCombined = [...dogsJuliaCorrected, ...dogsKate];
  // console.log(dogsCombined);
  dogsCombined.forEach(function (dogAge, idx) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${idx + 1} is an adult, and is ${dogAge} years old`,
      );
    } else {
      console.log(`Dog number ${idx + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
