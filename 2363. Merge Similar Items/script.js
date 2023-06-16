var mergeSimilarItems = function (items1, items2) {
  const res = [];

  items1.sort((a, b) => a[0] - b[0]);
  items2.sort((a, b) => a[0] - b[0]);

  const maxItems = items1.length > items2.length ? items1 : items2;
  let i = 0;
  let j = 0;
  let k = 0;

  while (maxItems[i]) {
    if (items1[j][0] === items2[k][0]) {
      res.push([items1[j][0], items1[j][1] + items2[k][1]]);
    }

    i++;
    j++;
    k++;
  }

  return res;
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
); // [[1,6],[3,9],[4,5]]
console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [3, 2],
      [2, 3],
    ],
    [
      [2, 1],
      [3, 2],
      [1, 3],
    ]
  )
); // [[1,4],[2,4],[3,4]]
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
