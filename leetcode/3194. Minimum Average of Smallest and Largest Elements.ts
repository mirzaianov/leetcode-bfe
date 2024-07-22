const minimumAverage = (nums: number[]): number => {
  nums.sort((a, b) => a - b);

  const res: number[] = [];

  while (nums.length > 1) {
    const min: number = nums.shift()!;
    const max: number = nums.pop()!;

    res.push((min + max) / 2);
  }

  return Math.min(...res);
};

export default minimumAverage;
