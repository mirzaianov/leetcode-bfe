function removeDuplicates(nums: number[]): number {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] !== nums[r - 1]) {
      nums[l] = nums[r];
      l += 1;
    }

    r += 1;
  }

  return l;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
// console.log(removeDuplicates([1, 1, 2])); // 2, [1,2,_]
// console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); // 3, [-1,0,3]
