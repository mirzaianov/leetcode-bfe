const totalNumbers = (digits: number[]): number => {
  const set = new Set<string>();

  const dp = (arr: number[], nums: number[]) => {
    if (nums.length === 3) {
      if (nums[0] !== 0 && nums[2] % 2 === 0) {
        set.add(nums.join(''));
      }

      return;
    }

    for (let i = 0; i < arr.length; i += 1) {
      nums.push(arr[i]);

      dp([...arr.slice(0, i), ...arr.slice(i + 1)], nums);

      nums.pop();
    }
  };

  dp(digits, []);

  return set.size;
};

export default totalNumbers;
