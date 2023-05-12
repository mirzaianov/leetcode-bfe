var sortTheStudents = function (score, k) {
  // return score.sort((a, b) => b[k] - a[k]);

  let isSwitch = true;

  while (isSwitch) {
    isSwitch = false;

    for (let i = 0; i < score.length - 1; i++) {
      if (score[i][k] < score[i + 1][k]) {
        [score[i], score[i + 1]] = [score[i + 1], score[i]];

        isSwitch = true;
      }
    }
  }

  return score;
};

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2
  )
); // [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
console.log(
  sortTheStudents(
    [
      [3, 4],
      [5, 6],
    ],
    0
  )
); // [[5,6],[3,4]]
