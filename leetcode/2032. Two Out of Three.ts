const twoOutOfThree = (nums1: number[], nums2: number[], nums3: number[]): number[] => {
  const res = new Set<number>();
  const set1 = new Set<number>(nums1);
  const set2 = new Set<number>(nums2);
  const set3 = new Set<number>(nums3);

  for (const n of set1) {
    if (set2.has(n) || set3.has(n)) res.add(n);
  }

  for (const n of set2) {
    if (set3.has(n)) res.add(n);
  }

  return [...res.values()];
};

export default twoOutOfThree;
