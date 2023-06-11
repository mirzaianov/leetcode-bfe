var rowAndMaximumOnes = function (mat) {
  let smallRow = 0;
  let maxOnes = -Infinity;

  for (let i = 0; i < mat.length; i++) {
    let ones = mat[i].reduce((acc, val) => acc + val, 0);

    if (ones > maxOnes) {
      smallRow = i;
    }

    maxOnes = Math.max(maxOnes, ones);
  }

  return [smallRow, maxOnes];
};

console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 0],
  ])
); // [0,1]
console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ])
); // [1,2]
console.log(
  rowAndMaximumOnes([
    [0, 0],
    [1, 1],
    [0, 0],
  ])
); // [1,2]
