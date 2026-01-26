'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// console.log('testing...');
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
            <div class="movements__row">
              <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
              <div class="movements__value">${mov}€</div>
            </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// =============================== Map Method =================================

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

const movementsUSD = movements.map(function (curr) {
  return curr * eurToUSD;
});

// console.log(movementsUSD);

const movementsUSDarrow = movements.map(curr => curr * eurToUSD);
// console.log(movementsUSDarrow);

const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  }
});

// // console.log(movementsDescriptions);

// ================================= Computing UserNames ====================================
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const user = 'Steven Thomas Williams';

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      // .map(word => word[0])
      .map(word => word.charAt(0))
      .join('');
    // return userName;
  });
};

createUserNames(accounts);

// ================================= The FILTER Method ====================================

const deposits = movements.filter(mov => mov > 0);
// console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// ================================= The REDUCE Method ====================================
// console.log(movements);

/* const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr;
}, 0); */

// console.log(balance);
// const balance = movements.reduce((acc, curr) => acc + curr, 0);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// const labelBalance = document.querySelector('.balance__value');
// labelBalance.textContent = calcPrintBalance(movements);

const max = movements.reduce((max, mov) => Math.max(max, mov), movements[0]);

// console.log(max);

// ================================= Magic of Chaining Methods ====================================
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

// ================================= The Find Method ====================================

const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// // ================================= Implementing Login ====================================
/*
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close'); 
 */

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc?.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LLOGIN');
    labelWelcome.textContent = `Welcome back, ${currentAccount?.owner.split(' ')[0]}`;
  }

  // Display UI and message

  containerApp.style.opacity = 1;

  // Clear Input Fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

  // Update UI
  updateUI(currentAccount);
});

// // ================================= Implementing Transfers ====================================

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value,
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // console.log('Transfer Valid');
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// // // ================================= Find Index Method ====================================

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === Number(currentAccount.pin)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName,
    );
    // console.log(index);

    // Delete account
    accounts.splice(index, 1);
    // Hide UI to simulate log out
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// // // ============================= Find Last and last index Method ====================================
const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);
// Your latest large movement was X movements ago.

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 3000,
);
// console.log(movements);
// console.log(
//   `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
// );

// // // ============================= Some and Every =================================
// Checks only for equality
// console.log(movements.includes(-130));

// can specify a condition
const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

// Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// Keeping callback separate example
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// // // ============================= Flat and Flatmap =================================

// const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// One Liner
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// flatMap
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

// // // ============================= Sorting Arrays =================================
/* movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
 */
// movements.sort((a, b) => a - b);
// console.log(movements);
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// // // ============================= Array Grouping =================================

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals',
);

// console.log(groupedMovements);

const groupByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'Very Active';
  if (movementCount >= 4) return 'Active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});

// console.log(groupByActivity);
// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// review destructuring objects section in case the below line is not making sense.
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
// console.log(groupedAccounts);

// // // ============================= Create and Fill Arrays =================================
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', ''),
  );
  console.log(movementsUI);
  // console.log(movementsUI.map(el => el.textContent.replace('€', '')));
});

// // // ============================= Array Methods Practice =================================

// const bankDepositSum = accounts.map(acc => acc.movements);
// 1. Total deposit amount across all the accounts
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(amount => amount > 0)
  .reduce((acc, sum) => acc + sum, 0);
// console.log(bankDepositSum);

// 2. No of deposits in the bank with at least 1000 dollars.
const noOfDepositsAtLeast1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(amount => amount >= 1000).length;
// console.log(noOfDepositsAtLeast1000);
// ALITER
const noOfDepositsAtLeast1000second = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);

// console.log(noOfDepositsAtLeast1000second);

// 3. Create an object which contains the sum of the deposits and the withdrawals
/* const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  ); */

// ALITER
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );

// console.log(sums);

// 4. Convert string to title case
// "this is a nice title" => This Is A Nice Title
/* const convertTitleCase = function (title) {
  title = title
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ');
  console.log(title);
}; */

// ALITER to Above - following strict title case guidelines
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'is'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word)
        ? word
        : word.replace(word[0], word[0].toUpperCase()),
    )
    .join(' ');
  console.log(titleCase);
};

convertTitleCase('this is a nice title');
convertTitleCase('this is a LONG title but Not too Long');
