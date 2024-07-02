const canPartition = (nums: number[]): boolean => {
  const sum: number = nums.reduce((acc, item) => acc + item, 0);

  if (sum % 2 !== 0) return false;

  const target: number = sum / 2;
  let set = new Set<number>([0]);

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const nextSet = new Set<number>();

    for (const item of set) {
      if (item + nums[i] === target) return true;

      nextSet.add(item + nums[i]);
      nextSet.add(item);
    }

    set = nextSet;
  }

  return false;
};

export default canPartition;
