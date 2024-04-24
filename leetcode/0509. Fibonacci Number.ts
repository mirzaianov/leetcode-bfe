const fib = (
  n: number,
  memo: Map<number, number> = new Map([
    [0, 0],
    [1, 1],
  ]),
): number => {
  if (memo.has(n)) return memo.get(n) as number;

  memo.set(n, fib(n - 1, memo) + fib(n - 2, memo));

  return memo.get(n) as number;
};

export default fib;
