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

lufthansa.book(239, 'Vishal');
lufthansa.book(635, 'John Doe');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

// Storing a reference to the book method so other objects can reuse it
const book = lufthansa.book;

book.call(eurowings, 35, 'Shawn G');
console.log(lufthansa);
console.log(eurowings);
