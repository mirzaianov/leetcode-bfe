const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  const res: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    const smallNumbers: number = nums.filter((n) => n < nums[i]).length;

    res.push(smallNumbers);
  }

  return res;
};

export default smallerNumbersThanCurrent;
