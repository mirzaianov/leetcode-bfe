const sortEvenOdd = (nums: number[]): number[] => {
  const evens: number[] = [];
  const odds: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    const curr: number = nums[i];

    i % 2 === 0 ? evens.push(curr) : odds.push(curr);
  }

  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);

  const res: number[] = [];

  for (let i = 0; i < evens.length; i += 1) {
    res.push(evens[i]);

    if (odds[i] !== undefined) res.push(odds[i]);
  }

  return res;
};

export default sortEvenOdd;
