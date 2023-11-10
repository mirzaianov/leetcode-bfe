var luckyNumbers = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let min = Math.min(...matrix[i]),
      idx = matrix[i].indexOf(min);

    if (matrix.every(arr => arr[idx] <= min)) return [min];
  }

  return [];
};

console.log(
  luckyNumbers([
    [3, 7, 19],
    [9, 11, 13],
    [15, 16, 17],
  ]),
); // [15]
// console.log(
//   luckyNumbers([
//     [1, 10, 4, 2],
//     [9, 3, 8, 7],
//     [15, 16, 17, 12],
//   ]),
// ); // [12]
// console.log(
//   luckyNumbers([
//     [7, 8],
//     [1, 2],
//   ]),
// ); // [7]
