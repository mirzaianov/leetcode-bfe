var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let rest = truckSize;
  let i = 0;
  let count = 0;

  while (rest > 0 && boxTypes[i]) {
    if (rest > boxTypes[i][0]) {
      count += boxTypes[i][0] * boxTypes[i][1];
      rest -= boxTypes[i][0];
    } else {
      count += rest * boxTypes[i][1];
      rest -= rest;
    }

    i++;
  }

  return count;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [2, 2],
      [3, 1],
    ],
    4
  )
); // 8
console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
); // 91
console.log(
  maximumUnits(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
); // 76
