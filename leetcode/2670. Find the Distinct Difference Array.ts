function distinctDifferenceArray(nums: number[]): number[] {
  const n = nums.length;
  const result: number[] = new Array(n);
  const prefixSet: Set<number> = new Set();
  const suffixSet: Set<number> = new Set();
  const suffixDistinctCount: number[] = new Array(n);

  for (let i = n - 1; i >= 0; i -= 1) {
    suffixSet.add(nums[i]);
    suffixDistinctCount[i] = suffixSet.size;
  }

  for (let i = 0; i < n; i += 1) {
    prefixSet.add(nums[i]);

    const suffixCount = i + 1 < n ? suffixDistinctCount[i + 1] : 0;

    result[i] = prefixSet.size - suffixCount;
  }

  return result;
}

export default distinctDifferenceArray;
