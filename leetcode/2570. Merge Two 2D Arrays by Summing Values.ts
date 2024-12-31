const toMap = (num: number[][], store: Map<number, number>): void => {
  for (const [key, value] of num) {
    store.set(key, (store.get(key) || 0) + value);
  }
};

const mergeArrays = (nums1: number[][], nums2: number[][]): number[][] => {
  const map = new Map<number, number>();

  toMap(nums1, map);
  toMap(nums2, map);

  return [...map.entries()].sort((a, b) => a[0] - b[0]);
};

export default mergeArrays;
