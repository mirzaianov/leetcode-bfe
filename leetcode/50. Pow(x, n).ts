const myPow = (x: number, n: number): number => {
  if (n === 0) return 1;

  if (x === 1) return 1;

  if (n < 0) return myPow(1 / x, Math.abs(n));

  if (n % 2 === 1) return x * myPow(x, n - 1);

  return myPow(x * x, n / 2);
};

export default myPow;
