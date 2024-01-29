const rotate = (nums: number[], k: number): void => {
  for (let i = 0; i < k; i += 1) {
    nums.unshift(nums.pop()!);
  }
};
