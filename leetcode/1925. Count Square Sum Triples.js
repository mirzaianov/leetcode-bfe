// const countTriples = (n) => {
//   const arrOne = [];
//   const arrTwo = [];

//   for (let i = 1; i <= n; i += 1) {
//     arrOne.push(i);
//     arrTwo.push(i ** 2);
//   }

//   const set = new Set(arrTwo);
//   let res = 0;

//   for (let i = 0; i < arrOne.length; i += 1) {
//     for (let j = i + 1; j < arrOne.length; j += 1) {
//       if (set.has(arrOne[i] ** 2 + arrOne[j] ** 2)) res += 2;
//     }
//   }

//   return res;
// };

const countTriples = (n) => {
  let count = 0;

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const squareRoot = Math.sqrt(i * i + j * j);

      if (Number.isInteger(squareRoot) && squareRoot <= n) count += 1;
    }
  }

  return count;
};

console.log(countTriples(5)); // 2
console.log(countTriples(10)); // 4
