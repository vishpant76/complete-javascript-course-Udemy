const secureBooking = function () {
  let passCount = 0;
  return function () {
    passCount++;
    console.log(`${passCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
console.dir(booker);
