const maximizeSum = (nums: number[], k: number): number => {
  const max = Math.max(...nums);
  let count = 0;

  for (let i = 0; i < k; i += 1) {
    count += max + i;
  }

  return count;
};

export default maximizeSum;
