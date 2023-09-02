var minCostToMoveChips = function (position) {
  let odd = 0;
  let even = 0;

  for (let item of position) {
    if (item % 2 === 0) even++;
    else odd++;
  }

  return Math.min(odd, even);
};

console.log(minCostToMoveChips([1, 2, 3])); // 1
console.log(minCostToMoveChips([2, 2, 2, 3, 3])); // 2
console.log(minCostToMoveChips([1, 1000000000])); // 1
console.log(minCostToMoveChips([2, 3, 3])); // 1
console.log(minCostToMoveChips([6, 4, 7, 8, 2, 10, 2, 7, 9, 7])); // 4
