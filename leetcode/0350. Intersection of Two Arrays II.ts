const intersect = (nums1: number[], nums2: number[]): number[] => {
  const map = new Map<number, number>();

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const res: number[] = [];

  for (const num of nums2) {
    if (map.has(num) && map.get(num) !== 0) {
      map.set(num, map.get(num) - 1);
      res.push(num);
    }
  }

  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([1, 1], [1, 2])); // [1]
