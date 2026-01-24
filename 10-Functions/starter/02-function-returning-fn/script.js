const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Vishal');

greet('Hola')('Carlos');

// Arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Namaste')('Vishal');
