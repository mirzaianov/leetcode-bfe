// const sortedSquares = function (nums) {
//     return nums.map((item) => item ** 2).sort((a, b) => a - b);
// };

// #2

const sortedSquares = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  const res = new Array(n);

  for (let i = n - 1; i >= 0; i--) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      res[i] = nums[left] ** 2;
      left++;
    } else {
      res[i] = nums[right] ** 2;
      right--;
    }
  }

  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
