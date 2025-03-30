const findJudge = (n: number, trust: number[][]): number => {
  const nums: number[] = new Array(n + 1).fill(0);

  for (const [i, j] of trust) {
    nums[i] -= 1;
    nums[j] += 1;
  }

  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === n - 1) return i;
  }

  return -1;
};

export default findJudge;
