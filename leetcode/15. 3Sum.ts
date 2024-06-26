const threeSum = (nums: number[]): number[][] => {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  const target = 0;
  const results: number[][] = [];

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      const partTarget = target - nums[i];
      let j: number = i + 1;
      let k: number = nums.length - 1;

      while (j < k) {
        const partSum: number = nums[j] + nums[k];

        if (partSum === partTarget) {
          results.push([nums[i], nums[j], nums[k]]);

          while (nums[j] === nums[j + 1]) j += 1;
          while (nums[k] === nums[k - 1]) k -= 1;

          j += 1;
          k -= 1;
        }

        if (partSum < partTarget) {
          j += 1;
        }

        if (partSum > partTarget) {
          k -= 1;
        }
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
