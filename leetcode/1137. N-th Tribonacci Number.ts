const tribonacci = (
  n: number,
  memo = new Map<number, number>([
    [0, 0],
    [1, 1],
    [2, 1],
  ]),
): number => {
  if (memo.has(n)) return memo.get(n)!;

  const res: number = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  memo.set(n, res);

  return res;
};

export default tribonacci;
