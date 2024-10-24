const countMaxOrSubsets = (nums: number[]): number => {
  const maxOR: number = nums.reduce((acc, item) => acc | item, 0);
  let count = 0;

  const backtrack = (start: number, currentOR: number) => {
    if (currentOR === maxOR) count += 1;

    for (let i = start; i < nums.length; i += 1) {
      backtrack(i + 1, currentOR | nums[i]);
    }
  };

  backtrack(0, 0);

  return count;
};

export default countMaxOrSubsets;
