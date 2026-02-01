const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Speed after accelerating: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Speed after brake: ${this.speed}`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
// ===================================== Challenge 3 ====================================

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link Prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// Polymorphism
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`,
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
