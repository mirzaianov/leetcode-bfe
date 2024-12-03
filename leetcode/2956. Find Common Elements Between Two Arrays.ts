const countIndicies = (array: number[], store: Set<number>): number => {
  let count = 0;

  for (const item of array) {
    if (store.has(item)) count += 1;
  }

  return count;
};

const findIntersectionValues = (nums1: number[], nums2: number[]): number[] => [
  countIndicies(nums1, new Set(nums2)),
  countIndicies(nums2, new Set(nums1)),
];

export default findIntersectionValues;
