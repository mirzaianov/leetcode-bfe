const permute = (nums: number[]): number[][] => {
  const res: number[][] = [];
  const curr: number[] = [];
  const selected: boolean[] = new Array(nums.length).fill(false);

  const backtrack = (i: number): void => {
    if (curr.length === nums.length) {
      res.push([...curr]);

      return;
    }

    for (let j = 0; j < nums.length; j += 1) {
      if (!selected[j]) {
        selected[j] = true;
        curr.push(nums[j]);

        backtrack(i + 1);

        selected[j] = false;
        curr.pop();
      }
    }
  };

  backtrack(0);

  return res;
};

export default permute;
