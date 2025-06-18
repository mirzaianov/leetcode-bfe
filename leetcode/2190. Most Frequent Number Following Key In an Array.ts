const mostFrequent = (nums: number[], key: number): number => {
  const map = new Map<number, number>();
  let freq = 0;
  let val = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === key) {
      const curr: number = (map.get(nums[i + 1]) || 0) + 1;

      map.set(nums[i + 1], curr);

      if (curr > freq) {
        freq = curr;
        val = nums[i + 1];
      }
    }
  }

  return val;
};

export default mostFrequent;
