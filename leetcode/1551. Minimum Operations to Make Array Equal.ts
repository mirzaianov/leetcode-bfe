const minOperations = (n: number): number => {
  let count = 0;

  for (let i = 1; i < Math.floor((2 * n + 1) / 2); i += 2) {
    count += n - i;
  }

  return count;
};

export default minOperations;
