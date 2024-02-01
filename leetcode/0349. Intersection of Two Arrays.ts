const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);
  const res: number[] = [];

  for (const item of set1) {
    if (set2.has(item)) res.push(item);
  }

  return res;
};
