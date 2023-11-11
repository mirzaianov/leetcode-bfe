var mergeSimilarItems = function (items1, items2) {
  const res = [...items1, ...items2].sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i][0] === res[i + 1][0]) {
      res[i][1] = res[i][1] + res[i + 1][1];
      res.splice([i + 1], 1);
    }
  }

  return res;
};

// console.log(
//   mergeSimilarItems(
//     [
//       [1, 1],
//       [4, 5],
//       [3, 8],
//     ],
//     [
//       [3, 1],
//       [1, 5],
//     ]
//   )
// ); // [[1,6],[3,9],[4,5]]
// console.log(
//   mergeSimilarItems(
//     [
//       [1, 1],
//       [3, 2],
//       [2, 3],
//     ],
//     [
//       [2, 1],
//       [3, 2],
//       [1, 3],
//     ]
//   )
// ); // [[1,4],[2,4],[3,4]]
console.log(
  mergeSimilarItems(
    [
      [1, 3],
      [2, 2],
    ],
    [
      [7, 1],
      [2, 2],
      [1, 4],
    ]
  )
); // [[1,7],[2,4],[7,1]]
