const singleNumber = (nums: number[]): number => {
  let res = 0;

  for (const num of nums) {
    res ^= num;
  }

  return res;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
