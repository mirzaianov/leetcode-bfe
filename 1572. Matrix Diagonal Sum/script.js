// var diagonalSum = function (mat) {
//   let myMap = {};
//   let j = mat.length - 1;

//   for (let i = 0; i < mat.length; i++) {
//     myMap[`cell ${i}x${i}`] = mat[i][i];
//     myMap[`cell ${i}x${j}`] = mat[i][j];

//     j--;
//   }

//   return Object.values(myMap).reduce((acc, val) => acc + val, 0);
// };

var diagonalSum = function (mat) {
  const length = mat[0].length;
  let j = length - 1;

  let sum = 0;

  for (let i = 0; i < length; i++) {
    if (i === j) {
      sum += mat[i][j];
    } else {
      sum += mat[i][j];
      sum += mat[i][i];
    }

    j--;
  }

  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 25
console.log(
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
); // 8
console.log(diagonalSum([[5]])); // 5
