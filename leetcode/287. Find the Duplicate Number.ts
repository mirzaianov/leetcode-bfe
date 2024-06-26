const findDuplicate = (nums: number[]): number => {
  let slow: number = nums[0];
  let fast: number = nums[0];

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) break;
  }

  slow = nums[0];

  while (fast !== slow) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

export default findDuplicate;
