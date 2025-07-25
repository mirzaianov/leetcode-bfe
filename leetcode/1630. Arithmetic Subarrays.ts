const isArithmetic = (nums: number[]): boolean => {
  if (nums.length < 3) return true;

  const sorted: number[] = [...nums].sort((a, b) => a - b);
  const diff: number = sorted[1] - sorted[0];

  for (let i = 2; i < sorted.length; i += 1) {
    if (sorted[i] - sorted[i - 1] !== diff) return false;
  }

  return true;
};

const checkArithmeticSubarrays = (nums: number[], l: number[], r: number[]): boolean[] => {
  const res: boolean[] = [];

  for (let i = 0; i < l.length; i += 1) {
    const curr: number[] = nums.slice(l[i], r[i] + 1);

    res.push(isArithmetic(curr));
  }

  return res;
};

export default checkArithmeticSubarrays;
