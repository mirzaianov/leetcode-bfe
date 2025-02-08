// const climbStairs = (
//   n: number,
//   memo = new Map<number, number>([
//     [1, 1],
//     [2, 2],
//   ]),
// ): number => {
//   if (memo.has(n)) return memo.get(n) as number;

//   memo.set(n, climbStairs(n - 1, memo) + climbStairs(n - 2, memo));

//   return memo.get(n) as number;
// };

const climbStairs = (n: number): number => {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i += 1) {
    [one, two] = [one + two, one];
  }

  return one;
};

export default climbStairs;
