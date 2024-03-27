const smallestTrimmedNumbers = (nums: string[], queries: number[][]): number[] => {
  const len: number = nums[0].length;

  return queries.map(([Kth, trim]): number => {
    const sorted = nums
      .map((num: string) => num.slice(len - trim, len))
      .map((num, idx): [string, number] => [num, idx])
      .sort((a, b) => a[0].localeCompare(b[0]));

    return sorted[Kth - 1][1];
  });
};
