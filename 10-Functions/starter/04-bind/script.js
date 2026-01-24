const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Vishal');
// lufthansa.book(635, 'John Doe');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

// Storing a reference to the book method so other objects can reuse it
const book = lufthansa.book;

// book.call(eurowings, 35, 'Shawn G');
// console.log(lufthansa);
// console.log(eurowings);
// ============================== Bind Method==============================
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

bookEW(42, 'Vishal Von');

const bookEW34 = book.bind(eurowings, 34);
bookEW34('Patrick James');
// console.log(lufthansa);
// console.log(eurowings);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
