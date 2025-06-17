const countElements = (nums: number[]): number => {
  let min = Infinity;
  let max = -Infinity;

  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  let count = 0;

  for (const num of nums) {
    if (num > min && num < max) count += 1;
  }

  return count;
};

export default countElements;
