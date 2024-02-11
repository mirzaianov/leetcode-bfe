const fourSumCount = (
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number => {
  const sumTwoArrays = (array1: number[], array2: number[]): Map<number, number> => {
    const len: number = array1.length;
    const res = new Map<number, number>();

    for (const num1 of array1) {
      for (const num2 of array2) {
        const sum: number = num1 + num2;

        res.set(sum, (res.get(sum) || 0) + 1);
      }
    }

    return res;
  };

  const sum1 = sumTwoArrays(nums1, nums2);
  const sum2 = sumTwoArrays(nums3, nums4);
  let count = 0;

  for (const [key, value] of sum1) {
    const offset = 0 - key;

    if (sum2.has(offset)) {
      count += sum2.get(offset) * sum1.get(key);
    }
  }

  return count;
};
