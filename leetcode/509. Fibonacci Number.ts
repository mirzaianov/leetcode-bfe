// const fib = (
//   n: number,
//   memo: Map<number, number> = new Map([
//     [0, 0],
//     [1, 1],
//   ]),
// ): number => {
//   if (memo.has(n)) return memo.get(n) as number;

//   memo.set(n, fib(n - 1, memo) + fib(n - 2, memo));

//   return memo.get(n) as number;
// };

const fib = (n: number): number => {
  let one = 0;
  let two = 1;

  for (let i = 0; i < n; i += 1) {
    [one, two] = [one + two, one];
  }

  return one;
};

export default fib;
