const permute = (nums: number[]): number[][] => {
  const res: number[][] = [];

  const backtrack = (arr: number[]): void => {
    if (nums.length === arr.length) {
      res.push(arr.slice());
    }

    for (let i = 0; i < nums.length; i += 1) {
      const curr: number = nums[i];

      if (!arr.includes(curr)) {
        arr.push(curr);

        backtrack(arr);

        arr.pop();
      }
    }
  };

  backtrack([]);

  return res;
};

export default permute;
