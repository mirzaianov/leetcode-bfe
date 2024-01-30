function removeDuplicates(nums: number[]): number {
  let k = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k += 1;
    }
  }

  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5, [0,1,2,3,4,_,_,_,_,_]
// console.log(removeDuplicates([1, 1, 2])); // 2, [1,2,_]
// console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3])); // 3, [-1,0,3]
