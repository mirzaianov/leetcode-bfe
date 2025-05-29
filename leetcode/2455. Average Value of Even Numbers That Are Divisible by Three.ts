const averageValue = (nums: number[]): number => {
  let sum = 0;
  let n = 0;

  for (const num of nums) {
    if (num % 2 === 0 && num % 3 === 0) {
      sum += num;
      n += 1;
    }
  }

  return n === 0 ? 0 : Math.floor(sum / n);
};

export default averageValue;
