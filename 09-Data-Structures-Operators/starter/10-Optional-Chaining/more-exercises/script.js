const user = {
  name: 'Alex',
  settings: {
    theme: 'dark',
  },
};

console.log(user.settings?.theme ?? 'light'); // 'dark'
console.log(user.profile?.age ?? 18); // 18
console.log(user.settings?.fontSize ?? 14); // 14

// Exe 2
// const config = {
//   volume: 0,
//   muted: false,
// };

// console.log(config.volume ?? 50); // 0
// console.log(config.volume || 50); // 50

// console.log(config.muted ?? true); // false
// console.log(config.muted || true); // true

// Exe 3
const data = {
  results: {
    items: null,
  },
};

console.log(data.results?.items?.length ?? 'No items'); //
console.log(data.results?.missing?.value ?? 'Not found');

// Exe 4
const users = [];

console.log(users[0]?.name ?? 'No users'); // No users

users.push({ name: '' });

console.log(users[0]?.name ?? 'No users'); // ''
console.log(users[0]?.name || 'No users'); // 'No users'

// Exe 5
const calculator = {
  add(a, b) {
    return a + b;
  },
};

console.log(calculator.add?.(2, 3) ?? 'No method'); // 5
console.log(calculator.subtract?.(2, 3) ?? 'No method'); // 'No method

// Exe 6
const apiResponse = {
  user: {
    preferences: {
      notifications: 0,
    },
  },
};

const notifications = apiResponse.user?.preferences?.notifications ?? 1;

console.log(notifications); // 0

// Exe 7
const value = null ?? undefined ?? 0 ?? 'fallback';
console.log(value);
