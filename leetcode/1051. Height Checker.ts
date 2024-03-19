const heightChecker = (heights: number[]): number => {
  const sorted: number[] = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] !== sorted[i]) count += 1;
  }

  return count;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
