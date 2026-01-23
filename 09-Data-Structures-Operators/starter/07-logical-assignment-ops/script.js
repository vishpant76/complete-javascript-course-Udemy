const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizzara',
  owner: 'Vishal',
};

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1, rest2);

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

// console.log(rest1);

// rest2.owner &&= 'ANONYMOUS';
// console.log(rest2);
