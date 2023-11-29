// const totalMoney = (n) => {
//   let count = 0;
//   let complement = 0;
//   let current = 1;

//   for (let i = 1; i <= n; i += 1) {
//     const add = complement + current;

//     count += add;
//     current += 1;

//     if (i % 7 === 0) {
//       complement += 1;
//       current = 1;
//     }
//   }

//   return count;
// };

const totalMoney = (n) => {
  const k = Math.floor(n / 7);
  const x = n % 7;
  return (7 * k * (k + 7)) / 2 + (x * (2 * k + x + 1)) / 2;
};

console.log(totalMoney(20)); // 96
