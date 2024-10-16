const findSum = (num: number): number => {
  let sum = 0;

  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
};

const minElement = (nums: number[]): number => {
  let min = Infinity;

  for (const num of nums) min = Math.min(min, findSum(num));

  return min;
};

export default minElement;
