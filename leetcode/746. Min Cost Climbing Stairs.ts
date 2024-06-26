const minCostClimbingStairs = (cost: number[]): number => {
  let one: number = 0;
  let two: number = 0;

  for (let i: number = 2; i < cost.length + 1; i += 1) {
    [one, two] = [Math.min(one + cost[i - 1], two + cost[i - 2]), one];
  }

  return one;
};

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
