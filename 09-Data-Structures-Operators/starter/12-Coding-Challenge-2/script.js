const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Task 1
for (let i = 0; i < game.scored.length; i++) {
  // console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

// Task 2
const odds = Object.values(game.odds);
// console.log(odds);
odds_sum = 0;
for (const odd of odds) {
  odds_sum += odd;
}
// console.log(`Average: ${odds_sum / odds.length}`);

// Task 3
/*
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5 
 */
/*
[ [ 'team1', 1.33 ], [ 'x', 3.25 ], [ 'team2', 6.5 ] ]
team1: 1.33
x: 3.25
team2: 6.5 
 */
const entries = Object.entries(game.odds);
// console.log(entries);
for (const [key, val] of entries) {
  // console.log(`${key}: ${val}`);
  console.log(`Odd of victory ${game[key] ?? 'draw'}: ${val}`);
}

// Task 4
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
/* const scorers = {};
for (const player of game.scored) {
  if (!scorers[player]) {
    scorers[player] = 1;
  } else {
    scorers[player] += 1;
  }
}

console.log(scorers); */

// Aliter
const scorers = {};
for (const player of game.scored) {
  scorers[player] ||= 0;
  scorers[player]++;
}

console.log(scorers);
