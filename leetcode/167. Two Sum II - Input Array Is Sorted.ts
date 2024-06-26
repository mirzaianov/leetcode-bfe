const twoSum = (numbers: number[], target: number): number[] => {
  let l = 0;
  let r: number = numbers.length - 1;

  while (l < r) {
    const sum: number = numbers[l] + numbers[r];

    if (sum === target) return [l + 1, r + 1];

    if (sum < target) l += 1;

    if (sum > target) r -= 1;
  }

  return [-1, -1];
};

export default twoSum;
