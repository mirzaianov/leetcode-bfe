const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  const index: number = nums1.length - n;

  nums1.splice(index, n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1, 2, 2, 3, 5, 6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1]
console.log(merge([2, 0], 1, [1], 1)); // [1, 2]
console.log(merge([1, 2, 4, 5, 6, 0], 5, [3], 1)); // [1, 2, 3, 4, 5, 6]
