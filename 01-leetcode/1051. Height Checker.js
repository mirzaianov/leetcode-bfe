var heightChecker = function (heights) {
  const order = [...heights].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < heights.length; i++) {
    console.log(heights[i], order[i]);

    if (heights[i] !== order[i]) count++;
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // 3
