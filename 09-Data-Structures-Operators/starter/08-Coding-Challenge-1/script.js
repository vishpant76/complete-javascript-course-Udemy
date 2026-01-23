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

// const players1 = []
// const players2 = []
const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;

const allPlayers = [...players1, ...players2];
// console.log(gk, fieldPlayers);
// console.log(players1, players2);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
// ALITER
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// Task 6
const printGoals = function (...playersWithGoals) {
  for (let player of playersWithGoals) {
    console.log(player);
  }
  console.log(`Number of goals: ${playersWithGoals.length}\n`);
};

printGoals('Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka');
printGoals(...game.scored);
// Task 7

team1 < team2 && console.log('Team 1 is more likely to win');
