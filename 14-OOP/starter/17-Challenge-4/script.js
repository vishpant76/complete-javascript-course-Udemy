class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Speed after accelerating: ${this.speed}`);
    // return this
  }

  brake() {
    this.speed -= 5;
    console.log(`Speed after brake: ${this.speed}`);

    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  // Polymorphism
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`,
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().chargeBattery(50).brake().accelerate().accelerate().brake();
// console.log(test);

console.log(rivian.speedUS);
