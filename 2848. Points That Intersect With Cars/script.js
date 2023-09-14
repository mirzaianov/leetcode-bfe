// const numberOfPoints = function (nums) {
//   nums.sort((a, b) => a[0] - b[0]);

//   const len = nums.length;
//   let val0 = nums[0][0];
//   let val1 = nums[0][1];
//   let count = val1 - val0 + 1;

//   for (let i = 0; i < len; i++) {
//     if (nums[i][0] > val1) {
//       val0 = nums[i][0];
//       val1 = nums[i][1];
//       count += val1 - val0 + 1;
//     }

//     if (nums[i][1] > val1) {
//       count += nums[i][1] - val1;
//       val1 = nums[i][1];
//     }
//   }

//   return count;
// };

const numberOfPoints = function (nums) {
  const res = new Set();

  for (const arr of nums) {
    for (let i = arr[0]; i <= arr[1]; i += 1) {
      res.add(i);
    }
  }

  return res.size;
};

console.log(
  numberOfPoints([
    [3, 6],
    [1, 5],
    [4, 7],
  ]),
); // 7
console.log(
  numberOfPoints([
    [1, 3],
    [5, 8],
  ]),
); // 7
console.log(
  numberOfPoints([
    [4, 4],
    [9, 10],
    [9, 10],
    [3, 8],
  ]),
); // 8
console.log(
  numberOfPoints([
    [2, 5],
    [3, 8],
    [1, 6],
    [4, 10],
  ]),
); // 10
console.log(
  numberOfPoints([
    [3, 6],
    [4, 8],
    [7, 9],
    [3, 3],
    [9, 10],
    [5, 8],
    [1, 2],
    [7, 8],
    [3, 10],
  ]),
); // 10
