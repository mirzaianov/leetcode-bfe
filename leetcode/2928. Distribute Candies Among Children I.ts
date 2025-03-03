const findWays = (n: number, limit: number): number => {
  const max: number = Math.min(n, limit);
  const min: number = Math.max(0, n - limit);

  return Math.max(0, max - min + 1);
};

const distributeCandies = (n: number, limit: number): number => {
  let res = 0;

  for (let i = 0; i <= Math.min(n, limit); i += 1) {
    res += findWays(n - i, limit);
  }

  return res;
};

export default distributeCandies;
