const fairCandySwap = (aliceSizes: number[], bobSizes: number[]): number[] => {
  const set = new Set<number>();
  const aliceSum: number = aliceSizes.reduce((acc, item) => acc + item, 0);
  let bobSum = 0;

  for (let i = 0; i < bobSizes.length; i += 1) {
    bobSum += bobSizes[i];
    set.add(bobSizes[i]);
  }

  const diff: number = (aliceSum - bobSum) / 2;

  for (let i = 0; i < aliceSizes.length; i += 1) {
    const target: number = aliceSizes[i] - diff;

    if (set.has(target)) return [aliceSizes[i], target];
  }

  return [-1, -1];
};

export default fairCandySwap;
