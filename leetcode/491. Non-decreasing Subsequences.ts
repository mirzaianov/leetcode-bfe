const findSubsequences = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const set = new Set<string>();

  const dp = (index: number, temp: number[]): void => {
    const s: string = JSON.stringify(temp);

    if (set.has(s)) return;

    if (temp.length >= 2) result.push(temp);

    for (let i = index; i < nums.length; i += 1) {
      if (temp[temp.length - 1] > nums[i]) continue;

      set.add(s);
      dp(i + 1, [...temp, nums[i]]);
    }
  };

  dp(0, []);

  return result;
};

export default findSubsequences;
